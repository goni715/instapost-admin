interface DetailItemProps {
  label: string;
  value: string | React.ReactNode;
  className?: string;
}

function DetailItem({ label, value, className = "" }: DetailItemProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      <p className="text-sm font-semibold text-gray-900">{label}</p>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  );
}

export default DetailItem;
