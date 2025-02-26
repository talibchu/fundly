"use client"
import { useState } from "react";

interface DescriptionProps {
  description: string;
}

export const Description: React.FC<DescriptionProps> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(true);
  };

  return (
    <div className="relative py-4 mb-6">
      <div
        className={`overflow-hidden  ${
          isExpanded ? "max-h-full" : "max-h-[500px]"
        }`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {!isExpanded && description.length > 500 && (
        <div className="absolute -bottom-3 left-0 w-full">
          <div className="flex justify-start bg-gradient-to-t from-white to-transparent py-2 text-left text-base text-black underline focus:outline-none">
            <button onClick={toggleExpanded} aria-label="Read more">
              Read more
            </button>
          </div>
        </div>
      )}
    </div>
  );
};