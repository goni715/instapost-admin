"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Trash2, Pencil } from "lucide-react";
import ListHeader from "@/components/common/ListHeader";
import CreateFaqModal from "@/components/modal/faq/CreateFaqModal";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const initialFAQs: FAQ[] = [
  {
    id: "1",
    question: "How I Place a Order ??",
    answer:
      "To place an order, browse our products, add items to your cart, proceed to checkout, and complete the payment process.",
  },
  {
    id: "2",
    question: "How I Place a Order ??",
    answer:
      "To place an order, browse our products, add items to your cart, proceed to checkout, and complete the payment process.",
  },
];

const FAQPage = () => {
  const isLoading = false;
  const isFetching = false;





  return (
    <main className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="">
        <ListHeader
          title="Academy"
          total={initialFAQs.length || 0}
          isLoading={isLoading}
          isFetching={isFetching}
        >
          <CreateFaqModal />
        </ListHeader>

        {/* FAQ Items */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {initialFAQs.map((faq, index) => (
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
                    <button
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      aria-label="Edit FAQ"
                    >
                      <Pencil className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="Delete FAQ"
                    >
                      <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
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
          ))}
        </Accordion>

        {/* Empty State */}
        {initialFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No FAQs yet</p>
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Add Your First FAQ
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default FAQPage;
