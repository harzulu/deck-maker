$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    const suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
    const rank = [2,3,4,5,6,7,8,9,10,"jack", "queen", "king", "ace"];
    suits.forEach(function(suit) {
      rank.forEach(function(rank) {
        $("#deck").append("<li>" + rank + " of " + suit + "</li>");
      });
    });
  });
});