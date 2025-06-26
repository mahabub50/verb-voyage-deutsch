const fs = require('fs');
const path = require('path');

// Function to extract verbs with their complete object definitions
function extractVerbObjects(content) {
    const lines = content.split('\n');
    const verbObjects = [];

    let i = 0;
    while (i < lines.length) {
        const line = lines[i].trim();
        const verbMatch = line.match(/verb:\s*["']([^"']+)["']/);

        if (verbMatch) {
            const verbName = verbMatch[1];
            let verbStartLine = i;
            let braceCount = 0;
            let verbLines = [];
            let foundOpenBrace = false;

            // Find the start of the verb object (look for the opening brace)
            let searchStart = i;
            while (searchStart >= 0 && !foundOpenBrace) {
                const searchLine = lines[searchStart];
                if (searchLine.trim().includes('{')) {
                    foundOpenBrace = true;
                    verbStartLine = searchStart;
                    break;
                }
                searchStart--;
                // Don't go too far back
                if (i - searchStart > 10) break;
            }

            if (!foundOpenBrace) {
                // If we can't find opening brace, start from current line
                verbStartLine = i;
            }

            // Now collect the entire verb object
            let currentLine = verbStartLine;
            braceCount = 0;
            let inVerb = false;

            while (currentLine < lines.length) {
                const currentLineText = lines[currentLine];
                verbLines.push(currentLineText);

                // Count braces
                for (const char of currentLineText) {
                    if (char === '{') {
                        braceCount++;
                        inVerb = true;
                    }
                    if (char === '}') {
                        braceCount--;
                    }
                }

                // If we've closed all braces and we were in a verb, we're done
                if (inVerb && braceCount <= 0) {
                    break;
                }

                currentLine++;
            }

            verbObjects.push({
                verb: verbName,
                startLine: verbStartLine + 1, // 1-indexed
                endLine: currentLine + 1, // 1-indexed
                content: verbLines.join('\n')
            });

            // Move past this verb object
            i = currentLine + 1;
        } else {
            i++;
        }
    }

    return verbObjects;
}

// Function to remove specific verb objects from content
function removeDuplicateVerbs(filePath, verbsToRemove) {
    if (verbsToRemove.length === 0) {
        console.log(`No duplicates to remove from ${path.basename(filePath)}`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const verbObjects = extractVerbObjects(content);

    console.log(`\n=== Processing ${path.basename(filePath)} ===`);
    console.log(`Found ${verbObjects.length} verb objects`);
    console.log(`Removing ${verbsToRemove.length} duplicate verbs`);

    // Sort verbs to remove by line number (descending) to avoid index shifting
    const verbsToRemoveSorted = verbsToRemove
        .map(verb => {
            const verbObj = verbObjects.find(obj => obj.verb === verb);
            return verbObj;
        })
        .filter(obj => obj !== undefined)
        .sort((a, b) => b.startLine - a.startLine);

    let modifiedLines = [...lines];

    for (const verbObj of verbsToRemoveSorted) {
        console.log(`Removing "${verbObj.verb}" (lines ${verbObj.startLine}-${verbObj.endLine})`);

        // Remove the lines (convert to 0-indexed)
        const startIdx = verbObj.startLine - 1;
        const endIdx = verbObj.endLine - 1;

        // Remove the verb object lines, but keep one empty line if there's a comma
        const linesToRemove = endIdx - startIdx + 1;

        // Check if there's a comma after the verb object that needs to be handled
        let removeComma = false;
        if (endIdx + 1 < modifiedLines.length) {
            const nextLine = modifiedLines[endIdx + 1].trim();
            if (nextLine === ',' || nextLine.startsWith(',')) {
                removeComma = true;
            }
        }

        // Remove the verb object
        modifiedLines.splice(startIdx, linesToRemove);

        // Remove the trailing comma if needed
        if (removeComma && startIdx < modifiedLines.length) {
            const lineAfterRemoval = modifiedLines[startIdx].trim();
            if (lineAfterRemoval === ',' || lineAfterRemoval.startsWith(',')) {
                modifiedLines.splice(startIdx, 1);
            }
        }
    }

    // Write the modified content back to file
    const newContent = modifiedLines.join('\n');
    fs.writeFileSync(filePath, newContent, 'utf-8');

    console.log(`Successfully updated ${path.basename(filePath)}`);
}

// Main deduplication function
function deduplicateFiles() {
    const dataDir = './src/data';

    // Define the strategy: which verbs to keep in which files
    const duplicates = new Map([
        // Keep in germanIrregularVerbs.ts, remove from others
        ["fahren", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["nehmen", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["geben", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["sehen", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["lesen", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["essen", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["trinken", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["helfen", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["gießen", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["werfen", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["schwellen", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["abhängen", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["aufziehen", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["auskommen", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["abraten", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["ablaufen", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],
        ["abmachen", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts"] }],

        // Keep in germanIrregularVerbs.ts, remove from germanRegularVerbs.ts
        ["finden", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts"] }],
        ["bringen", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts"] }],
        ["kaufen", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts"] }],
        ["waschen", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts"] }],
        ["schließen", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts"] }],
        ["wiegen", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts"] }],
        ["singen", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts"] }],
        ["reisen", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts"] }],
        ["löschen", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts"] }],
        ["messen", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts"] }],
        ["abreißen", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts"] }],

        // Keep in germanIrregularVerbs.ts, remove from germanNonSeparableVerbs.ts
        ["verstehen", { keep: "germanIrregularVerbs.ts", remove: ["germanNonSeparableVerbs.ts"] }],
        ["gefallen", { keep: "germanIrregularVerbs.ts", remove: ["germanNonSeparableVerbs.ts"] }],
        ["genießen", { keep: "germanIrregularVerbs.ts", remove: ["germanNonSeparableVerbs.ts", "germanVerbsExtension3.ts"] }],
        ["verlieren", { keep: "germanIrregularVerbs.ts", remove: ["germanNonSeparableVerbs.ts", "germanRegularVerbs.ts"] }],
        ["gewinnen", { keep: "germanIrregularVerbs.ts", remove: ["germanNonSeparableVerbs.ts", "germanRegularVerbs.ts"] }],
        ["beginnen", { keep: "germanIrregularVerbs.ts", remove: ["germanNonSeparableVerbs.ts"] }],
        ["verschwinden", { keep: "germanIrregularVerbs.ts", remove: ["germanNonSeparableVerbs.ts"] }],
        ["verbergen", { keep: "germanIrregularVerbs.ts", remove: ["germanNonSeparableVerbs.ts"] }],
        ["empfehlen", { keep: "germanIrregularVerbs.ts", remove: ["germanNonSeparableVerbs.ts", "germanRegularVerbs.ts", "germanVerbsExtension3.ts"] }],
        ["befehlen", { keep: "germanIrregularVerbs.ts", remove: ["germanNonSeparableVerbs.ts"] }],
        ["erschrecken", { keep: "germanIrregularVerbs.ts", remove: ["germanNonSeparableVerbs.ts"] }],
        ["vergessen", { keep: "germanIrregularVerbs.ts", remove: ["germanNonSeparableVerbs.ts"] }],
        ["geschehen", { keep: "germanIrregularVerbs.ts", remove: ["germanNonSeparableVerbs.ts"] }],
        ["bekommen", { keep: "germanIrregularVerbs.ts", remove: ["germanNonSeparableVerbs.ts"] }],

        // Keep in germanIrregularVerbs.ts, remove from extensions
        ["aufgeben", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts", "germanVerbsExtension.ts"] }],
        ["ausgeben", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts", "germanRegularVerbs.ts", "germanVerbsExtension.ts"] }],
        ["abgeben", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts", "germanVerbsExtension.ts"] }],
        ["zurückgeben", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension3.ts"] }],
        ["weitergeben", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension3.ts"] }],
        ["freigeben", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["angeben", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["ankommen", { keep: "germanIrregularVerbs.ts", remove: ["germanIrregularVerbs.ts", "germanRegularVerbs.ts", "germanVerbsExtension.ts"] }],
        ["mitkommen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension2.ts"] }],
        ["nachkommen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension2.ts"] }],
        ["vorkommen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension3.ts"] }],
        ["zurückkommen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension3.ts"] }],
        ["abfahren", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts", "germanVerbsExtension.ts"] }],
        ["abfliegen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["abholen", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts", "germanVerbsExtension.ts", "germanVerbsExtension3.ts"] }],
        ["abnehmen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["abschließen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["anfangen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["angreifen", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts", "germanVerbsExtension.ts"] }],
        ["anrufen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts", "germanVerbsExtension3.ts"] }],
        ["ansehen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["ansprechen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["ansteigen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["anwachsen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["anwenden", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["anziehen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["aufgehen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["aufhalten", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["aufhängen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["aufheben", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["aufnehmen", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts"] }],
        ["aufschreiben", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["aufstehen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts", "germanVerbsExtension3.ts"] }],
        ["auftreten", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["aufwachen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts", "germanVerbsExtension3.ts"] }],
        ["aufwachsen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["ausgehen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["ausleihen", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts", "germanVerbsExtension.ts"] }],
        ["ausmachen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["ausschalten", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["ausschließen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["ausschneiden", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["aussehen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["aussprechen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["aussteigen", { keep: "germanIrregularVerbs.ts", remove: ["germanRegularVerbs.ts", "germanVerbsExtension.ts"] }],
        ["ausstellen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["auswählen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["vorziehen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension3.ts"] }],
        ["wegziehen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension3.ts"] }],
        ["umziehen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension3.ts"] }],
        ["fortziehen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["einziehen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts", "germanVerbsExtension3.ts"] }],
        ["ausziehen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts", "germanVerbsExtension3.ts"] }],
        ["freihalten", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["abfragen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["ablesen", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["abschalten", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
        ["abschicken", { keep: "germanIrregularVerbs.ts", remove: ["germanVerbsExtension.ts"] }],
    ]);

    // Process each file
    const filesToProcess = [
        'germanIrregularVerbs.ts',
        'germanRegularVerbs.ts',
        'germanNonSeparableVerbs.ts',
        'germanVerbsExtension.ts',
        'germanVerbsExtension2.ts',
        'germanVerbsExtension3.ts'
    ];

    for (const fileName of filesToProcess) {
        const filePath = path.join(dataDir, fileName);
        if (!fs.existsSync(filePath)) continue;

        // Find verbs to remove from this file
        const verbsToRemove = [];
        for (const [verb, strategy] of duplicates) {
            if (strategy.remove.includes(fileName)) {
                verbsToRemove.push(verb);
            }
        }

        removeDuplicateVerbs(filePath, verbsToRemove);
    }

    console.log('\n=== DEDUPLICATION COMPLETE ===');
    console.log('All duplicate verbs have been removed from the data files.');
}

// Run the deduplication
deduplicateFiles();
