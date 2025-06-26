const fs = require('fs');
const path = require('path');

function countVerbs(filePath) {
    if (!fs.existsSync(filePath)) return 0;

    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/verb:\s*["'][^"']+["']/g);
    return matches ? matches.length : 0;
}

const dataDir = './src/data';
const files = [
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

let totalCount = 0;
console.log('Current verb counts:');

for (const file of files) {
    const filePath = path.join(dataDir, file);
    const count = countVerbs(filePath);
    console.log(`${file}: ${count} verbs`);
    totalCount += count;
}

console.log(`\nTotal: ${totalCount} verbs`);
console.log(`Need to add: ${1700 - totalCount} more verbs to reach 1700`);
