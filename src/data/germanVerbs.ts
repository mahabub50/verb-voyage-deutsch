export interface GermanVerb {
  verb: string;
  translation: string;
  keyPoint: string;
  examples: string[];
}

export interface VerbGroup {
  prefix: string;
  description: string;
  verbs: GermanVerb[];
}

// Import all verb categories
import { additionalVerbGroups } from "./germanVerbsExtension";
import { additionalVerbGroups2 } from "./germanVerbsExtension2";
import { additionalVerbGroups3 } from "./germanVerbsExtension3";
import { germanNonSeparableVerbs } from "./germanNonSeparableVerbs";
import { germanModalVerbs } from "./germanModalVerbs";
import { germanIrregularVerbs } from "./germanIrregularVerbs";
import { germanReflexiveVerbs } from "./germanReflexiveVerbs";
import { germanRegularVerbs } from "./germanRegularVerbs";

// Combine ALL verb categories - comprehensive B2+ level German verb database (1000+ verbs)
export const germanSeparableVerbs: VerbGroup[] = [
  // ...originalVerbGroups,
  ...additionalVerbGroups,
  ...additionalVerbGroups2,
  ...additionalVerbGroups3,
  ...germanNonSeparableVerbs,
  ...germanModalVerbs,
  ...germanIrregularVerbs,
  ...germanReflexiveVerbs,
  ...germanRegularVerbs,
];
