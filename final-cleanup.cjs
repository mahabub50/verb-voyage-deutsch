const fs = require('fs');

// Function to remove specific verbs from a file
function removeVerbsFromFile(filePath, verbsToRemove) {
    if (verbsToRemove.length === 0) return;

    let content = fs.readFileSync(filePath, 'utf-8');
    console.log(`Processing ${filePath}...`);

    for (const verbName of verbsToRemove) {
        const verbRegex = new RegExp(`verb:\\s*["']${verbName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'g');
        const matches = content.match(verbRegex);

        if (matches) {
            console.log(`  Removing "${verbName}"`);

            const lines = content.split('\n');
            let verbLine = -1;

            // Find the verb line
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].includes(`verb: "${verbName}"`) || lines[i].includes(`verb: '${verbName}'`)) {
                    verbLine = i;
                    break;
                }
            }

            if (verbLine !== -1) {
                // Find the complete verb object
                let verbStart = verbLine;
                let verbEnd = verbLine;
                let braceCount = 0;
                let foundStart = false;

                // Find start of verb object
                for (let k = verbLine; k >= Math.max(0, verbLine - 30); k--) {
                    if (lines[k].trim().includes('{') && !foundStart) {
                        verbStart = k;
                        foundStart = true;
                        break;
                    }
                }

                // Find end of verb object
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

                // Remove the verb object
                lines.splice(verbStart, verbEnd - verbStart + 1);

                // Handle trailing comma
                if (verbStart < lines.length && lines[verbStart].trim() === ',') {
                    lines.splice(verbStart, 1);
                }

                content = lines.join('\n');
            }
        }
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  Updated ${filePath}`);
}

// Remove remaining duplicates
const finalCleanup = {
    './src/data/germanIrregularVerbs.ts': ['finden'], // Remove second occurrence
    './src/data/germanRegularVerbs.ts': ['empfehlen', 'ausgeben', 'preisgeben'],
    './src/data/germanVerbsExtension.ts': ['abmachen']
};

for (const [filePath, verbsToRemove] of Object.entries(finalCleanup)) {
    if (fs.existsSync(filePath)) {
        removeVerbsFromFile(filePath, verbsToRemove);
    }
}

console.log('\nFinal cleanup complete!');
