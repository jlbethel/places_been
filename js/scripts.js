$(document).ready(function () {
  $("#new-notes input").on('change', function() {
    if ($(this).val().length >= 1) {
      $("#new-notes").append('<div class="form-group">' +
                              '<input type="text" class="form-control one-note" placeholder="Add note">' +
                              '</div>');
    }
    alert("its works");
  });
  // $("input.notes").change('input', function() {
    // if ($(this).val().length >= 1) {
    //   $("#new-notes").append('<div class="form-group">' +
    //                           '<input type="text" class="form-control notes" placeholder="Add note">' +
    //                           '</div>');
    // }
  //   alert("Hi");
  // });
                            //no class nane for new note
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedLandmark = $("input#landmarks").val();
    var inputtedSeason = $("input#season").val();
    var inputtedNote = $("input#notes").val();
    var newPlace = { placeName: inputtedName, landmark: inputtedLandmark, season: inputtedSeason, note: inputtedNote
    };


    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();

      $("#show-place h2").text(newPlace.placeName);
      $(".landmarks").text(newPlace.landmark);
      $(".season").text(newPlace.season);
      $(".notes").text(newPlace.note);
    });

    $("input#name").val("");
    $("input#landmarks").val("");
    $("input#season").val("");
    $("input.notes").val("");
  });
});
