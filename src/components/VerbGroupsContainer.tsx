import React, { memo, useCallback, useRef, useState } from "react";
import { VariableSizeList as List } from "react-window";
import { motion } from "framer-motion";
import VerbGroupVirtualized from "./VerbGroupVirtualized";
import { VerbGroup } from "../data/germanVerbs";

interface VerbGroupsContainerProps {
  groups: VerbGroup[];
  shuffleKey: number;
}

interface GroupItemProps {
  index: number;
  style: React.CSSProperties;
  data: {
    groups: VerbGroup[];
    shuffleKey: number;
    onHeightChange: (groupId: string, hasExpanded: boolean) => void;
    expandedGroups: Set<string>;
  };
}

// Individual group item component for virtualization
const GroupItem = memo(({ index, style, data }: GroupItemProps) => {
  const { groups, shuffleKey, onHeightChange } = data;
  const group = groups[index];

  return (
    <div style={style}>
      <div className="px-4 pb-4">
        <VerbGroupVirtualized
          group={group}
          shuffleKey={shuffleKey}
          onHeightChange={onHeightChange}
        />
      </div>
    </div>
  );
});

GroupItem.displayName = "GroupItem";

const VerbGroupsContainer = ({
  groups,
  shuffleKey,
}: VerbGroupsContainerProps) => {
  const [expandedGroups, setExpandedGroups] = useState(new Set<string>());
  const listRef = useRef<List>(null);

  // Handle height changes when verbs expand/collapse
  const handleHeightChange = useCallback(
    (groupId: string, hasExpanded: boolean) => {
      setExpandedGroups((prev) => {
        const newSet = new Set(prev);
        if (hasExpanded) {
          newSet.add(groupId);
        } else {
          newSet.delete(groupId);
        }
        return newSet;
      });

      // Reset item sizes to trigger recalculation
      if (listRef.current) {
        listRef.current.resetAfterIndex(0);
      }
    },
    []
  );

  // Calculate dynamic height for each group based on verb count and expansion
  const getItemSize = useCallback(
    (index: number) => {
      const group = groups[index];
      const verbCount = group.verbs.length;

      // Header section height (title, description, progress bar)
      const headerHeight = 220;

      // Calculate verb grid height based on responsive grid
      // Determine columns based on typical responsive breakpoints
      const getColumnsForScreenSize = () => {
        if (typeof window !== "undefined") {
          if (window.innerWidth >= 1280) return 3; // xl
          if (window.innerWidth >= 1024) return 2; // lg
          return 1; // smaller screens
        }
        return 3; // default for SSR
      };

      const verbsPerRow = getColumnsForScreenSize();
      const verbCardHeight = 100; // More accurate height including padding
      const verbCardGap = 24; // Gap between cards (gap-6 = 1.5rem = 24px)
      const verbRows = Math.ceil(verbCount / verbsPerRow);
      const verbGridHeight =
        verbRows > 0
          ? verbRows * verbCardHeight + (verbRows - 1) * verbCardGap
          : 0;

      // Padding and margins
      const containerPadding = 64; // p-8 = 2rem = 32px top + 32px bottom
      const marginBottom = 32; // mb-8

      // Extra height if any verb in this group is expanded (for expanded content)
      // This accounts for the expanded verb card content (examples, key points)
      const expansionHeight = expandedGroups.has(group.prefix) ? 350 : 0;

      const totalHeight =
        headerHeight +
        verbGridHeight +
        containerPadding +
        marginBottom +
        expansionHeight;

      // Debug logging (remove in production)
      if (process.env.NODE_ENV === "development") {
        console.log(
          `Group ${group.prefix}: ${verbCount} verbs, ${verbRows} rows (${verbsPerRow} cols), calculated height: ${totalHeight}`
        );
      }

      // Add some buffer and ensure minimum height, cap at reasonable limits
      const bufferedHeight = totalHeight + 80; // Extra buffer for safety
      return Math.max(450, Math.min(4000, bufferedHeight));
    },
    [groups, expandedGroups]
  );

  // Only use virtualization if there are many groups
  if (groups.length <= 5) {
    return (
      <motion.div
        key={`non-virtual-${shuffleKey}`}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {groups.map((group) => (
          <VerbGroupVirtualized
            key={`${group.prefix}-${group.verbs.length}-${shuffleKey}`}
            group={group}
            shuffleKey={shuffleKey}
            onHeightChange={handleHeightChange}
          />
        ))}
      </motion.div>
    );
  }

  const itemData = {
    groups,
    shuffleKey,
    onHeightChange: handleHeightChange,
    expandedGroups,
  };

  return (
    <motion.div
      key={`virtual-${shuffleKey}`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative"
    >
      <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl">
        <p className="text-sm text-blue-700 font-medium flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Virtualized view for optimal performance ({groups.length} groups)
        </p>
      </div>

      <List
        ref={listRef}
        height={Math.min(window.innerHeight * 0.7, 1200)} // 70% of viewport or max 1200px
        width="100%"
        itemCount={groups.length}
        itemSize={getItemSize}
        itemData={itemData}
        className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      >
        {GroupItem}
      </List>
    </motion.div>
  );
};

export default memo(VerbGroupsContainer);
