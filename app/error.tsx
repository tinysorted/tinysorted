"use client";

import { useEffect } from "react";

export default function Error({
error,
reset,
}: {
error: Error & {
digest?: string;
};
reset: () => void;
}) {
useEffect(() => {
console.error(error);
}, [error]);

return ( <main className="bg-[#F7F6F3] min-h-screen flex items-center justify-center px-6"> <div className="max-w-xl text-center">


    <p
      className="
        uppercase
        tracking-[0.25em]
        text-xs
        text-neutral-500
        mb-6
      "
    >
      Something went wrong
    </p>

    <h1
      className="
        text-5xl
        md:text-6xl
        font-light
        leading-tight
        mb-6
      "
    >
      Unexpected error.
    </h1>

    <p
      className="
        text-neutral-600
        leading-8
        mb-10
      "
    >
      An unexpected problem occurred while loading this page.
      Please try again.
    </p>

    <button
      onClick={() => reset()}
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        px-8
        py-4
        bg-neutral-900
        text-white
        transition
        hover:opacity-90
      "
    >
      Try Again
    </button>

  </div>
</main>

);
}
