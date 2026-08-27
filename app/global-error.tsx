"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-slate-50">
        <div className="flex min-h-screen items-center justify-center px-6 text-center">
          <div className="max-w-md">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-orange-400">
              Error
            </p>
            <h2 className="mb-4 text-3xl font-semibold">Something unexpected happened.</h2>
            <p className="mb-6 text-slate-300">
              The app needs to recover. Refreshing the page or retrying will help.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="rounded-full border border-orange-500 bg-orange-500/10 px-5 py-2.5 text-sm font-medium text-orange-200 transition hover:bg-orange-500/20"
            >
              Retry
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
