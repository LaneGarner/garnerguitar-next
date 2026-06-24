export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          id: string;
          slug: string;
          category_slug: string;
          title: string;
          description: string | null;
          part: number;
          is_free: boolean;
          price_cents: number | null;
          stripe_price_id: string | null;
          img_path: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          category_slug: string;
          title: string;
          description?: string | null;
          part: number;
          is_free?: boolean;
          price_cents?: number | null;
          stripe_price_id?: string | null;
          img_path?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          category_slug?: string;
          title?: string;
          description?: string | null;
          part?: number;
          is_free?: boolean;
          price_cents?: number | null;
          stripe_price_id?: string | null;
          img_path?: string | null;
          created_at?: string;
        };
      };
      lessons: {
        Row: {
          id: string;
          course_id: string;
          slug: string;
          title: string;
          content: string;
          sort_order: number;
          published: boolean;
          video_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          course_id: string;
          slug: string;
          title: string;
          content: string;
          sort_order: number;
          published?: boolean;
          video_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          course_id?: string;
          slug?: string;
          title?: string;
          content?: string;
          sort_order?: number;
          published?: boolean;
          video_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      user_purchases: {
        Row: {
          id: string;
          user_id: string | null;
          course_id: string;
          email: string | null;
          stripe_payment_id: string | null;
          purchased_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          course_id: string;
          email?: string | null;
          stripe_payment_id?: string | null;
          purchased_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          course_id?: string;
          email?: string | null;
          stripe_payment_id?: string | null;
          purchased_at?: string;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}

// Convenience types for use throughout the app
export type Course = Database["public"]["Tables"]["courses"]["Row"];
export type Lesson = Database["public"]["Tables"]["lessons"]["Row"];
export type UserPurchase = Database["public"]["Tables"]["user_purchases"]["Row"];

// Lesson with course data joined
export interface LessonWithCourse extends Lesson {
  courses: Course;
}

// Course with lessons
export interface CourseWithLessons extends Course {
  lessons: Lesson[];
}
