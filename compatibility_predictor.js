import fs from 'fs';

const inputData = JSON.parse(fs.readFileSync('input_data.json','utf8'));
function CompatibilityPredictor(inputData){
    console.log(inputData);
}

CompatibilityPredictor(inputData);