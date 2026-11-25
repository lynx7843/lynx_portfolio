import { useState } from "react";
import { footerText } from "@/components/Footer";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border-b border-gray-600 bg-transparent py-2 text-gray-100 outline-none transition-colors placeholder:text-gray-500 focus:border-gray-200";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const key = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!key) {
      setStatus("error");
      setError("Contact form isn't configured yet.");
      return;
    }

    // currentTarget is null after the await below, so keep the form here
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("access_key", key);
    data.set("subject", "Portfolio contact");

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "Send failed");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Send failed");
    }
  }

  return (
    <form onSubmit={submit} className="flex max-w-md flex-col gap-4">
      <div>
        <h2 className="font-semibold">Email</h2>
        <p className="mt-1 text-[10px] normal-case text-gray-500">
          Open to freelancing, hiring and collaborations.
        </p>
      </div>

      <input name="email" type="email" required placeholder="Your email" className={`${field} ${footerText}`} />
      {/* Spam trap: real visitors never see or tick this */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <textarea
        name="message"
        required
        rows={4}
        placeholder="Your message"
        className={`${field} ${footerText} resize-none`}
      />

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-gray-200 px-5 py-2 font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
        <p role="status" className="text-[10px] normal-case text-gray-400">
          {status === "sent" && "Message sent. Thank you!"}
          {status === "error" && error}
        </p>
      </div>
    </form>
  );
}
