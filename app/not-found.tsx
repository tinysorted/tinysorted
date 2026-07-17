import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="
        min-h-[80vh]
        flex
        items-center
        justify-center
        bg-[#F7F6F3]
        px-6
      "
    >
      <div
        className="
          text-center
          max-w-2xl
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-neutral-500
            mb-4
          "
        >
          Error 404
        </p>

        <h1
          className="
            text-5xl
            md:text-7xl
            font-light
            tracking-[-0.03em]
            leading-tight
          "
        >
          Page not found.
        </h1>

        <p
          className="
            mt-6
            text-lg
            leading-8
            text-neutral-600
          "
        >
          The page you're looking for doesn't
          exist or may have been moved.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-black
              px-8
              py-4
              text-white
              transition
              hover:opacity-90
            "
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}