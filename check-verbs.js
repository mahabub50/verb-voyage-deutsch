import fs from 'fs';
import path from 'path';

// List of data files
const dataFiles = [
  'src/data/germanIrregularVerbs.ts',
  'src/data/germanModalVerbs.ts', 
  'src/data/germanNonSeparableVerbs.ts',
  'src/data/germanReflexiveVerbs.ts',
  'src/data/germanRegularVerbs.ts',
  'src/data/germanVerbs.ts',
  'src/data/germanVerbsExtension.ts',
  'src/data/germanVerbsExtension2.ts',
  'src/data/germanVerbsExtension3.ts'
];

let totalVerbs = 0;
let allVerbs = new Set();

console.log('=== Verb Count Analysis ===');

dataFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Count verb entries - look for patterns like verb: "verbname"
    const verbMatches = content.match(/verb:\s*["']([^"']+)["']/g) || [];
    const count = verbMatches.length;
    
    console.log(`${file}: ${count} verbs`);
    totalVerbs += count;
    
    // Extract verb names
    verbMatches.forEach(match => {
      const verb = match.match(/verb:\s*["']([^"']+)["']/)[1];
      allVerbs.add(verb);
    });
    
  } catch (error) {
    console.log(`Error reading ${file}: ${error.message}`);
  }
});

console.log(`\nTotal verbs across all files: ${totalVerbs}`);
console.log(`Unique verbs: ${allVerbs.size}`);

// Check for essential A2-B2 verbs that might be missing
const essentialVerbs = [
  // Basic movement and actions
  'laufen', 'gehen', 'kommen', 'fahren', 'fliegen', 'schwimmen', 'springen',
  'rennen', 'tanzen', 'wandern', 'reisen', 'besuchen',
  
  // Communication
  'sprechen', 'sagen', 'fragen', 'antworten', 'erklären', 'erzählen', 
  'diskutieren', 'telefonieren', 'schreiben', 'lesen',
  
  // Daily activities
  'essen', 'trinken', 'schlafen', 'aufstehen', 'duschen', 'waschen',
  'anziehen', 'ausziehen', 'kochen', 'putzen', 'aufräumen',
  
  // Work and study
  'arbeiten', 'studieren', 'lernen', 'unterrichten', 'verdienen',
  'schreiben', 'rechnen', 'denken', 'verstehen', 'wissen',
  
  // Emotions and states
  'lieben', 'hassen', 'mögen', 'gefallen', 'freuen', 'ärgern',
  'wünschen', 'hoffen', 'träumen', 'fürchten', 'sorgen',
  
  // Social interactions
  'treffen', 'kennenlernen', 'einladen', 'besuchen', 'helfen',
  'danken', 'entschuldigen', 'gratulieren', 'begrüßen', 'verabschieden',
  
  // Shopping and money
  'kaufen', 'verkaufen', 'bezahlen', 'kosten', 'sparen', 'ausgeben',
  'wechseln', 'umtauschen', 'bestellen',
  
  // Time and planning
  'planen', 'organisieren', 'vorbereiten', 'beginnen', 'beenden',
  'dauern', 'warten', 'sich beeilen', 'verspäten', 'pünktlich sein',
  
  // Health and body
  'sich fühlen', 'wehtun', 'heilen', 'erkälten', 'husten',
  'niesen', 'fieber haben', 'sich verletzen', 'gesund werden',
  
  // Technology and media
  'anrufen', 'simsen', 'mailen', 'surfen', 'downloaden',
  'installieren', 'speichern', 'drucken', 'kopieren'
];

console.log('\n=== Missing Essential Verbs ===');
const missingVerbs = essentialVerbs.filter(verb => !allVerbs.has(verb));

if (missingVerbs.length > 0) {
  console.log('Missing verbs:', missingVerbs);
} else {
  console.log('All essential verbs are present!');
}

console.log(`\nMissing count: ${missingVerbs.length}`);
