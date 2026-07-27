const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function main() {
    const buf = fs.readFileSync('public/assets/pdf/IshrathRajiCV.pdf');
    const parser = new PDFParse({ data: buf });
    const result = await parser.getText();
    fs.writeFileSync('pdf-content.txt', result.text);
    console.log('Done. Pages:', result.total);
    console.log('---TEXT PREVIEW---');
    console.log(result.text.substring(0, 3000));
}
main().catch(e => console.error(e));
