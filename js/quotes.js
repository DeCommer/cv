
const generateQuote = function() {
    const quotes = [
    {
        quote: "If I have seen further than others, it is by standing upon the shoulders of giants.",
        attr: "Isaac Newton"
    },
    {
        quote: "There are in fact two things, science and opinion; the former begets knowledge, the latter ignorance",
        attr: "Hippocrates"
    },
    {
        quote: "An expert is a person who has made all the mistakes that can be made in a very narrow field",
        attr: "Neils Bohr"
    },
    {
        quote: "Science is the great antidote to the poison of enthusiasm and superstition.",
        attr: "Adam Smith"
    },
    {
        quote: "Be patient with both friends and enemies.",
        attr: "Lao Tzu"
    },
];

    let arrayIdx = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[arrayIdx].quote;
    document.getElementById("attr").innerHTML = ` - ${quotes[arrayIdx].attr}`;

}
window.onload = function() {
    generateQuote();

}