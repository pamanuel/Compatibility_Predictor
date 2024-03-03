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
    // console.log(avgTeamAttributeScale);
    // const applicantScore = getCompatibilityScore(applicants[0], avgTeamAttributeScale)
    //get compatibility score from each applicant and store into array
    const scoredApplicants = applicants.map(applicant => getCompatibilityScore(applicant, avgTeamAttributeScale));

    // clean format for json file
    const output = {scoredApplicants};
    const jsonOutput = JSON.stringify(output, null, 2)
    // console.log(jsonOutput);
    return jsonOutput;
}

const output = CompatibilityPredictor(inputData);
fs.writeFileSync("output_data.json", output);
