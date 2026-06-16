import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().min(1).max(100),
      email: z.string().email(),
      projectType: z.string().max(100),
      message: z.string().min(10).max(5000),
    })
  )
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("Email service not configured");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "AM Prime Construction <contact@am-prime-construction.co.uk>",
        to: ["contact@am-prime-construction.co.uk"],
        reply_to: data.email,
        subject: `New enquiry from ${data.name}`,
        text: [
          "New enquiry via the website contact form.",
          "",
          `Name:         ${data.name}`,
          `Email:        ${data.email}`,
          `Project type: ${data.projectType || "Not specified"}`,
          "",
          "Message:",
          "─────────────────────────────────────",
          data.message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Resend error:", res.status, body);
      throw new Error("Failed to send email");
    }

    return { ok: true };
  });
