import { useState, useMemo, useCallback, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, BookOpen, Users, Shuffle, Sparkles } from "lucide-react";
import { germanSeparableVerbs } from "../data/germanVerbs";
import { generateVerbsPDF } from "../utils/pdfGenerator";
import VerbCard from "../components/VerbCard";
import SearchBar from "../components/SearchBar";
import PrefixFilter from "../components/PrefixFilter";
import ProgressBar from "../components/ProgressBar";
import { motion, AnimatePresence } from "framer-motion";
import { useDebounce } from "../hooks/useDebounce";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPrefix, setSelectedPrefix] = useState("all");
  const [shuffleKey, setShuffleKey] = useState(0);
  const [isPending, startTransition] = useTransition();

  // Debounce search term to improve performance
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Check if we're waiting for debounced search
  const isSearching = searchTerm !== debouncedSearchTerm;

  // Shuffle function
  const shuffleArray = useCallback(<T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const handleShuffle = useCallback(() => {
    startTransition(() => {
      setShuffleKey((prev) => prev + 1);
      setSearchTerm(""); // Clear search when shuffling
    });
  }, []);

  const handleSearchChange = useCallback(
    (term: string) => {
      setSearchTerm(term);
      // Reset category to "all" when searching
      if (term && selectedPrefix !== "all") {
        setSelectedPrefix("all");
      }
    },
    [selectedPrefix]
  );

  const handlePrefixChange = useCallback(
    (prefix: string) => {
      startTransition(() => {
        setSelectedPrefix(prefix);
        // Clear search when selecting a category
        if (prefix !== "all" && searchTerm) {
          setSearchTerm("");
        }
      });
    },
    [searchTerm]
  );

  const filteredVerbs = useMemo(() => {
    let filtered = germanSeparableVerbs;

    // Filter by prefix
    if (selectedPrefix !== "all") {
      filtered = filtered.filter((group) => group.prefix === selectedPrefix);
    }

    // Filter by search term
    if (debouncedSearchTerm) {
      filtered = filtered
        .map((group) => ({
          ...group,
          verbs: group.verbs.filter(
            (verb) =>
              verb.verb
                .toLowerCase()
                .includes(debouncedSearchTerm.toLowerCase()) ||
              verb.translation
                .toLowerCase()
                .includes(debouncedSearchTerm.toLowerCase()) ||
              verb.keyPoint
                .toLowerCase()
                .includes(debouncedSearchTerm.toLowerCase())
          ),
        }))
        .filter((group) => group.verbs.length > 0);
    }

    // Shuffle if shuffle key changed
    if (shuffleKey > 0) {
      const shuffledGroups = shuffleArray(filtered).map((group) => ({
        ...group,
        verbs: shuffleArray(group.verbs),
      }));
      return shuffledGroups;
    }

    return filtered;
  }, [debouncedSearchTerm, selectedPrefix, shuffleKey, shuffleArray]);

  const totalVerbs = germanSeparableVerbs.reduce(
    (acc, group) => acc + group.verbs.length,
    0
  );
  const displayedVerbs = filteredVerbs.reduce(
    (acc, group) => acc + group.verbs.length,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <ProgressBar isVisible={isPending} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-blue-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                  German Verb Voyage
                </h1>
              </div>
              <p className="text-gray-600 text-lg max-w-2xl">
                Master Approx 1,600 German verbs with translations, key points,
                and examples. Perfect for A2-B2 level learners!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleShuffle}
                disabled={isPending}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex items-center gap-2 px-6 py-3 text-lg rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Shuffle size={20} />
                {isPending ? "Shuffling..." : "Shuffle Verbs"}
              </Button>
              <Button
                onClick={generateVerbsPDF}
                variant="outline"
                className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 flex items-center gap-2 px-6 py-3 text-lg rounded-xl transition-all duration-300"
              >
                <Download size={20} />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold text-blue-700">
                Total Verbs
              </CardTitle>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-800">
                {totalVerbs.toLocaleString()}
              </div>
              <p className="text-xs text-blue-600 mt-1">A2-B2 Level Verbs</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold text-purple-700">
                Categories
              </CardTitle>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-800">
                {germanSeparableVerbs.length}
              </div>
              <p className="text-xs text-purple-600 mt-1">Verb Categories</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold text-green-700">
                Currently Showing
              </CardTitle>
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-800">
                {displayedVerbs.toLocaleString()}
              </div>
              <p className="text-xs text-green-600 mt-1">Filtered Results</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-10 border border-gray-200">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Find Your Perfect Verb
              </h3>
              <p className="text-gray-600">
                Search through categories or find specific verbs instantly
              </p>
            </div>
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              isLoading={isPending}
              isSearching={isSearching}
            />
            <PrefixFilter
              selectedPrefix={selectedPrefix}
              onPrefixChange={handlePrefixChange}
              isLoading={isPending}
              shuffleKey={shuffleKey}
            />
          </div>
        </div>

        {/* Verb Groups */}
        <div className="relative">
          {isSearching && (
            <div className="absolute top-0 left-0 right-0 z-10">
              <div className="bg-blue-50/80 backdrop-blur-sm border border-blue-200 rounded-xl p-3 mb-4 flex items-center justify-center gap-3">
                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-blue-700 font-medium">
                  Searching verbs...
                </span>
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={`filters-${selectedPrefix}-${
                debouncedSearchTerm ? "search" : "no-search"
              }-${shuffleKey}`}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {filteredVerbs.map((group, groupIndex) => (
                <motion.div
                  key={`${group.prefix}-${group.verbs.length}-${shuffleKey}`}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {group.prefix.toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
                          {group.prefix.toUpperCase()} Verbs
                        </h2>
                        <p className="text-gray-600 text-lg mt-1">
                          {group.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {group.verbs.map((verb) => (
                      <motion.div
                        key={`${verb.verb}-${group.prefix}-${shuffleKey}`}
                      >
                        <VerbCard verb={verb} prefix={group.prefix} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {filteredVerbs.length === 0 && !isPending && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              No verbs found
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-md mx-auto">
              No verbs match your current search criteria. Try adjusting your
              filters or search terms.
            </p>
            <Button
              onClick={() => {
                handleSearchChange("");
                handlePrefixChange("all");
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg transition-all duration-300"
            >
              Clear All Filters
            </Button>
          </motion.div>
        )}

        {isPending && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Processing your request...
            </h3>
            <p className="text-gray-500">
              Please wait while we update the verb list
            </p>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                German Verb Voyage
              </h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your comprehensive journey through German verbs. Master 1,700+
              verbs with detailed explanations, examples, and key points to
              accelerate your German language learning.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span>✨ A2-B2 Level</span>
              <span>📚 {totalVerbs.toLocaleString()} Verbs</span>
              <span>🎯 {germanSeparableVerbs.length} Categories</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
