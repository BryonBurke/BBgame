
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './src-noconflict/ace.js';
import './src-noconflict/theme-monokai.js';
import './src-noconflict/mode-javascript.js';
// import './src-noconflict/worker-javascript.js';
import { Game } from './game.js';

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

function switchQuestions(game){
  let goal;

  let goalPicker = 1;

  // (Math.floor(Math.random() * Math.floor(12))) + 1;

  if (goalPicker === 1) {
    goal = "Copy";
    game.copyCountDown();
  }else if (goalPicker === 2) {
    goal = "Paste";
    game.pasteCountDown();
  }else if (goalPicker === 3) {
    goal = "Select all"
    game.selectAllCountDown();
  }else if (goalPicker === 4) {
    goal = "Toggle Comments";
    game.toggleCommentsCountDown();
  }else if (goalPicker === 5) {
    goal = "Cut"


  }else if (goalPicker === 6) {
    goal = "Delete Line";
  }else if (goalPicker === 7) {
    goal = "Go to beginning of line"
  }else if (goalPicker === 8) {
    goal = "Go to beginning of line";
  }else if (goalPicker === 9) {
    goal = "Cut to the end of line"
  }else if (goalPicker === 10) {
    goal = "Select next match";
  }else if (goalPicker === 11) {
    goal = "Save";
  }else if (goalPicker === 12) {
    goal = "Select all";
  }


$("#goalPlace").text(goal);
$("#displayGoal").show();

}

function countDownTimer(game){
  let displayCounter = setInterval(() => {
    $('h1#countDown').text(`Timer: ${game.starterScore}`);
    $('.score').html(`Score: ${game.score}`);
  }, 1);
}

//setTimeout(switchQuestion, 10) --hoping this will make the function run 10 time for each question. but that would just make the loop do it's 10 loops, 10 times.

$(document).ready(function(){
  let game = new Game();
  let collectionArray = game.collectionArray;
  $('#game').show();
  countDownTimer(game);
  switchQuestions(game);
  // game.copyCountDown();
  // Collect on key press array.
  $(document).keydown(function (event) {
    event.preventDefault();
    collectionArray.push(event.keyCode);
    console.log(collectionArray);
  });

});
// For nav bars -------
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
