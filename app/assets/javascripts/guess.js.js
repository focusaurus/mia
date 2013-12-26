// // Generated by CoffeeScript 1.6.3
// var Card, Deck, Round;

// Deck = (function() {
//   function Deck(ids, length, counter) {
//     this.ids = ids;
//     this.length = length;
//     this.counter = counter;
//   }

//   return Deck;

// })();

// Card = (function() {
//   function Card(answer, hint, id, question1) {
//     this.answer = answer;
//     this.hint = hint;
//     this.id = id;
//     this.question1 = question1;
//   }

//   return Card;

// })();

// Round = (function() {
//   function Round() {}

//   Round.prototype.getCard = function(cardId, deck) {
//     var self;
//     if (Number(deck.length) === Number(deck.counter)) {
//       return window.location.href = "/rounds";
//     } else {
//       self = this;
//       deck.counter++;
//       return $.ajax("/rounds/guesses/get_card", {
//         method: "GET",
//         data: "cardId=" + deck.counter,
//         success: function(data) {
//           return self.dealCard(new Card(data.answer, data.hint, data.id, data.question1));
//         },
//         error: function() {
//           return alert("Oups, something went wrong");
//         }
//       });
//     }
//   };

//   Round.prototype.dealCard = function(card) {
//     $(".num1").append(card.question1);
//     $("#guess_card_id").append().val(card.id);
//     return $(".hint").append(card.hint);
//   };

//   Round.prototype.collectCard = function() {
//     $(".is_correct").show();
//     $(".num1, .is_correct, .hint").empty();
//     $("#guess_answer").val(" ");
//     return $(".response").val(" ");
//   };

//   Round.prototype.showAnswer = function(answer) {
//     $(".hint").addClass("hide");
//     return $(".is_correct").append(answer).delay(1500).fadeOut("slow", function() {
//       return $('.card').removeClass('flipped');
//     });
//   };

//   return Round;

// })();

// $(function() {
//   var deck, round,
//     _this = this;
//   $('.card').addClass('.front');
//   $(".hint").addClass("hide");
//   deck = new Deck(gon.shuffled_deck, gon.shuffled_deck.length, 0);
//   round = new Round;
//   round.getCard(deck.ids.pop(), deck);
//   $("#answer").click(function(event) {
//     var cardId, guess;
//     event.preventDefault();
//     $('.card').addClass('flipped');
//     guess = Number($("#guess_answer").val());
//     cardId = Number($('#guess_card_id').val());
//     return $.ajax("/rounds/guesses", {
//       method: "POST",
//       data: {
//         guess: guess,
//         card_id: cardId,
//         dataType: "text"
//       },
//       success: function(data) {
//         round.collectCard().after(round.showAnswer(data));
//         return round.getCard(deck.ids.pop(), deck);
//       },
//       error: function() {
//         return alert("Oups, something went wrong!!");
//       }
//     });
//   });
//   return $(".love").click(function(event) {
//     event.preventDefault();
//     return $(".hint").removeClass("hide");
//   });
// });
