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

gsap.to(".left", {
    rotation: 360,
    duration: 1,
    repeat: -1,
    ease: "linear"
});

gsap.to(".right", {
    rotation: -360,
    duration: 3,
    repeat: -1,
    ease: "linear"
});

gsap.from(".quote-box", {
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "bounce.out"
});

gsap.from(".right", {
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "bounce.out"
});

gsap.from(".left", {
    y: -200,
    opacity: 0,
    duration: 1,
    ease: "bounce.out"
});

});