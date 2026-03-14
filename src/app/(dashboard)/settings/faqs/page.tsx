"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion
} from "@/components/ui/accordion";
import ListHeader from "@/components/common/ListHeader";
import CreateFaqModal from "@/components/modal/faq/CreateFaqModal";
import { DUMMY_FAQs } from "@/data/faq.data";
import FaqItem from "@/components/faq/FaqItem";



const FAQPage = () => {
  const isLoading = false;
  const isFetching = false;





  return (
    <main className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="">
        <ListHeader
          title="FAQs"
          total={DUMMY_FAQs.length || 0}
          isLoading={isLoading}
          isFetching={isFetching}
        >
          <CreateFaqModal />
        </ListHeader>

        {/* FAQ Items */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {DUMMY_FAQs.map((faq, index) => (
            <FaqItem key={faq.id} faq={faq} index={index}/>
          ))}
        </Accordion>

        {/* Empty State */}
        {DUMMY_FAQs.length === 0 && (
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
