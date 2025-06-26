const fs = require('fs');

// Function to remove specific verbs from a file
function removeVerbsFromFile(filePath, verbsToRemove) {
    if (verbsToRemove.length === 0) {
        console.log(`No verbs to remove from ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf-8');
    console.log(`\nProcessing ${filePath}...`);

    for (const verbName of verbsToRemove) {
        // Check if verb exists
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

                // Find start of verb object (go backwards to find opening brace)
                for (let k = verbLine; k >= Math.max(0, verbLine - 30); k--) {
                    if (lines[k].trim().includes('{') && !foundStart) {
                        verbStart = k;
                        foundStart = true;
                        break;
                    }
                }

                // Find end of verb object (go forwards to find matching closing brace)
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

                // Remove the verb object and handle trailing commas
                lines.splice(verbStart, verbEnd - verbStart + 1);

                // Check for and remove trailing comma if it exists
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

// Cross-file deduplication: Remove verbs from other files if they exist in irregular verbs
const crossFileDuplicates = {
    // Remove from germanRegularVerbs.ts (these should be irregular)
    'germanRegularVerbs.ts': [
        'finden', 'bringen', 'kaufen', 'waschen', 'schließen', 'wiegen', 'singen',
        'reisen', 'löschen', 'messen', 'verlieren', 'gewinnen', 'aussteigen',
        'verkaufen', 'angreifen', 'aufnehmen', 'ausleihen', 'abfahren', 'abreißen',
        'abholen', 'ankommen', 'zurückkehren', 'wegfahren', 'einsteigen', 'mitfahren',
        'zurückbringen', 'mitnehmen', 'wegnehmen', 'weggeben', 'entdecken', 'entwickeln',
        'erreichen', 'erklären', 'erobern', 'ersetzen', 'erwarten', 'erzählen',
        'gestehen', 'misstrauen', 'verbessern', 'verbinden', 'verdienen', 'vergleichen',
        'vermieten', 'vertrauen', 'zerstören', 'besuchen', 'einladen', 'aufbauen',
        'beschreiben', 'vorschlagen', 'vorstellen'
    ],

    // Remove from germanNonSeparableVerbs.ts (these should be irregular)  
    'germanNonSeparableVerbs.ts': [
        'verstehen', 'gefallen', 'genießen', 'verlieren', 'gewinnen', 'beginnen',
        'verschwinden', 'verbergen', 'empfehlen', 'befehlen', 'erschrecken', 'vergessen',
        'geschehen', 'bekommen', 'verbringen'
    ],

    // Remove from germanVerbsExtension.ts
    'germanVerbsExtension.ts': [
        'aufgeben', 'ausgeben', 'abgeben', 'freigeben', 'angeben', 'ankommen',
        'abfahren', 'abfliegen', 'abholen', 'abnehmen', 'abschließen', 'anfangen',
        'angreifen', 'anrufen', 'ansehen', 'ansprechen', 'ansteigen', 'anwachsen',
        'anwenden', 'anziehen', 'aufgehen', 'aufhalten', 'aufhängen', 'aufheben',
        'aufschreiben', 'aufstehen', 'auftreten', 'aufwachen', 'aufwachsen',
        'ausgehen', 'ausleihen', 'ausmachen', 'ausschalten', 'ausschließen',
        'ausschneiden', 'aussehen', 'aussprechen', 'aussteigen', 'ausstellen',
        'auswählen', 'fortziehen', 'einziehen', 'ausziehen', 'freihalten',
        'abfragen', 'ablesen', 'abschalten', 'abschicken', 'absagen', 'annehmen',
        'aufräumen', 'einkaufen', 'fernsehen', 'aufbauen', 'einladen', 'einsteigen',
        'heimbringen', 'heimfahren', 'heimfinden', 'heimgehen', 'heimkehren',
        'heimkommen', 'heimreisen', 'heimschicken', 'herbitten', 'herbringen',
        'hereilen', 'herfahren', 'herfinden', 'herholen', 'herkommen', 'herkriegen',
        'hernehmen', 'herrufen', 'herschauen', 'herstellen', 'hinblicken',
        'hinbringen', 'hinfahren', 'hinfallen', 'hinfliegen', 'hingehen',
        'hingucken', 'hinhauen', 'hinhören', 'hinknien', 'hinkommen', 'hinkriegen',
        'hinlaufen', 'hinnehmen', 'hinrennen', 'hinschicken', 'hinschmeißen',
        'hinsehen', 'hinsetzen', 'hintragen', 'hinweisen', 'hinwerfen', 'hinziehen'
    ],

    // Remove from germanVerbsExtension2.ts
    'germanVerbsExtension2.ts': [
        'mitkommen', 'nachkommen', 'mitbringen', 'stattfinden', 'teilnehmen', 'mitfahren'
    ],

    // Remove from germanVerbsExtension3.ts
    'germanVerbsExtension3.ts': [
        'zurückgeben', 'weitergeben', 'vorkommen', 'zurückkommen', 'vorziehen',
        'wegziehen', 'umziehen', 'einziehen', 'ausziehen', 'genießen', 'empfehlen',
        'anrufen', 'aufstehen', 'aufwachen', 'vorhaben', 'wegräumen', 'zuhören',
        'zusagen', 'zuschauen', 'zurückrufen', 'absagen', 'annehmen', 'aufräumen',
        'einkaufen', 'fernsehen', 'mitbringen', 'stattfinden', 'teilnehmen',
        'wegfahren', 'zurückkehren', 'mitnehmen', 'abholen', 'besuchen', 'einladen',
        'beschreiben', 'erklären', 'erzählen', 'empfehlen', 'verbringen', 'umziehen',
        'einziehen', 'ausziehen', 'vorstellen', 'zuhören', 'zusagen', 'zuschauen',
        'absagen', 'wegräumen', 'aufräumen', 'aufstehen', 'aufwachen', 'einkaufen',
        'fernsehen', 'stattfinden', 'teilnehmen', 'vorhaben', 'mitnehmen',
        'mitbringen', 'zurückrufen'
    ]
};

// Execute cross-file deduplication
for (const [fileName, verbsToRemove] of Object.entries(crossFileDuplicates)) {
    const filePath = `./src/data/${fileName}`;
    if (fs.existsSync(filePath)) {
        removeVerbsFromFile(filePath, verbsToRemove);
    }
}

console.log('\nCross-file deduplication complete!');
