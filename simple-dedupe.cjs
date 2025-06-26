const fs = require('fs');

// Simple function to remove obvious internal duplicates
function removeInternalDuplicates(filePath, duplicatesToRemove) {
    let content = fs.readFileSync(filePath, 'utf-8');

    for (const verbName of duplicatesToRemove) {
        // Count occurrences
        const verbRegex = new RegExp(`verb:\\s*["']${verbName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'g');
        const matches = content.match(verbRegex);

        if (matches && matches.length > 1) {
            console.log(`Found ${matches.length} occurrences of "${verbName}" in ${filePath}`);

            // Find all occurrences with context
            const lines = content.split('\n');
            const occurrences = [];

            for (let i = 0; i < lines.length; i++) {
                if (lines[i].includes(`verb: "${verbName}"`) || lines[i].includes(`verb: '${verbName}'`)) {
                    occurrences.push(i);
                }
            }

            // Remove all but the first occurrence
            for (let j = occurrences.length - 1; j > 0; j--) {
                const startLine = occurrences[j];

                // Find the complete verb object by looking for opening and closing braces
                let openBraceFound = false;
                let verbStart = startLine;
                let braceCount = 0;

                // Find start of verb object (go backwards to find opening brace)
                for (let k = startLine; k >= Math.max(0, startLine - 20); k--) {
                    if (lines[k].trim().includes('{')) {
                        verbStart = k;
                        openBraceFound = true;
                        break;
                    }
                }

                if (!openBraceFound) {
                    verbStart = startLine;
                }

                // Find end of verb object (go forwards to find matching closing brace)
                let verbEnd = startLine;
                braceCount = 0;
                let inVerbObject = false;

                for (let k = verbStart; k < lines.length; k++) {
                    const line = lines[k];

                    for (const char of line) {
                        if (char === '{') {
                            braceCount++;
                            inVerbObject = true;
                        }
                        if (char === '}') {
                            braceCount--;
                        }
                    }

                    if (inVerbObject && braceCount <= 0) {
                        verbEnd = k;
                        break;
                    }
                }

                console.log(`Removing occurrence at lines ${verbStart + 1}-${verbEnd + 1}`);

                // Remove the verb object
                lines.splice(verbStart, verbEnd - verbStart + 1);

                // Update occurrence indices for remaining iterations
                for (let m = 0; m < occurrences.length; m++) {
                    if (occurrences[m] > verbStart) {
                        occurrences[m] -= (verbEnd - verbStart + 1);
                    }
                }
            }

            content = lines.join('\n');
        }
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
}

// Remove internal duplicates from germanIrregularVerbs.ts
const germanIrregularVerbsPath = './src/data/germanIrregularVerbs.ts';
const internalDuplicates = [
    'geben', 'sehen', 'lesen', 'essen', 'trinken', 'helfen', 'gießen',
    'werfen', 'schwellen', 'aufgeben', 'ausgeben', 'abgeben', 'ankommen',
    'auskommen', 'abhängen', 'aufziehen', 'abraten', 'ablaufen'
];

console.log('Removing internal duplicates from germanIrregularVerbs.ts...');
removeInternalDuplicates(germanIrregularVerbsPath, internalDuplicates);

// Remove duplicates from germanRegularVerbs.ts
const germanRegularVerbsPath = './src/data/germanRegularVerbs.ts';
const regularDuplicates = [
    'feiern', 'installieren', 'sammeln', 'leihen', 'versichern', 'erweitern',
    'verkleinern', 'vergrößern', 'erneuern', 'renovieren', 'warnen',
    'stabilisieren', 'kategorisieren', 'standardisieren', 'verkaufen',
    'erklären'
];

console.log('Removing internal duplicates from germanRegularVerbs.ts...');
removeInternalDuplicates(germanRegularVerbsPath, regularDuplicates);

// Remove duplicates from germanReflexiveVerbs.ts
const germanReflexiveVerbsPath = './src/data/germanReflexiveVerbs.ts';
const reflexiveDuplicates = [
    'sich vorstellen', 'sich konzentrieren', 'sich vorbereiten', 'sich gewöhnen',
    'sich bewegen', 'sich erholen', 'sich verhalten', 'sich entspannen',
    'sich beruhigen', 'sich verloben', 'sich versöhnen', 'sich verkleiden',
    'sich ausruhen', 'sich zeigen', 'sich informieren', 'sich erkundigen',
    'sich beteiligen', 'sich engagieren', 'sich einsetzen', 'sich verschlechtern',
    'sich verändern', 'sich entwickeln', 'sich fortbilden', 'sich weiterbilden',
    'sich ausbilden', 'sich spezialisieren', 'sich qualifizieren', 'sich besinnen',
    'sich orientieren', 'sich durchsetzen', 'sich behaupten', 'sich etablieren',
    'sich distanzieren', 'sich abgrenzen', 'sich profilieren', 'sich positionieren',
    'sich versichern', 'sich regenerieren', 'sich revitalisieren', 'sich stabilisieren',
    'sich normalisieren', 'sich hingeben', 'sich zusammenreißen', 'sich aufraffen'
];

console.log('Removing internal duplicates from germanReflexiveVerbs.ts...');
removeInternalDuplicates(germanReflexiveVerbsPath, reflexiveDuplicates);

console.log('Internal deduplication complete!');
