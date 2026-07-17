interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <header
      className="
        pt-24
        pb-20
      "
    >
      {eyebrow && (
        <p
          className="
            uppercase
            tracking-[0.25em]
            text-xs
            text-neutral-500
            mb-5
          "
        >
          {eyebrow}
        </p>
      )}

      <h1
        className="
          text-5xl
          md:text-7xl
          font-light
          tracking-[-0.04em]
          leading-none
        "
      >
        {title}
      </h1>

      {description && (
        <p
          className="
            mt-8
            max-w-3xl
            text-xl
            leading-9
            text-neutral-600
          "
        >
          {description}
        </p>
      )}
    </header>
  );
}