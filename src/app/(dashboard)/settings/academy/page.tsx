"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pencil, Trash2, Plus } from "lucide-react";
import ListHeader from "@/components/common/ListHeader";
import CreateOptionModal from "@/components/modal/option/CreateOptionModal";

interface Topic {
  id: string;
  title: string;
  description: string;
}

const AcademyPage = () => {
  const [topics, setTopics] = useState<Topic[]>([
    {
      id: "1",
      title: "Order",
      description:
        "There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable. If You Are Going To Use A",
    },
    {
      id: "2",
      title: "Order",
      description:
        "There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable. If You Are Going To Use A",
    },
  ]);

  const isLoading = false;
  const isFetching = false;

  const handleEdit = (id: string) => {
    console.log("Edit topic:", id);
  };

  const handleDelete = (id: string) => {
    setTopics(topics.filter((topic) => topic.id !== id));
  };

  const handleAddTopic = () => {
    const newTopic: Topic = {
      id: String(topics.length + 1),
      title: "New Topic",
      description: "Add description for your new topic...",
    };
    setTopics([...topics, newTopic]);
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="">
        <ListHeader
          title="Options"
          total={topics.length || 0}
          isLoading={isLoading}
          isFetching={isFetching}
        >
          <CreateOptionModal />
        </ListHeader>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Card
              key={topic.id}
              className="p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">
                  {topic.title}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(topic.id)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    aria-label="Edit"
                  >
                    <Pencil className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                  <button
                    onClick={() => handleDelete(topic.id)}
                    className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    aria-label="Delete"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>

              {/* Card Description */}
              <p className="text-sm text-muted-foreground leading-relaxed grow">
                {topic.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {topics.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              No topics yet. Create one to get started!
            </p>
            <Button
              onClick={handleAddTopic}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Topic
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademyPage;
