export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-[604px] shadow-sm p-10 rounded-3xl flex flex-col gap-8 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border-b text-xl font-bold border-b-neutral-100 pb-4 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
