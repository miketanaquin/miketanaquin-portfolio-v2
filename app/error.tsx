"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6 text-slate-50">
      <div className="max-w-md text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-orange-400">
          Something went wrong
        </p>
        <h2 className="mb-4 text-3xl font-semibold">This page could not be loaded.</h2>
        <p className="mb-6 text-slate-300">
          Please refresh the page or try again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full border border-orange-500 bg-orange-500/10 px-5 py-2.5 text-sm font-medium text-orange-200 transition hover:bg-orange-500/20"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
