// Ask user for permission to share personal information
var agreeToShare = confirm("Do you agree to share your personal information with our site?");

if (agreeToShare) {
    // Define variables
    var nickname = "Karen";
    var heightInInches = 62;
    var weightInKg = 50;

    // Convert height from inches to feet and inches
    var feet = Math.floor(heightInInches / 12);
    var inches = heightInInches % 12;

    // Convert weight from kg to lbs
    var weightInLbs = weightInKg * 2.20462;

    // Display information using alert()
    alert("Name: " + nickname + "\n" +
          "Height: " + feet + "' " + inches + "\"" + "\n" +
          "Weight: " + weightInLbs.toFixed(3) + " lbs");
} else {
    // User does not wish to share information
    alert("User does not wish to share his/her information.");
}
