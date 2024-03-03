export function ScaledTeamAttributes(team){
    // initialize team attribute scale
    const avgTeamAttributeScale = {
        intelligence: 0,
        strength: 0,
        endurance: 0,
        spicyFoodTolerance: 0
    }
    const teamLength = team.length;
    // for each team member scale down by attribute to total attribute
    team.forEach(member => {
        const totalAttributes = getTotalAttributes(member);
        // console.log(`${member.name} : ${totalAttributes}`);
        const memberIntelligence = member.attributes.intelligence;
        const memberStrength = member.attributes.strength;
        const memberEndurance = member.attributes.endurance;
        const memberSpicyFoodTolerance = member.attributes.spicyFoodTolerance;

        //ex: intelligence = 3, total attributes = 20
        //attribute ratio = 3/20
        //then get avg amongst team members
        avgTeamAttributeScale.intelligence += getAttributeRatio(memberIntelligence, totalAttributes) / teamLength;
        avgTeamAttributeScale.strength += getAttributeRatio(memberStrength, totalAttributes) / teamLength;
        avgTeamAttributeScale.endurance += getAttributeRatio(memberEndurance, totalAttributes) / teamLength;
        avgTeamAttributeScale.spicyFoodTolerance += getAttributeRatio(memberSpicyFoodTolerance, totalAttributes) / teamLength;
    });

    // sum of avgTeamAttributeScale should be 1
    // console.log(avgTeamAttributeScale.intelligence + avgTeamAttributeScale.strength + avgTeamAttributeScale.endurance + avgTeamAttributeScale.spicyFoodTolerance);
    return avgTeamAttributeScale;
}

// returns the compatibility score applicant
export function getCompatibilityScore(applicant, avgTeamAttributeScale){
    let score = 0;
    let numAttributes = 0;
    const totalApplicantAttribute = getTotalAttributes(applicant);

    // finds normalizes the applicants attributes
    // finds the distance between the applicants attributes and the teams avg

    Object.keys(applicant.attributes).forEach(attribute => {
        
        const attributeRatio = applicant.attributes[attribute] / totalApplicantAttribute;
        score += Math.abs(attributeRatio - avgTeamAttributeScale[attribute]);
        numAttributes++;

    });

    score = (score / numAttributes).toFixed(2);
    return {
        name: applicant.name,
        score: score
    }
}   
// returns the sum of all attributes of a member
function getTotalAttributes(member){
    const attributeValue = Object.values(member.attributes);
    const totalAttributes = attributeValue.reduce((sum, attribute) => sum + attribute, 0);
    return totalAttributes;
}

function getAttributeRatio(attribute,totalAttributes){
    return attribute / totalAttributes;
}