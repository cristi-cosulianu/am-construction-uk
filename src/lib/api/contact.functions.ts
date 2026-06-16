import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getCloudflareEnv } from "../cloudflare-env.server";

interface SendEmailBinding {
  send(message: {
    from: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
  }): Promise<void>;
}

interface CloudflareEnv {
  SEND_EMAIL: SendEmailBinding;
}

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
    const env = getCloudflareEnv() as CloudflareEnv;

    if (!env?.SEND_EMAIL) {
      throw new Error("Email service not configured");
    }

    await env.SEND_EMAIL.send({
      from: "contact@am-prime-construction.co.uk",
      to: "contact@am-prime-construction.co.uk",
      subject: `New enquiry from ${data.name}`,
      text: [
        `You have a new enquiry via the website contact form.`,
        ``,
        `Name:         ${data.name}`,
        `Email:        ${data.email}`,
        `Project type: ${data.projectType || "Not specified"}`,
        ``,
        `Message:`,
        `─────────────────────────────────────`,
        data.message,
      ].join("\n"),
    });

    return { ok: true };
  });
