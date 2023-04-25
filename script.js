'use strict';

// This is how we target html elements using JavaScript querySelector method on document object:

console.log(document.querySelector('.message')); // selecting element with class name : 'message'
// Output :  <p class="message">Start guessing...</p>

// Now let's get only the content of above element that we have selected and log it :

console.log(document.querySelector('.message').textContent);
// Output : Start guessing...

// Let's set now the content of 'message' to something else using textContent way :

// document.querySelector('.message').textContent = '🎉Correct Number!'; // new content overwrites previous message!

// Output: 🎉Correct Number!

// And so what we did here is really already DOM manipulation. Because in fact, here we manipulated the text-content of one of the DOM nodes.

// So now lets go ahead and select the elements with the class 'number' and 'score'. And just to experiment some more with this, let's set it to something else :

// document.querySelector('.number').textContent = 13; // number value set to 13 !
// document.querySelector('.score').textContent = 10; // score value set to 10 !

// Note that we can't do it like : document.querySelector('.number') = 13; because we can't set whole element to 13 or anything else , because elements are way more than the just textContent!

// And now lets move on and do the same, actually with this input field. So an input field as the name says, is where we can input some data. And so actually we can also get the data from here, and we can of course also set it. So lets just see how that works,

console.log(document.querySelector('.guess').value);

// And now if we want to get the value, which right now is actually empty. But if we want to get that, now, this time, we read the "value" property.

// Output: an Empty Value !

// with an input field, to get the actual value, we use the "value" property. And we can of course also use it to set a value, so to manipulate this element.

// document.querySelector('.guess').value = 23; // this will set input field with 23 as if that we wrote it!

// now logging the guess value  we get 23

console.log(document.querySelector('.guess').value);
// 23

// An event is something that happens on the page. For example, a mouse click, or a mouse moving, or a key press, or many other events. Then, with an event listener, we can wait for a certain event to happen, and then react to it. So let's try it out now.

// till this line we learned very very basic dom now let's start building the actual game step by step using event listener and logic of Javascript and everything that we have learned above

// :::::::::::::::::::::: BUILDING OUR GAME NOW ::::::::::::::::::::::::::::::::::::: //

// Now start working using an eventListener function which expects 2 arguments first , type of event and second, the evenHandeler function in it . Below is an example of simple 'click' event on check button and input element!

/*document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
*/

// Output: whatever number entered in input-box will be logged out to console when click on check!

/*

Here above we selected this button 'check' using querySelector. And then we use the 'addEventListener' method on that element to attach an 'event-handler'. And that event-handler is 'function' here. Okay, so this is, again, just a function-expression. So this is just a function value, right? Now what we did the exact same thing, So we wrote here a function we simply did not assign it to any variable. Instead, we passed it directly here into the 'addEventListener' method.

So as the first argument, we had the name of the event that we're listening for, which is a 'click'. And then as the second argument, we have this function value. And this function simply contains the code that we want to execute whenever the event happens.

Also, note that we do not call this function here anywhere, right? We only define the function here, and then pass it into the event handler. But it is the JavaScript engine who will call this function as soon as the event happens. Okay? That's important to understand. So again, this function will not be called immediately once the script here is executed. This function will only be called as soon as the event happens. And you can also see that here in the code, because, well, we don't call the function anywhere using the parenthesis, right? And so, now, again, we're just really passing it into the addEventListener function. So this works just fine.

*/

/*
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);
});

*/

// And so this should now do the exact same thing. But we first stored that value into a variable, and then we log it afterwards. All right.

/* 

remember how I said in the fundamental section, that usually whenever we get something from the user interface, for example, from an input field, it usually always is a string.

i.e. type of(guess) === string
  
*/

/*

However, we will eventually have to compare this number here with a randomly generated number. So that's going to be basically the secret number that we will have to guess. And so if we want to compare numbers with numbers, we need to first convert this string to a number. So let's do that here, using the Number-function.

*/

/*

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
});

*/

/*

And now, let's start to implement the game logic here a little bit. But just the simplest case, which is the case that there's a actually no guess. So usually in an application like this, which has an input value from the user, the first thing to do is to check if there actually is a value. And if there is no value, well, then we can print something to the console as a response.


So if we click on the button check without enetering any value now, indeed, we get zero, and zero is a false value. Okay? And so guess our here, in this logical context of the False statement, will be false. So that's what we learned in the fundamental section, right?

*/

/* DEFINING SECRET NUMBER BELOW: */

let secretNumber = Math.trunc(Math.random() * 20) + 1;

/* DEFINING OUR SCORE VARIABLE BELOW: */

let score = 20;

/* And so it's always good to keep a variable which actually holds the data in our code and not just rely on the DOM to hold our data, all right? And this variable here can also be called a state variable. Because this score is part of the so-called application state which is basically all the data that is relevant to the application. And we could say that 17, so the secret number is also part of the state of our application, all right? And so we want all the data always to be available somewhere in our code and not just in the DOM , okay? But always keep that in mind, and so that is why we implemented a solution like this. So whenever there's a wrong guess, we just take the score that we already have in our code, then we decrease it by one and then we display that new score right here.

CHECK BOOKMARK 3!

*/

let highscore = 0;

/* Let's actually display the number but in real game it will be hidden! */

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  /* when no value entered */
  if (!guess) {
    /* Now we need to change the textContent of message as below then it will be rendered! */
    document.querySelector('.message').textContent = '⛔No number!';
  } else if (guess === secretNumber) {
    /* What if there is actually a guess equals to our secretNumber */
    document.querySelector('.message').textContent = '🎉Correct Number!';
    /* manipulating styles when player wins this all will set inline style to html and not in original css files remember that! */

    document.querySelector('#wrapper').style.background =
      'radial-gradient(circle, rgba(144,241,154,1) 0%, rgba(104,200,114,1) 67%)';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '200px';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      /* if guess greater than the secretNumber */
      document.querySelector('.message').textContent = '🤦Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('#wrapper').style.background =
        'radial-gradient(circle, rgba(255,188,188,1) 4%, rgba(255,170,170,1) 12%, rgba(255,0,0,0.6330240714449842) 89%)';
      document.querySelector('.message').textContent = '🙇‍♂️Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      /* if guess smaller than the secretNumber */
      document.querySelector('.message').textContent = '🤦Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('#wrapper').style.background =
        'radial-gradient(circle, rgba(255,188,188,1) 4%, rgba(255,170,170,1) 12%, rgba(255,0,0,0.6330240714449842) 89%)';
      document.querySelector('.message').textContent = '🙇‍♂️Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

/*



And with game logic I basically mean implementing the way how the game works. So we need to implement what happens when the guess is correct. So when it's equal to the secret number, we also need to implement what happens when the guess is too low or when it's too high. So basically we have these three scenarios. And to start we actually need to define that secret number. Otherwise, there is nothing which we can compare the guess to, all right? Now, where do you think we should define that secret number? Should we do it inside of this button handler or should we do it outside? Well, the answer is that we should do it outside because we only want that secret number to be defined once, so only when we start the application. And so that's out here outside of the handler function. If we define the secret number inside this handler function then on each click, we would get a new secret number. And so then the game would make no sense at all, all right? We just need one number, which we can then compare to each of the guesses this year on each click. So let's define the number,

CHECK BOOKMARK 1!


*/

/*

 To work with a score here. So remember that each time that we guess a wrong number our score showed to decrease. We want to decrease that score by a one, all right? Because again, each time that there is a wrong guess the score should decrease by one. So how should we do that? And I can think of two ways of doing that. The first way is to read the score from here, then decrease it by one and then print it here again. So that would be the first way of doing it, but there is a better way. And the better way is to actually create a variable for the score in the code and then update that variable so basically to decrease that variable and then display the value of that variable here in this score label. And by doing that, we have our data also in the code and not just on the DOM. And so that's always a very good thing to do. So let me do that now and then I will explain it a little bit better. So I'm gonna do that right here after the secret number,


 CHECK BOOKMARK 2
 
 
 */

/*

 So the DOM actually also includes CSS Styles. And so with DOM manipulation, we can also change Styles. So let's try that out now. And what I want to do here is to change the background of this entire page here to a green color. Whenever the player guesses the right number,
 

*/

/* Implementing RESET functionality */

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('#wrapper').style.background =
    'radial-gradient(circle, rgba(254, 211, 188, 1) 0%, rgba(248, 161, 156, 1) 71%)';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '175px';
});

/* implementing HIGHSCORES 

First off, we're gonna to need a variable for the high score. Right. So just like for the regular score, we also need to store the high score in a variable.

CHECK BOOKMARK 4:


*/
