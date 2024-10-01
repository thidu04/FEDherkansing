// JavaScript Document
console.log("hi");

var swiper = new Swiper("section", {
    navigation: {
        nextEl: "section button:nth-of-type(2)",
        prevEl: "section button:nth-of-type(1)",
    },
});