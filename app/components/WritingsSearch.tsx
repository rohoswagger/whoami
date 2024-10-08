import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";

interface WritingsSearchProps {
  onSearch: (query: string) => void;
}

const WritingsSearch: React.FC<WritingsSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Create a debounced version of onSearch
  const debouncedSearch = useCallback( //eslint-disable-line react-hooks/exhaustive-deps
    debounce((query: string) => {
      onSearch(query);
    }, 300),
    [onSearch]
  );

  useEffect(() => {
    debouncedSearch(searchQuery);
    // Cleanup function to cancel any pending debounced calls
    return () => debouncedSearch.cancel();
  }, [searchQuery, debouncedSearch]);

  return (
    <div className="mb-8">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search writings..."
        className="w-full px-4 py-2 border border-purple-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>
  );
};

export default WritingsSearch;
