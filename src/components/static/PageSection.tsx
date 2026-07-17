interface Props {
  title: string;
  children: React.ReactNode;
}

export default function PageSection({
  title,
  children,
}: Props) {
  return (
    <section className="mb-16">
      <h2
        className="
          text-3xl
          font-light
          mb-6
        "
      >
        {title}
      </h2>

      <div
        className="
          space-y-6

          text-lg
          leading-9
          text-neutral-700
        "
      >
        {children}
      </div>
    </section>
  );
}