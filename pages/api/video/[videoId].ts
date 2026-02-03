import type { NextApiRequest, NextApiResponse } from "next";
import { createApiRouteClient } from "../../../lib/supabase/server";
import { getSignedStreamUrlViaApi } from "../../../lib/cloudflare/stream";
import type { Lesson, Course } from "../../../lib/supabase/types";

type ResponseData = {
  url?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { videoId } = req.query;

  if (!videoId || typeof videoId !== "string") {
    return res.status(400).json({ error: "Video ID is required" });
  }

  try {
    const supabase = createApiRouteClient(req, res);

    // Get the current user
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Find which lesson this video belongs to
    const { data: lessonData, error: lessonError } = await supabase
      .from("lessons")
      .select("*")
      .eq("video_id", videoId)
      .single();

    if (lessonError || !lessonData) {
      return res.status(404).json({ error: "Video not found" });
    }

    const lesson = lessonData as Lesson;

    // Get the course to check if it's free
    const { data: courseData, error: courseError } = await supabase
      .from("courses")
      .select("*")
      .eq("id", lesson.course_id)
      .single();

    if (courseError || !courseData) {
      return res.status(404).json({ error: "Course not found" });
    }

    const course = courseData as Course;

    // Check access for paid courses
    if (!course.is_free) {
      if (!user) {
        return res.status(401).json({ error: "Authentication required" });
      }

      // Check if user purchased this course
      const { data: purchase } = await supabase
        .from("user_purchases")
        .select("*")
        .eq("user_id", user.id)
        .eq("course_id", course.id)
        .single();

      if (!purchase) {
        return res.status(403).json({ error: "Course purchase required" });
      }
    }

    // Generate signed URL for the video
    const signedUrl = await getSignedStreamUrlViaApi(videoId, {
      expiresIn: 3600, // 1 hour
    });

    return res.status(200).json({ url: signedUrl });
  } catch (error) {
    console.error("Video API error:", error);
    return res.status(500).json({ error: "Failed to generate video URL" });
  }
}
