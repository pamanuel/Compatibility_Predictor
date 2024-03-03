# Compatibility Predictor

This program is made to find the compatibility score of a list of applicants by comparing each applicant's attributes to an existing team. The score returns a value from [0,1], where the closer the score is to 0, the more compatibile the applicant is to the team. 

## Solution
1. The program begins reading the contents of a JSON file, input_data.json, that contains 2 list of objects, team and applicants, then passing it into a function to where it will be parsed.
2. The data is then split by the team and the applicants, where the team is passed into a ScaledAvgTeamAttribute function.
3. In the ScaledAvgTeamAttributes function, it scales the attributes by finding the ratio of each of the team member's attributes to the team member's total number of attributes. The average of each team member's attribute to attribute total ratio is then found and returned by this function.
EX ScaledAvgTeamAttributes output: ```{
  intelligence: 0.24,
  strength: 0.27,
  endurance: 0.27,
  spicyFoodTolerance: 0.22
}```

4. The ScaledAvgTeamAttributes function's return and an applicant is then passed into another function, getCompatibilityScore, to compute the individual applicants compatibility score.
5. In the getCompatibilityScore function, the applicant's attributes are being scaled by proportion of the attribute and total number of attributes that the applicant has. Then, the difference between the applicants scaled attributes and the team's average scaled attributes is found. Finally, the average distance between each attribute is found is resulted in the score. This function returns the name of the applicant and the score.
EX getCompatibilityScore output:
7. This getCompatibilityScore function is run on each of the applicants and the returns are stored in an array of objects named scoredApplicants.
8. Finally the scoredApplicants are converted into JSON and is then written to a JSON file, output_data.json. 
