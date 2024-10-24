document
  .getElementById("bmiCalculator")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user inputs
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseInt(document.getElementById("age").value);
    const sex = document.getElementById("sex").value;
    const activity = document.getElementById("activity").value;

    // Check for valid input
    if (!height || !weight || !age || !sex || !activity) {
      alert("Please fill in all fields.");
      return;
    }

    // Calculate BMI
    const bmi = (weight / (height / 100) ** 2).toFixed(2);

    // Determine BMI category
    let bmiStatus;
    if (bmi < 18.5) {
      bmiStatus = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmiStatus = "Healthy";
    } else if (bmi >= 25 && bmi <= 29.9) {
      bmiStatus = "Overweight";
    } else {
      bmiStatus = "Obese";
    }

    // Activity factor adjustment (optional for more detailed results)
    const activityFactor = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
    };

    // Calculate calorie needs based on activity level
    const calorieNeeds = (bmi * activityFactor[activity]).toFixed(2);

    // Display BMI result
    const result = `
      <h3>Your BMI is ${bmi}</h3>
      <p>You are considered: <strong>${bmiStatus}</strong></p>
      <p>Based on your activity level, your daily calorie needs are approximately: <strong>${calorieNeeds} calories</strong></p>
    `;
    document.getElementById("bmiResult").innerHTML = result;
  });

function joinNow() {
  alert("Redirecting to registration page!");
}
