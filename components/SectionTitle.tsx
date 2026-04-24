type SectionTitleProps = {
  eyebrow: string;
  title: string;
  className?: string;
};

export function SectionTitle({ eyebrow, title, className = "" }: SectionTitleProps) {
  return (
    <div className={className}>
      <p className="mb-2 inline-block border-[3px] border-black bg-[#00d8ff] px-3 py-1 text-xs font-black uppercase tracking-[0.2em]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black uppercase leading-[0.92] tracking-tight text-black md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
