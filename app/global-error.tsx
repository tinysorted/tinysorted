"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <div>
          <h1>
            Something went wrong.
          </h1>

          <p>
            Please try again.
          </p>

          <button
            onClick={() => reset()}
            style={{
              marginTop: "16px",
              padding:
                "12px 20px",
              cursor: "pointer",
            }}
          >
            Reload Page
          </button>
        </div>
      </body>
    </html>
  );
}