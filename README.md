# Compatibility_Predictor

This program is made to find the compatibility score of a list of applicants by comparing each applicant's attributes to an existing team. The score returns a value from [0,1], where the closer the score is to 0, the more compatibile the applicant is to the team. 

## Solution
1. The program begins reading the contents of a JSON file, then passing it into a function to where it will be parsed.
2. The data is then split by the team and the pplicants, where the team is passed into a ScaledAvgTeamAttribute function.
