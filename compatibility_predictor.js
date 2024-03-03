import fs from 'fs';
import { ScaledAvgTeamAttributes, getCompatibilityScore } from './utilities.js'
const inputData = JSON.parse(fs.readFileSync('input_data.json','utf8'));
function CompatibilityPredictor(inputData){
    const team = inputData.team;
    const applicants = inputData.applicants;
    // console.log(team);
    // console.log(applicants);

    // Use the team attributes to scale down
    // get the average of each team member
    // use average to compare with applicants
    const avgTeamAttributeScale = ScaledAvgTeamAttributes(team);
    // const applicantScore = getCompatibilityScore(applicants[0], avgTeamAttributeScale)
    const scoredApplicants = applicants.map(applicant => getCompatibilityScore(applicant, avgTeamAttributeScale));
    
    const output = {scoredApplicants};
    const jsonOutput = JSON.stringify(output, null, 2)
    return jsonOutput;
}

const output = CompatibilityPredictor(inputData);
fs.writeFileSync("output_data.json", output);
