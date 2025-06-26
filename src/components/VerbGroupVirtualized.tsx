import React, { memo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import VerbCard from "./VerbCard";
import { VerbGroup } from "../data/germanVerbs";

interface VerbGroupVirtualizedProps {
  group: VerbGroup;
  shuffleKey: number;
  onHeightChange?: (groupId: string, hasExpanded: boolean) => void;
}

// Individual verb item component for virtualization
const VerbGroupVirtualized = ({
  group,
  shuffleKey,
  onHeightChange,
}: VerbGroupVirtualizedProps) => {
  const [expandedVerbId, setExpandedVerbId] = useState<string | null>(null);

  const handleVerbExpand = useCallback(
    (verbId: string, isExpanded: boolean) => {
      if (isExpanded) {
        setExpandedVerbId(verbId);
      } else {
        setExpandedVerbId(null);
      }

      // Notify parent about height change
      onHeightChange?.(group.prefix, isExpanded);
    },
    [group.prefix, onHeightChange]
  );
  return (
    <motion.div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 mb-8">
      {/* Group Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-white font-bold text-xl">
              {group.prefix.slice(0, 2).toUpperCase()}
            </span>
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
              {group.prefix.toUpperCase()} Verbs
            </h2>
            <p className="text-gray-600 text-lg mt-1">{group.description}</p>
            <p className="text-sm text-gray-500 mt-1">
              {group.verbs.length} verbs in this group
            </p>
          </div>
        </div>
        <motion.div
          className="w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Verb Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {group.verbs.map((verb, index) => (
          <motion.div
            key={`${verb.verb}-${group.prefix}-${shuffleKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            <VerbCard
              verb={verb}
              prefix={group.prefix}
              isExpanded={expandedVerbId === verb.verb}
              onExpandChange={(isExpanded) =>
                handleVerbExpand(verb.verb, isExpanded)
              }
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default memo(VerbGroupVirtualized);
