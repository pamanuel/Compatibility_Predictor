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

    });
    return "hello world";
}

// returns the sum of all attributes of a member
function getTotalAttributes(member){
    const attributeValue = Object.values(member.attributes);
    const totalAttributes = attributeValue.reduce((sum, attribute) => sum + attribute, 0);
    return totalAttributes;
}