import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IFAQ } from "@/types/faq.type";
import EditFaqModal from "../modal/faq/EditFaqModal";
import DeleteFaqModal from "../modal/faq/DeleteFaqModal";

type TProps = {
    faq: IFAQ;
    index: number;
}

const FaqItem = ({ faq, index }: TProps) => {
  return (
    <>
      <AccordionItem
        key={faq.id}
        value={faq.id}
        className="border border-gray-200 rounded-lg px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Question Number and Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-sm sm:text-base font-semibold text-gray-700 min-w-fit">
              Q:{String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <EditFaqModal/>
              <DeleteFaqModal faqId={faq.id}/>
            </div>
          </div>

          {/* Question and Trigger */}
          <div className="flex-1 min-w-0">
            <AccordionTrigger className="hover:no-underline py-0 group">
              <span className="text-sm sm:text-base text-left text-foreground truncate group-hover:text-blue-500 transition-colors">
                {faq.question}
              </span>
            </AccordionTrigger>
          </div>
        </div>

        {/* Answer */}
        <AccordionContent className="mt-4 pl-0 sm:pl-2">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {faq.answer}
          </p>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default FaqItem;
