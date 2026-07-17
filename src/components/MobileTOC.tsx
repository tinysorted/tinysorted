"use client";

import { useState } from "react";

function slugify(text: string) {
return text
.toLowerCase()
.replace(/[^\w\s-]/g, "")
.trim()
.replace(/\s+/g, "-");
}

interface Props {
body: any[];
}

export default function MobileTOC({
body,
}: Props) {
const [open, setOpen] =
useState(false);

const headings =
body?.filter(
(block) =>
block._type === "block" &&
block.style === "h2"
) || [];

if (!headings.length) {
return null;
}

return ( <div
   className="
     xl:hidden
     mb-10
   "
 >
<button
onClick={() =>
setOpen(!open)
}
className="
w-full


      rounded-2xl
      border
      border-neutral-200

      bg-white

      px-5
      py-4

      flex
      items-center
      justify-between

      text-sm
      font-medium
    "
  >
    <span>
      Table of Contents
    </span>

    <span>
      {open ? "−" : "+"}
    </span>
  </button>

  {open && (
    <div
      className="
        mt-3

        rounded-2xl
        border
        border-neutral-200

        bg-white

        p-5
      "
    >
      <ul className="space-y-4">
        {headings.map(
          (
            heading: any
          ) => {
            const text =
              heading.children
                ?.map(
                  (
                    child: any
                  ) =>
                    child.text
                )
                .join("") ||
              "";

            const id =
              slugify(text);

            return (
              <li
                key={
                  heading._key
                }
              >
                <a
                  href={`#${id}`}
                  onClick={() =>
                    setOpen(
                      false
                    )
                  }
                  className="
                    text-sm
                    text-neutral-600
                    hover:text-neutral-900
                    transition
                  "
                >
                  {text}
                </a>
              </li>
            );
          }
        )}
      </ul>
    </div>
  )}
</div>

);
}
