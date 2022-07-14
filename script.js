// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// Array for all quotes

const quotes = [{
    quote: `"I do the very best I know how, the very best I can; and I mean to keep on doing so 
    until the end."`,
    person: `Abraham Lincoln`
}, {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `Nelson Mandela`
}, {
    quote: `"The way to get started is to quit talking and begin doing."`,
    person: `Walt Disney`
}, {
    quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped 
    by dogma which is living with the results of other people's thinking."`,
    person: `Steve Jobs`
}, {
    quote: `"If life were predictable it would cease to be life, and be without flavor."`,
    person: `Elanor Roosevelt`
}, {
    quote: `"If you set your goals ridiculously high and it's a failure, you will fail above 
    everyone else's success."`,
    person: `James Cameron`
}, {
    quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
    person: `Mother Teresa`
}, {
    quote: `"Always remember that you are absolutely unique. Just like everyone else."`,
    person: `Margaret Mead`
}, {
    quote: `"Don't judge each day by the harvest you reap but by the seeds that you plant."`,
    person: `Robert Louis Stevenson`
}, {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: `Benjamin Franklin`
}, {
    quote: `"It is during our darkest moments that we must focus to see the light."`,
    person: `Aristotle`
}, {
    quote: `"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
    person: `Ralph Waldo Emerson`
}, {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    person: `Babe Ruth`
}, {
    quote: `"You have brains in your head. You have feet in your shoes. You can steer yourself 
    any direction you choose."`,
    person: `Dr. Suess`
},]

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})