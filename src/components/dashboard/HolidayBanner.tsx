import { X, Zap } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type TProps = {
  setDismissBanner: Dispatch<SetStateAction<boolean>>;
};

const HolidayBanner = ({ setDismissBanner }: TProps) => {
  return (
    <>
      <div className="relative bg-[#23BBF81A] border border-border rounded-lg p-5 sm:p-6 mb-8 sm:mb-12">
        {/* Close Button */}
        <button
          onClick={() => setDismissBanner(true)}
          className="absolute top-2 right-2 text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Text Section */}
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-primary shrink-0 mt-1">
                <Zap className="w-6 h-6" />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Instapost Holiday Hours!
              </h2>
            </div>

            <p className="text-foreground mb-4 text-sm sm:text-base leading-relaxed">
              We will be operating with a reduced team on 24th December and
              December 31st our office will be closed on December 25 and January
              1st , 2025 to celebrate the holidays with our families.
            </p>

            <p className="text-foreground font-medium text-sm sm:text-base">
              Wishing you and your loved ones a joyful holiday season! 🎄✨
            </p>
          </div>

          {/* Image */}
          <div className="shrink-0 sm:w-60 w-full pr-6">
            <Image
              src="/holiday.png"
              alt="holiday"
              height={600}
              width={600}
              className="w-full h-40 sm:h-48 rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HolidayBanner;
