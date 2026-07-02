interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {/* Badge */}
      <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
        {badge}
      </span>

      {/* Heading */}
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}