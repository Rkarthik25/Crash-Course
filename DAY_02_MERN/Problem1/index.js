const fs = require('fs').promises;
const path = require('path');

async function readFileAsync(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data;
    } catch (err) {
        throw err;
    }
}

async function aggregateDataAsync(filePaths) {
    let aggregatedData = '';

    for (const filePath of filePaths) {
        try {
            const data = await readFileAsync(filePath);
            aggregatedData += data+" ";
        } catch (err) {
            throw err;
        }
    }

    return aggregatedData;
}

const filePaths = [
    path.join(__dirname, 'file1.txt'),
    path.join(__dirname, 'file2.txt'),
    path.join(__dirname, 'file3.txt')
];

aggregateDataAsync(filePaths)
    .then(aggregatedData => {
        console.log('Aggregated data:', aggregatedData);
    })
    .catch(err => {
        console.error('Error:', err);
    });
