// components/ui/LoadingSpinner.tsx
import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
      <span className="ml-4 text-teal-600 dark:text-teal-400 font-semibold text-lg">
        Loading...
      </span>
    </div>
  );
};

export default LoadingSpinner;
