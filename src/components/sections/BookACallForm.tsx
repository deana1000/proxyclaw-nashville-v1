"use client";

import { useState, type FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdanydz";

export default function BookACallForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    /* ---- If no Formspree endpoint is configured, let the native form submit ---- */
    if (!FORMSPREE_ENDPOINT) return;

    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          (body as { error?: string }).error ??
            "Submission failed — please try again.",
        );
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form
      className="space-y-5"
      action={FORMSPREE_ENDPOINT || undefined}
      method="POST"
      onSubmit={handleSubmit}
    >
      {children}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={
            "inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" +
            (status === "submitting" ? " cursor-not-allowed opacity-60" : "")
          }
        >
          {status === "submitting" ? "Sending…" : "Request a call"}
        </button>
      </div>

      <p className="text-xs text-brand-400">
        We'll only use this info to respond and set up the call.
      </p>

      {status === "success" && (
        <p className="text-sm font-medium text-green-700">
          Got it. We'll reply by email to schedule a time.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}
