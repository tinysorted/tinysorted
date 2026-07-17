interface Props {
  children: React.ReactNode;
}

export default function PageContainer({
  children,
}: Props) {
  return (
    <section
      className="
        max-w-[1100px]
        mx-auto
        px-6
      "
    >
      {children}
    </section>
  );
}