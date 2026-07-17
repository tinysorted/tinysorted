"use client";

import {
  useEffect,
  useState,
} from "react";

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

export default function TableOfContents({
  body,
}: Props) {
  const [activeId, setActiveId] =
    useState("");

  const headings =
    body?.filter(
      (block) =>
        block._type === "block" &&
        block.style === "h2"
    ) || [];

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                setActiveId(
                  entry.target.id
                );
              }
            }
          );
        },
        {
          rootMargin:
            "-20% 0px -70% 0px",
        }
      );

    const elements =
      document.querySelectorAll(
        "h2[id]"
      );

    elements.forEach((el) =>
      observer.observe(el)
    );

    return () => {
      elements.forEach((el) =>
        observer.unobserve(el)
      );
    };
  }, []);

  if (!headings.length) {
    return null;
  }

  return (
 <aside
  className="
    hidden
    lg:block
    sticky
    top-32
    h-fit
    self-start
  "
>
      <div
  className="
    rounded-[28px]
    border
    border-neutral-200
    bg-white/80
    backdrop-blur-md
    shadow-sm
    p-6
  "
>
        <p
          className="
            uppercase
            tracking-[0.25em]
            text-[11px]
            text-neutral-500
            mb-6
          "
        >
          Contents
        </p>

        <ul className="space-y-4">
          {headings.map(
            (heading: any) => {
              const text =
                heading.children
                  ?.map(
                    (
                      child: any
                    ) =>
                      child.text
                  )
                  .join("") || "";

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
                    className={`block text-sm leading-relaxed transition ${
                     activeId === id
  ? "text-neutral-900 font-semibold border-l-2 border-neutral-900 pl-3"
                        : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {text}
                  </a>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </aside>
  );
}