import fs from 'fs';
import { ScaledTeamAttributes } from './utilities.js'
const inputData = JSON.parse(fs.readFileSync('input_data.json','utf8'));
function CompatibilityPredictor(inputData){
    const team = inputData.team;
    const applicants = inputData.applicants;
    // console.log(team);
    // console.log(applicants);

    // Use the team attributes to scale down
    // get the average of each team member
    // use average to compare with applicants
    const avgScaledAttributes = ScaledTeamAttributes(team);
    return avgScaledAttributes;
}

const output = CompatibilityPredictor(inputData);
console.log(output);