$(document).ready(function() {

  // if the window height is too small (under 629px), set it to 629px
  // if it is greater, then set the height to the height of the viewport

  var height = $(window).height()
  if (height > 627){
    $(".section").css("height", "100vh")
  }

  $(window).resize(function(){
    var height = $(window).height()
    console.log(height)
    if (height > 627){
      $(".section").css("height", "100vh")
    } else {
      $(".section").css("height", "629px")
    }
  });

  // ----------------------------------------------------------------------



  var button = $("#calculate-button");
  button.click(function() {
    // get all of the values in the form fields
    var age = $("#age").val()
    var weight = $("#weight").val()
    var height = $("#height").val()
    var goal = $("#goal").val()
    var activity = $("#activity").val()
    var gender = $("#gender").val()

    // if any are left empty, prompt the error to fill out all of them
    if (age === "" || weight === "" || height === ""){
      alert("Please fill out all fields to calculate your macros!")
    } 
    else {
      // calculate Basal Metabolic Rate (BMR) based on gender
      if (gender === "Male"){
        var bmr = 66 + (13.7*(weight*0.453592)) + (5*(height*2.54)) - (6.8*age)
      } else {
        var bmr = 655 + (9.6*(weight*0.453592)) + (1.8*(height*2.54)) - (4.7*age)
      }

      if (goal === "Cutting (Lose Weight)"){
        var calorie_difference = -300
      } else if (goal === "Body Recomp (Lose Weight, Gain Muscle"){
        var calorie_difference = 0
      } else{
        var calorie_difference = 300
      }

      if (activity === "Little to no exercise"){
        var bmr_multiplier = 1.1
      } else if (activity === "Light Exercise 1-3 days a week"){
        var bmr_multiplier = 1.255
      } else if (activity === "Moderate Exercise 3-5 days a week"){
        var bmr_multiplier = 1.425
      } else {
        var bmr_multiplier = 1.625
      }

      var calories = Math.round(bmr*bmr_multiplier) + calorie_difference
      var protein = weight
      var fat = Math.round(calories * 0.225 / 9)
      var carbs = (calories - (protein*4) - (fat*9)) / 4

      $("#carbs").text(carbs + "g")
      $("#fat").text(fat + "g")
      $("#protein").text(protein + "g")
      $("#calories").text(calories)
      $(".results-wrapper").css("display", "block")
    }

  });



var mobile_button = $("#mobile-calculate-button");
    button.click(function() {
    // get all of the values in the form fields
    var age = $("#age").val()
    var weight = $("#weight").val()
    var height = $("#height").val()
    var goal = $("#goal").val()
    var activity = $("#activity").val()
    var gender = $("#gender").val()

    // if any are left empty, prompt the error to fill out all of them
    if (age === "" || weight === "" || height === ""){
      alert("Please fill out all fields to calculate your macros!")
    } 
    else {
      // calculate Basal Metabolic Rate (BMR) based on gender
      if (gender === "Male"){
        var bmr = 66 + (13.7*(weight*0.453592)) + (5*(height*2.54)) - (6.8*age)
      } else {
        var bmr = 655 + (9.6*(weight*0.453592)) + (1.8*(height*2.54)) - (4.7*age)
      }

      if (goal === "Cutting (Lose Weight)"){
        var calorie_difference = -300
      } else if (goal === "Body Recomp (Lose Weight, Gain Muscle"){
        var calorie_difference = 0
      } else{
        var calorie_difference = 300
      }

      if (activity === "Little to no exercise"){
        var bmr_multiplier = 1.1
      } else if (activity === "Light Exercise 1-3 days a week"){
        var bmr_multiplier = 1.255
      } else if (activity === "Moderate Exercise 3-5 days a week"){
        var bmr_multiplier = 1.425
      } else {
        var bmr_multiplier = 1.625
      }

      var calories = Math.round(bmr*bmr_multiplier) + calorie_difference
      var protein = weight
      var fat = Math.round(calories * 0.225 / 9)
      var carbs = (calories - (protein*4) - (fat*9)) / 4

      $("#m-carbs").text(carbs + "g")
      $("#m-fat").text(fat + "g")
      $("#m-protein").text(protein + "g")
      $("#m-calories").text(calories)
      $(".results-wrapper").css("display", "block")
    }
  });


});

