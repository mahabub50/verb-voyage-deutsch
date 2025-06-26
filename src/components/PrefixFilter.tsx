import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { germanSeparableVerbs } from "../data/germanVerbs";
import { useRef, useEffect, useMemo } from "react";

interface PrefixFilterProps {
  selectedPrefix: string;
  onPrefixChange: (prefix: string) => void;
  isLoading?: boolean;
  shuffleKey?: number;
}

const PrefixFilter = ({
  selectedPrefix,
  onPrefixChange,
  isLoading = false,
  shuffleKey = 0,
}: PrefixFilterProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Shuffle array function
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Memoized shuffled prefixes
  const prefixes = useMemo(() => {
    const basePrefixes = [
      "all",
      ...germanSeparableVerbs.map((group) => group.prefix),
    ];

    if (shuffleKey > 0) {
      const allPrefix = basePrefixes[0]; // Keep "all" at the start
      const otherPrefixes = basePrefixes.slice(1);
      return [allPrefix, ...shuffleArray(otherPrefixes)];
    }

    return basePrefixes;
  }, [shuffleKey]);

  // Scroll to beginning when shuffle happens
  useEffect(() => {
    if (shuffleKey > 0 && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [shuffleKey]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const getGradientColors = (prefix: string) => {
    const colors = {
      all: "from-gray-500 to-gray-600",
      ab: "from-red-400 to-pink-500",
      an: "from-blue-400 to-indigo-500",
      auf: "from-green-400 to-teal-500",
      aus: "from-yellow-400 to-orange-500",
      auseinander: "from-yellow-500 to-amber-500",
      be: "from-purple-400 to-violet-500",
      bei: "from-purple-400 to-violet-500",
      da: "from-slate-400 to-gray-500",
      dar: "from-slate-500 to-gray-600",
      ein: "from-cyan-400 to-blue-500",
      emp: "from-emerald-300 to-green-400",
      empor: "from-emerald-400 to-teal-500",
      ent: "from-red-300 to-pink-400",
      entgegen: "from-red-400 to-rose-500",
      entlang: "from-rose-300 to-pink-400",
      entzwei: "from-red-500 to-pink-600",
      er: "from-orange-400 to-red-500",
      essential: "from-red-500 to-yellow-500",
      fehl: "from-gray-400 to-slate-500",
      fern: "from-sky-400 to-blue-500",
      fest: "from-stone-400 to-gray-500",
      fort: "from-violet-400 to-purple-500",
      frei: "from-lime-400 to-green-500",
      ge: "from-amber-400 to-orange-500",
      gegen: "from-red-500 to-rose-600",
      gegenüber: "from-pink-500 to-rose-600",
      heim: "from-teal-400 to-cyan-500",
      her: "from-pink-400 to-rose-500",
      hin: "from-indigo-300 to-blue-400",
      hinterher: "from-indigo-400 to-purple-500",
      hoch: "from-sky-300 to-cyan-400",
      inne: "from-purple-300 to-violet-400",
      irregular: "from-orange-500 to-red-600",
      los: "from-green-300 to-teal-400",
      miss: "from-gray-500 to-slate-600",
      mit: "from-emerald-400 to-green-500",
      modal: "from-blue-500 to-indigo-600",
      nach: "from-rose-400 to-red-500",
      neben: "from-cyan-300 to-blue-400",
      nieder: "from-stone-500 to-gray-600",
      reflexive: "from-violet-500 to-purple-600",
      regular: "from-green-500 to-emerald-600",
      rück: "from-amber-300 to-yellow-400",
      statt: "from-orange-300 to-amber-400",
      teil: "from-teal-300 to-cyan-400",
      ver: "from-red-600 to-pink-700",
      vor: "from-amber-400 to-yellow-500",
      weg: "from-lime-300 to-green-400",
      weiter: "from-blue-300 to-indigo-400",
      wett: "from-yellow-300 to-orange-400",
      zer: "from-gray-600 to-slate-700",
      zu: "from-indigo-400 to-purple-500",
      zurecht: "from-purple-300 to-indigo-400",
      zurück: "from-blue-600 to-indigo-700",
      zusammen: "from-emerald-300 to-green-400",
      zwischen: "from-cyan-500 to-teal-600",
    };
    return colors[prefix as keyof typeof colors] || "from-gray-400 to-gray-500";
  };

  const getVerbCount = (prefix: string) => {
    if (prefix === "all") {
      return germanSeparableVerbs.reduce(
        (total, group) => total + group.verbs.length,
        0
      );
    }
    const group = germanSeparableVerbs.find((g) => g.prefix === prefix);
    return group ? group.verbs.length : 0;
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h4 className="text-xl font-bold text-gray-800 mb-3">
          Filter by Category
        </h4>
        <p className="text-gray-600">
          Choose a specific verb category or view all verbs
        </p>
      </div>

      <div className="relative">
        {/* Left scroll button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300"
        >
          <ChevronLeft size={16} />
        </Button>

        {/* Right scroll button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300"
        >
          <ChevronRight size={16} />
        </Button>

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-12 py-2"
        >
          {prefixes.map((prefix, index) => {
            const isSelected = selectedPrefix === prefix;
            const verbCount = getVerbCount(prefix);

            return (
              <Button
                key={`${prefix}-${shuffleKey}`}
                variant="ghost"
                onClick={() => onPrefixChange(prefix)}
                disabled={isLoading}
                className={`relative flex-shrink-0 w-32 h-24 p-0 overflow-hidden rounded-xl border-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isSelected
                    ? "border-transparent shadow-lg shadow-black/10"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                } ${shuffleKey > 0 ? "shuffle-animation" : ""}`}
                style={{
                  animationDelay: shuffleKey > 0 ? `${index * 50}ms` : "0ms",
                }}
              >
                <div
                  className={`w-full h-full p-3 flex flex-col items-center justify-center gap-1 ${
                    isSelected
                      ? `bg-gradient-to-br ${getGradientColors(
                          prefix
                        )} text-white`
                      : "bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : `bg-gradient-to-r ${getGradientColors(
                            prefix
                          )} text-white`
                    }`}
                  >
                    {prefix === "all"
                      ? "ALL"
                      : prefix.toUpperCase().slice(0, 2)}
                  </div>

                  <div className="text-center">
                    <span className="font-semibold text-xs capitalize leading-tight block">
                      {prefix === "all" ? "All" : prefix}
                    </span>
                    <Badge
                      variant="secondary"
                      className={`mt-1 text-xs border-0 px-2 py-0 ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {verbCount}
                    </Badge>
                  </div>

                  {isLoading && (
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin opacity-70"></div>
                    </div>
                  )}
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PrefixFilter;
