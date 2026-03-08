import { Zap } from "lucide-react";
import { useRouter } from "next/navigation";

const SignInstallItem = () => {
  const router = useRouter();
  return (
    <div onClick={()=> router.push('/new-sign-install')} className="flex items-center justify-between p-4 sm:p-5 border border-border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="text-primary shrink-0">
          <Zap className="w-5 h-5" />
        </div>
        <span className="text-foreground font-medium text-sm sm:text-base">
          Order New Sign Install
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        {/* {badge && (
          <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
            {badge}
          </span>
        )} */}
        <svg
          className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default SignInstallItem;
