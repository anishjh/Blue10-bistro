let menu = [
    {"id":0,"Dish":"Smoked Salmon","Price":6.25},
    {"id":1,"Dish":"Carrot Soup","Price":3.55},
    {"id":2,"Dish":"Chicken Balerno","Price":9.35},
    {"id":3,"Dish":"Roast Beef","Price":10.00},
    {"id":4,"Dish":"Pizza Americana","Price":10.20},
    {"id":5,"Dish":"Chocolate gateau","Price":4.00},
    {"id":6,"Dish":"Chocolate Cake","Price":4.50},
    {"id":7,"Dish":"Coffee and Mints","Price":2.50},
    {"id":8,"Dish":"Margarita lemon","Price":7},
    {"id":9,"Dish":"Cosmopolitan","Price":7.99},
    {"id":10,"Dish":"Moscow Mule","Price":3.99}
]  

var totalPrice = parseFloat(0);

menu.forEach(menuItem => {
    console.log("Ik heb een ding gedaan")
    var paragraph = document.createElement("p");
    var text = document.createTextNode(menuItem.Dish);
    paragraph.appendChild(text); // Zet de text in de paragraph
    var element = document.getElementById("bestelling")//Pak de target div
    element.appendChild(paragraph); //
});
var paragraaf;

function doEenDing() {
    console.log("Ik heb een ding gedaan")
    var paragraph = document.createElement("p");
    var text = document.createTextNode("En hier laat ik wat achter");
    paragraph.appendChild(text); // Zet de text in de paragraph
    var element = document.getElementById("bestelling")//Pak de target div
    element.appendChild(paragraph); // Voeg nieuwe paragraaf aan target div
}

function myFunction(){
var dish = document.getElementsByName('food')

var choice = parseFloat(document.querySelector('input[name="food"]:checked').value);
var text = menu[choice].Dish;
totalPrice = totalPrice + menu[choice].Price;
var paragraph = document.createElement("p");
    var text = document.createTextNode(text);
    paragraph.appendChild(text); // Zet de text in de paragraph
    var element = document.getElementById("bestelling")//Pak de target div
    element.appendChild(paragraph); // Voeg nieuwe paragraaf aan target div
}

function printTotalPrice(){
    var paragraph = document.createElement("p");
    var text = document.createTextNode(totalPrice);
    paragraph.appendChild(text);
    var element = document.getElementById("totalPrice")
    element.appendChild(paragraph);
}