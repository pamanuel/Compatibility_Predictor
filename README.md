# Compatibility_Predictor

This program is made to find the compatibility score of a list of applicants by comparing each applicant's attributes to an existing team. The score returns a value from [0,1], where the closer the score is to 0, the more compatibile the applicant is to the team. 

## Solution
1. The program begins reading the contents of a JSON file that contains 2 list of objects, team and applicants, then passing it into a function to where it will be parsed.
2. The data is then split by the team and the applicants, where the team is passed into a ScaledAvgTeamAttribute function.
3. In the ScaledAvgTeamAttributes function, it scales the attributes by proportion to the team member's total number of attributes. This function returns the average amongst the attributes attribute to total attributes proportion.
4. The ScaledAvgTeamAttributes function's return and an applicant is then passed into another function, getCompatibilityScore, to compute the individual applicants compatibility score.
5. In the getCompatibilityScore function, the applicant's attributes are being scaled by proportion of the attribute and total number of attributes that the applicant has. Then, the difference between the applicants scaled attributes and the team's average scaled attributes is found. Finally, the average distance between each attribute is found is resulted in the score. This function returns the name of the applicant and the score. 
