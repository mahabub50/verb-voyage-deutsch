const fs = require('fs');
const path = require('path');

// Function to extract verbs from a file content
function extractVerbs(content) {
    const lines = content.split('\n');
    const verbs = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        const verbMatch = line.match(/verb:\s*["']([^"']+)["']/);
        if (verbMatch) {
            verbs.push({
                verb: verbMatch[1],
                line: i + 1
            });
        }
    }

    return verbs;
}

// Function to read and analyze all verb files
function analyzeVerbFiles() {
    const dataDir = './src/data';
    const verbFiles = [
        'germanIrregularVerbs.ts',
        'germanModalVerbs.ts',
        'germanNonSeparableVerbs.ts',
        'germanReflexiveVerbs.ts',
        'germanRegularVerbs.ts',
        'germanVerbs.ts',
        'germanVerbsExtension.ts',
        'germanVerbsExtension2.ts',
        'germanVerbsExtension3.ts'
    ];

    const allVerbs = new Map();

    for (const fileName of verbFiles) {
        const filePath = path.join(dataDir, fileName);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf-8');
            const verbs = extractVerbs(content);

            console.log(`\n=== ${fileName} ===`);
            console.log(`Found ${verbs.length} verbs`);

            for (const { verb, line } of verbs) {
                if (!allVerbs.has(verb)) {
                    allVerbs.set(verb, []);
                }
                allVerbs.get(verb).push({ file: fileName, line });
            }
        }
    }

    // Find duplicates
    console.log('\n=== DUPLICATE ANALYSIS ===');
    const duplicates = new Map();

    for (const [verb, occurrences] of allVerbs) {
        if (occurrences.length > 1) {
            duplicates.set(verb, occurrences);
        }
    }

    console.log(`\nTotal unique verbs: ${allVerbs.size}`);
    console.log(`Total duplicates: ${duplicates.size}`);

    if (duplicates.size > 0) {
        console.log('\nDuplicate verbs found:');
        for (const [verb, occurrences] of duplicates) {
            console.log(`\n"${verb}" appears in:`);
            for (const { file, line } of occurrences) {
                console.log(`  - ${file}:${line}`);
            }
        }
    }

    return { allVerbs, duplicates };
}

// Main execution
console.log('Starting verb deduplication analysis...');
const { allVerbs, duplicates } = analyzeVerbFiles();

if (duplicates.size > 0) {
    console.log('\n=== DEDUPLICATION STRATEGY ===');

    // Strategy: Keep the first occurrence of each duplicate verb based on file priority
    const verbsToKeep = new Set();

    for (const [verb, occurrences] of duplicates) {
        // Sort by file priority and keep the first occurrence
        const fileOrder = [
            'germanVerbs.ts',           // Main file
            'germanIrregularVerbs.ts',  // Specific categories
            'germanModalVerbs.ts',
            'germanRegularVerbs.ts',
            'germanReflexiveVerbs.ts',
            'germanNonSeparableVerbs.ts',
            'germanVerbsExtension.ts',   // Extensions
            'germanVerbsExtension2.ts',
            'germanVerbsExtension3.ts'
        ];

        let kept = false;
        for (const fileName of fileOrder) {
            if (!kept && occurrences.some(occ => occ.file === fileName)) {
                verbsToKeep.add(verb);
                const occurrence = occurrences.find(occ => occ.file === fileName);
                console.log(`Keeping "${verb}" in ${occurrence.file}:${occurrence.line}`);
                kept = true;
                break;
            }
        }
    }

    console.log(`\nTotal duplicate verbs found: ${duplicates.size}`);
    console.log(`Summary of duplicates to be handled:`);
    console.log(`- Verbs to keep in primary location: ${verbsToKeep.size}`);
    console.log(`- Duplicate instances to remove: ${Array.from(duplicates.values()).reduce((sum, occurrences) => sum + occurrences.length - 1, 0)}`);
}
