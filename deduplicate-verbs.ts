const fs = require("fs");
const path = require("path");

interface GermanVerb {
  verb: string;
  translation: string;
  keyPoint: string;
  examples: string[];
}

interface VerbGroup {
  prefix: string;
  description: string;
  verbs: GermanVerb[];
}

// Function to extract verbs from a file content
function extractVerbs(content: string): { verb: string; line: number }[] {
  const lines = content.split("\n");
  const verbs: { verb: string; line: number }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const verbMatch = line.match(/verb:\s*["']([^"']+)["']/);
    if (verbMatch) {
      verbs.push({
        verb: verbMatch[1],
        line: i + 1,
      });
    }
  }

  return verbs;
}

// Function to read and analyze all verb files
function analyzeVerbFiles() {
  const dataDir = "./src/data";
  const verbFiles = [
    "germanIrregularVerbs.ts",
    "germanModalVerbs.ts",
    "germanNonSeparableVerbs.ts",
    "germanReflexiveVerbs.ts",
    "germanRegularVerbs.ts",
    "germanVerbs.ts",
    "germanVerbsExtension.ts",
    "germanVerbsExtension2.ts",
    "germanVerbsExtension3.ts",
  ];

  const allVerbs = new Map<string, Array<{ file: string; line: number }>>();

  for (const fileName of verbFiles) {
    const filePath = path.join(dataDir, fileName);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      const verbs = extractVerbs(content);

      console.log(`\n=== ${fileName} ===`);
      console.log(`Found ${verbs.length} verbs`);

      for (const { verb, line } of verbs) {
        if (!allVerbs.has(verb)) {
          allVerbs.set(verb, []);
        }
        allVerbs.get(verb)!.push({ file: fileName, line });
      }
    }
  }

  // Find duplicates
  console.log("\n=== DUPLICATE ANALYSIS ===");
  const duplicates = new Map<string, Array<{ file: string; line: number }>>();

  for (const [verb, occurrences] of allVerbs) {
    if (occurrences.length > 1) {
      duplicates.set(verb, occurrences);
    }
  }

  console.log(`\nTotal unique verbs: ${allVerbs.size}`);
  console.log(`Total duplicates: ${duplicates.size}`);

  if (duplicates.size > 0) {
    console.log("\nDuplicate verbs found:");
    for (const [verb, occurrences] of duplicates) {
      console.log(`\n"${verb}" appears in:`);
      for (const { file, line } of occurrences) {
        console.log(`  - ${file}:${line}`);
      }
    }
  }

  return { allVerbs, duplicates };
}

// Function to remove duplicates from a file
function removeDuplicatesFromFile(
  filePath: string,
  verbsToKeep: Set<string>,
  allDuplicates: Map<string, Array<{ file: string; line: number }>>
): string {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const fileName = path.basename(filePath);

  let inVerbObject = false;
  let currentVerb = "";
  let verbStartLine = -1;
  let braceCount = 0;
  let result: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Check if we're starting a verb object
    const verbMatch = trimmedLine.match(/verb:\s*["']([^"']+)["']/);
    if (verbMatch && !inVerbObject) {
      currentVerb = verbMatch[1];
      verbStartLine = i;
      inVerbObject = true;
      braceCount = 0;

      // Count braces in the current line
      for (const char of line) {
        if (char === "{") braceCount++;
        if (char === "}") braceCount--;
      }

      // Check if this verb should be kept
      if (allDuplicates.has(currentVerb)) {
        const occurrences = allDuplicates.get(currentVerb)!;
        const shouldKeep =
          verbsToKeep.has(currentVerb) &&
          occurrences.some(
            (occ) => occ.file === fileName && Math.abs(occ.line - (i + 1)) <= 2
          );

        if (!shouldKeep) {
          // Skip this entire verb object
          console.log(
            `Removing duplicate "${currentVerb}" from ${fileName}:${i + 1}`
          );
          i++;
          continue;
        }
      }
    }

    if (inVerbObject) {
      // Count braces to know when verb object ends
      for (const char of line) {
        if (char === "{") braceCount++;
        if (char === "}") braceCount--;
      }

      // Add the line to result
      result.push(line);

      // Check if verb object is complete
      if (braceCount <= 0 && trimmedLine.includes("}")) {
        inVerbObject = false;
        currentVerb = "";
        verbStartLine = -1;
      }
    } else {
      // Add non-verb lines
      result.push(line);
    }

    i++;
  }

  return result.join("\n");
}

// Main execution
console.log("Starting verb deduplication analysis...");
const { allVerbs, duplicates } = analyzeVerbFiles();

if (duplicates.size > 0) {
  console.log("\n=== DEDUPLICATION STRATEGY ===");

  // Strategy: Keep the first occurrence of each duplicate verb
  const verbsToKeep = new Set<string>();

  for (const [verb, occurrences] of duplicates) {
    // Sort by file priority and keep the first occurrence
    const fileOrder = [
      "germanVerbs.ts", // Main file
      "germanIrregularVerbs.ts", // Specific categories
      "germanModalVerbs.ts",
      "germanRegularVerbs.ts",
      "germanReflexiveVerbs.ts",
      "germanNonSeparableVerbs.ts",
      "germanVerbsExtension.ts", // Extensions
      "germanVerbsExtension2.ts",
      "germanVerbsExtension3.ts",
    ];

    let kept = false;
    for (const fileName of fileOrder) {
      if (!kept && occurrences.some((occ) => occ.file === fileName)) {
        verbsToKeep.add(verb);
        const occurrence = occurrences.find((occ) => occ.file === fileName);
        console.log(
          `Keeping "${verb}" in ${occurrence?.file}:${occurrence?.line}`
        );
        kept = true;
        break;
      }
    }
  }

  console.log(`\nVerbs to keep: ${verbsToKeep.size}`);
  console.log(`Verbs to remove: ${duplicates.size - verbsToKeep.size}`);
}
