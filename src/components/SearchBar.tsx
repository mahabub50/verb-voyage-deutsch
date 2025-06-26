import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  isLoading?: boolean;
  isSearching?: boolean;
}

const SearchBar = ({
  searchTerm,
  onSearchChange,
  isLoading = false,
  isSearching = false,
}: SearchBarProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
        <Search
          className={`h-5 w-5 transition-colors duration-300 ${
            isLoading
              ? "text-blue-500 animate-pulse"
              : isSearching
              ? "text-blue-400"
              : "text-gray-400"
          }`}
        />
      </div>
      <Input
        type="text"
        placeholder="Search verbs, translations, or key points..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        disabled={isLoading}
        className={`pl-12 pr-12 py-4 text-lg bg-white/90 backdrop-blur-sm border-2 rounded-xl shadow-lg focus:ring-4 focus:ring-blue-100 transition-all duration-300 placeholder:text-gray-400 ${
          isLoading
            ? "opacity-70 cursor-not-allowed border-gray-200"
            : isSearching
            ? "border-blue-300 bg-blue-50/50"
            : "border-gray-200 focus:border-blue-400"
        }`}
      />
      {searchTerm && !isLoading && !isSearching && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onSearchChange("")}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 rounded-xl"
        >
          <X className="h-5 w-5" />
        </Button>
      )}
      {(isLoading || isSearching) && (
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
