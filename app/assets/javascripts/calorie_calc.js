var calorieCalcView = {
  getFormData: function() {
    var $inputs = $('form :input');
    var values = {};
    $inputs.each( function() {
      values[this.name] = $(this).val();
    });
    return values;
  },
  displayCalories: function() {
    // display color after calculation to screen
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
  console.log(data);
}
