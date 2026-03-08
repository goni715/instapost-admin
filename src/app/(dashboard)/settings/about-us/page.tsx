"use client";
import EditorLoading from "@/components/loader/EditorLoading";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const AboutUsPage = () => {
  const TiptapEditor = dynamic(
    () => import("@/components/editor/TiptapEditor"),
    { ssr: false, loading: () => <EditorLoading /> },
  );
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-foreground pb-2">
        About Us
      </h1>
      <TiptapEditor />
      <div className="text-center py-4">
        <Button
          type="button"
          className="w-full md:w-1/2 cursor-pointer duration-200 font-semibold py-2.5 transition-colors"
        >
          Save Change
        </Button>
      </div>
    </>
  );
};

export default AboutUsPage;
