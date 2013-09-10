var calorieCalcView = {
  getFormData: function() {
    var $inputs = $('form :input');
    var values = {};
    $inputs.each( function() {
      if($(this).attr('type') === 'radio') {
        if($(this).is(':checked')) {
          values[this.name] = $(this).val();
        }
      } else {
        values[this.name] = $(this).val();
      }
    });
    return values;
  },
  displayCalories: function(calories) {
    // display to screen
    console.log(calories);
  }
}

var calorieCalcController = {
  init: function() {
    this.submitListener();
  },
  submitListener: function() {
    $('#calorie_calc').on("submit", function(e) {
      e.preventDefault();
      var data = calorieCalcView.getFormData();
      calorieCalc(data);
    });
  }
}

function calorieCalc(data) {
  data.gender === "male" ? maleCalc(data) : femaleCalc(data)
}

// Men: 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years)
function maleCalc(data) {
  var calories =  ( 66 + (6.23 * (data.weight)) + (12.7 * heightToInches(data.feet, data.inches)) - (6.8 * data.age) ) * data.activity + goal(data.goal);
  calorieCalcView.displayCalories(calories);
}

// Women: 655 + (4.35 x weight in pounds) + (4.7 x height in inches) - (4.7 x age in years)
function femaleCalc(data) {
  var calories = ( 655 + (4.35 * data.weight)) + (4.7 * heightToInches(data.feet, data.inches) - (4.7 * data.age) ) * data.activity + goal(data.goal);
  calorieCalcView.displayCalories(calories);
}

function heightToInches(feet, inches) {
  return parseInt(feet) * 12 + parseInt(inches);
}

function goal(goal) {
  var goalNum;
  switch (goal) {
    case "muscle":
      goalNum = 500;
      break;
    case "maintenance":
      goalNum = 0;
      break;
    case "weightloss":
      goalNum = -500;
      break;
  }
  return goalNum;
}
