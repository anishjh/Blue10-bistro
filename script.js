 fetch('./menu.json')
.then(res=> res.json())
.then(menu =>{

for (var dish of menu) 
{
  var text = dish.Dish + " " + dish.Price;
  document.getElementById('output').innerHTML += "<input type='radio' value='"+dish.id+"' class='btn-check' name='food'id='" +dish.id+ "' >"
  document.getElementById('output').innerHTML += '<label class="btn btn-outline-primary" for="'+dish.id+'">'+text+'</label>'
}
document.getElementById('output').innerHTML += '<button id="btn.1" class="btn btn-success" type="button"onclick="myFunction()">Bestellen</button>'
})

var totalPrice = parseFloat(0);




function myFunction(){
    fetch('./menu.json')
    .then(res=> res.json())
    .then(menu =>{

var choice = parseFloat(document.querySelector('input[name="food"]:checked').id);
var text = menu[choice].Dish + " - €" + menu[choice].Price;
totalPrice = totalPrice + menu[choice].Price;
var paragraph = document.createElement("p");
    var text = document.createTextNode(text);
    paragraph.appendChild(text); // Zet de text in de paragraph
    var element = document.getElementById("bestelling")//Pak de target div
    element.appendChild(paragraph); // Voeg nieuwe paragraaf aan target div
    document.getElementById("btn.2").style.display = "inline-block";
})
}

function printTotalPrice(){
    
    var paragraph = document.createElement("h2");
    var text = document.createTextNode("€"+(Math.round(totalPrice * 100) / 100 ));
    paragraph.appendChild(text);
    var element = document.getElementById("totalPrice")
    element.appendChild(paragraph);
    document.getElementById("btn.2").style.display = "none";
    document.getElementById("btn.1").style.display = "none";

}