interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="space-y-3">
      {title && (
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      )}
      {children}
    </div>
  );
}

export default Section;