import { useState, memo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, BookOpen, Lightbulb } from "lucide-react";
import { GermanVerb } from "../data/germanVerbs";
import { motion, AnimatePresence } from "framer-motion";

interface VerbCardProps {
  verb: GermanVerb;
  prefix: string;
  isExpanded?: boolean;
  onExpandChange?: (isExpanded: boolean) => void;
}

const VerbCard = ({
  verb,
  prefix,
  isExpanded: controlledExpanded,
  onExpandChange,
}: VerbCardProps) => {
  const [internalExpanded, setInternalExpanded] = useState(false);

  // Use controlled expansion if provided, otherwise use internal state
  const isExpanded =
    controlledExpanded !== undefined ? controlledExpanded : internalExpanded;

  const handleToggleExpand = () => {
    const newExpanded = !isExpanded;

    if (controlledExpanded !== undefined && onExpandChange) {
      // Controlled mode
      onExpandChange(newExpanded);
    } else {
      // Uncontrolled mode
      setInternalExpanded(newExpanded);
    }
  };

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
      // Irregular group colors (warm gradient spectrum)
      "irregular-group-1": "from-orange-500 to-red-600",
      "irregular-group-2": "from-red-500 to-rose-600",
      "irregular-group-3": "from-rose-500 to-pink-600",
      "irregular-group-4": "from-pink-500 to-purple-600",
      "irregular-group-5": "from-purple-500 to-violet-600",
      "irregular-group-6": "from-violet-500 to-indigo-600",
      "irregular-group-7": "from-indigo-500 to-blue-600",
      "irregular-group-8": "from-blue-500 to-cyan-600",
      "irregular-group-9": "from-cyan-500 to-teal-600",
      // New irregular category colors
      "irregular-essential": "from-orange-600 to-red-700",
      "irregular-motion": "from-red-600 to-pink-700",
      "irregular-communication": "from-pink-600 to-purple-700",
      "irregular-perception": "from-purple-600 to-violet-700",
      "irregular-physical": "from-violet-600 to-indigo-700",
      "irregular-mental": "from-indigo-600 to-blue-700",
      "irregular-exchange": "from-blue-600 to-cyan-700",
      "irregular-position": "from-cyan-600 to-teal-700",
      los: "from-green-300 to-teal-400",
      miss: "from-gray-500 to-slate-600",
      mit: "from-emerald-400 to-green-500",
      modal: "from-blue-500 to-indigo-600",
      nach: "from-rose-400 to-red-500",
      neben: "from-cyan-300 to-blue-400",
      nieder: "from-stone-500 to-gray-600",
      reflexive: "from-violet-500 to-purple-600",
      // Reflexive group colors (purple spectrum)
      "reflexive-group-1": "from-violet-400 to-purple-500",
      "reflexive-group-2": "from-purple-400 to-indigo-500",
      "reflexive-group-3": "from-indigo-400 to-blue-500",
      "reflexive-group-4": "from-blue-400 to-cyan-500",
      "reflexive-group-5": "from-cyan-400 to-teal-500",
      "reflexive-group-6": "from-teal-400 to-emerald-500",
      // New reflexive category colors
      "reflexive-hygiene": "from-violet-600 to-purple-700",
      "reflexive-clothing": "from-purple-600 to-indigo-700",
      "reflexive-position": "from-indigo-600 to-blue-700",
      "reflexive-emotions": "from-blue-600 to-cyan-700",
      "reflexive-mental": "from-cyan-600 to-teal-700",
      "reflexive-social": "from-teal-600 to-emerald-700",
      "reflexive-movement": "from-emerald-600 to-green-700",
      regular: "from-green-500 to-emerald-600",
      // Regular group colors (green spectrum)
      "regular-group-1": "from-green-500 to-emerald-600",
      "regular-group-2": "from-emerald-500 to-teal-600",
      "regular-group-3": "from-teal-500 to-cyan-600",
      "regular-group-4": "from-cyan-500 to-sky-600",
      "regular-group-5": "from-sky-500 to-blue-600",
      "regular-group-6": "from-blue-500 to-indigo-600",
      // New regular category colors
      "regular-work-business": "from-green-600 to-emerald-700",
      "regular-education": "from-emerald-600 to-teal-700",
      "regular-daily-activities": "from-teal-600 to-cyan-700",
      "regular-communication": "from-cyan-600 to-sky-700",
      "regular-entertainment": "from-sky-600 to-blue-700",
      "regular-technology": "from-blue-600 to-indigo-700",
      "regular-emotions": "from-indigo-600 to-purple-700",
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      layout
    >
      <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-gray-200 rounded-xl overflow-hidden">
        <CardHeader className="pb-4 relative">
          <div
            className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getGradientColors(
              prefix
            )}`}
          ></div>
          <CardTitle className="flex items-center justify-between pt-2" onClick={handleToggleExpand}>
            <div className="flex items-center space-x-3">
              <motion.div
                className={`w-10 h-10 bg-gradient-to-r ${getGradientColors(
                  prefix
                )} rounded-xl flex items-center justify-center shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white font-bold text-sm">
                  {prefix.slice(0, 2).toUpperCase()}
                </span>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-bold text-xl group-hover:text-gray-700 transition-colors">
                  {verb.verb}
                </span>
                <span className="text-gray-500 text-sm font-medium">
                  {verb.translation}
                </span>
              </div>
            </div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                
                className={`h-10 w-10 p-0 rounded-xl transition-all duration-300 hover:bg-gradient-to-r ${getGradientColors(
                  prefix
                )} hover:text-white ${isExpanded ? "bg-gray-100" : ""}`}
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </Button>
            </motion.div>
          </CardTitle>
        </CardHeader>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <CardContent className="pt-0 space-y-6">
                <motion.div
                  className={`bg-gradient-to-r ${getGradientColors(
                    prefix
                  )} bg-opacity-10 p-4 rounded-xl border border-gray-200`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Lightbulb className="w-5 h-5 text-amber-600" />
                    </motion.div>
                    <p className="text-sm font-semibold text-gray-800">
                      Key Point
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {verb.keyPoint}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <p className="text-sm font-semibold text-gray-800">
                      Examples
                    </p>
                  </div>
                  <div className="space-y-3">
                    {verb.examples.map((example, index) => (
                      <motion.div
                        key={index}
                        className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <p className="text-gray-700 leading-relaxed">
                          {example}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default memo(VerbCard);
