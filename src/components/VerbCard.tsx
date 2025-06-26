import { useState, memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, BookOpen, Lightbulb } from "lucide-react";
import { GermanVerb } from "../data/germanVerbs";

interface VerbCardProps {
  verb: GermanVerb;
  prefix: string;
}

const VerbCard = ({ verb, prefix }: VerbCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getGradientColors = (prefix: string) => {
    const colors = {
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

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-gray-200 rounded-xl overflow-hidden">
      <CardHeader className="pb-4 relative">
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getGradientColors(
            prefix
          )}`}
        ></div>
        <CardTitle className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-3">
            <div
              className={`w-10 h-10 bg-gradient-to-r ${getGradientColors(
                prefix
              )} rounded-xl flex items-center justify-center shadow-lg`}
            >
              <span className="text-white font-bold text-sm">
                {prefix.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 font-bold text-xl group-hover:text-gray-700 transition-colors">
                {verb.verb}
              </span>
              <span className="text-gray-500 text-sm font-medium">
                {verb.translation}
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className={`h-10 w-10 p-0 rounded-xl transition-all duration-300 hover:bg-gradient-to-r ${getGradientColors(
              prefix
            )} hover:text-white ${isExpanded ? "bg-gray-100" : ""}`}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </Button>
        </CardTitle>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0 space-y-6 animate-in slide-in-from-top-2 duration-300">
          <div
            className={`bg-gradient-to-r ${getGradientColors(
              prefix
            )} bg-opacity-10 p-4 rounded-xl border border-gray-200`}
          >
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-amber-600" />
              <p className="text-sm font-semibold text-gray-800">Key Point</p>
            </div>
            <p className="text-gray-700 leading-relaxed">{verb.keyPoint}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <p className="text-sm font-semibold text-gray-800">Examples</p>
            </div>
            <div className="space-y-3">
              {verb.examples.map((example, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <p className="text-gray-700 leading-relaxed">{example}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default memo(VerbCard);
