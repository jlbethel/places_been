$(document).ready(function () {
  $("#new-notes").on('change', function() {
    if ($(this).find('input').val().length >= 1) {
      $("#new-notes").append('<div class="new-note">' +
                              '<div class="form-group">' +
                              '<input type="text" class="form-control extra-input one-note" placeholder="Add note">' +
                              '</div>' +
                              '</div>');
    }
  });

  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedLandmark = $("input#landmarks").val();
    var inputtedSeason = $("input#season").val();
    var newPlace = { placeName: inputtedName, landmark: inputtedLandmark, season: inputtedSeason, note: []
    };

    $(".new-note").each(function() {
      if ($(this).find("input.one-note").val().length >=1) {
        var inputtedNote = $(this).find("input.one-note").val();

        var newNote = { observation: inputtedNote };
        newPlace.note.push(newNote);

      }

    });


    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();

      $("#show-place h2").text(newPlace.placeName);
      $(".landmarks").text(newPlace.landmark);
      $(".season").text(newPlace.season);
      newPlace.note.forEach(function(note) {
        $("ul#notes").append("<li>" + note.observation + "</li>");
        debugger;
      });
    });

    $("input#name").val("");
    $("input#landmarks").val("");
    $("input#season").val("");
    $("input.one-note").val("");
    $(".extra-input").remove();
  });
});
