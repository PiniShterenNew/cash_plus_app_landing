"use server";

import { createServerSupabaseClient } from "@/lib/supabase-server";

export type WaitlistResult =
  | { success: true; message: string }
  | { success: false; duplicate: true; message: string }
  | { success: false; duplicate: false; message: string };

function getUtmSource(referrer?: string): string | null {
  if (!referrer) return null;
  try {
    const url = new URL(referrer);
    return url.searchParams.get("utm_source");
  } catch {
    return null;
  }
}

export async function joinWaitlist(
  email: string,
  referrer?: string
): Promise<WaitlistResult> {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      success: false,
      duplicate: false,
      message: "כתובת המייל אינה תקינה",
    };
  }

  const supabase = createServerSupabaseClient();
  const source = getUtmSource(referrer) ?? "landing_page";

  const { error } = await supabase.from("waitlist").insert({
    email: email.toLowerCase().trim(),
    source,
    referrer: referrer ?? null,
  });

  if (error) {
    if (error.code === "23505") {
      return {
        success: false,
        duplicate: true,
        message: "כבר נרשמת! נעדכן אותך בקרוב 🎉",
      };
    }
    console.error("Waitlist insert error:", error.message);
    return {
      success: false,
      duplicate: false,
      message: "משהו השתבש. נסו שוב בעוד רגע.",
    };
  }

  return {
    success: true,
    message: "מעולה, נרשמת בהצלחה! נעדכן אותך ברגע שנפתח.",
  };
}
