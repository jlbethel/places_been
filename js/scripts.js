$(document).ready(function () {
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
    $("input#notes").val("");
  });
});
