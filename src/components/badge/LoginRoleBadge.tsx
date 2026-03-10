import { AdminRole } from "@/types/admin.type";

const RoleBadge = ({ role }: { role: AdminRole }) => {
  return (
    <>
      <div className="mt-1">
        <span
          className={`
      inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
      ${
        role === "Finance"
          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
          : role === "Support"
            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
            : role === "Verifier"
              ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
              : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
      }
    `}
        >
          {role}
        </span>
      </div>
    </>
  );
};

export default RoleBadge;
