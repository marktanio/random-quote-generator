document.addEventListener('DOMContentLoaded',function(){

//get elements and store them
const quoteBox = document.querySelector('.quote');
const authorBox = document.querySelector('.author');
const button = document.querySelector('.quote-btn');

const quotesArray = [
    { author: "Tiktok", quote: "If you're tired, just give up" },
    { author: "Tiktok1", quote: "Together we stand, Divided by four" },
    { author: "Tiktok3", quote: "Do your best and God will give you rest." },
    { author: "Tiktok4", quote: "Absence make the heart grow fondue" },
    { author: "Tiktok5", quote: "Roses are red, violence is never the answer." },
    { author: "Tiktok6", quote: "Ngayong malaayaaa ka naaaa . magagawa mo naaaaa" }
];

button.addEventListener('click',function(){
    const randomNumber = Math.floor(Math.random()* quotesArray.length);
    const randomQuote = quotesArray[randomNumber];
    quoteBox.textContent = `"${randomQuote.quote}"`
    authorBox.textContent = `-${randomQuote.author}`;
});

gsap.to(".flower_a", {
    rotation: 360,
    duration: 2,
    repeat: -1,
    ease: "linear"
});

gsap.to(".flower_b", {
    rotation: 360,
    duration: 2,
    repeat: -1,
    ease: "linear"
});




});