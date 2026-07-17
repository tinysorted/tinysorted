interface Props {
  children: React.ReactNode;
}

export default function PageTitle({
  children,
}: Props) {
  return (
    <h3
      className="
        text-2xl
        font-medium
        mb-4
      "
    >
      {children}
    </h3>
  );
}