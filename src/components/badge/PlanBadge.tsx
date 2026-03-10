import { TPlan } from "@/types/subscriber.type";

type TProps = {
  plan: TPlan;
};

const PlanBadge = ({ plan }: TProps) => {
  const PLAN_STYLES: Record<string, string> = {
    Premium: "bg-purple-100 text-purple-700",
    Gold: "bg-yellow-100 text-yellow-700",
    Basic: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded ${PLAN_STYLES[plan]}`}
    >
      {plan}
    </span>
  );
};

export default PlanBadge;
