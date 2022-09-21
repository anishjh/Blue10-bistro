let menu; 


let totalPrice = parseFloat(0);

function getJSON(){
    fetch('https://b10bc-weu-httptriggeranish-fa.azurewebsites.net/api/HelloWorld', {method: "GET"})
        .then((response)=> response.json())
        .then((data)=>{
            menu=data;
            console.log(data);
            printMenu(menu);
            }
             )
        .catch((error)=>{console.log(error)});   
}

function printMenu(file){
    file.forEach(dish =>{
        let text = dish.Dish + " " + dish.Price;
        document.getElementById('output').innerHTML += "<input type='radio' value='"+dish.id+"' class='btn-check' name='food'id='" +dish.id+ "' >"
        document.getElementById('output').innerHTML += '<label class="btn btn-outline-primary" for="'+dish.id+'">'+text+'</label>'
    }) 
    document.getElementById('output').innerHTML += '<button id="btn.1" class="btn btn-success" type="button"onclick="myFunction()">Bestellen</button>' 
}


function myFunction(){
let dish = document.getElementsByName('food');

let choice = parseFloat(document.querySelector('input[name="food"]:checked').id);
let text = menu[choice].Dish + " - €" + menu[choice].Price;
totalPrice = totalPrice + menu[choice].Price;
let paragraph = document.createElement("p");
     let text1 = document.createTextNode(text);
    paragraph.appendChild(text1); // Zet de text in de paragraph
    let element = document.getElementById("bestelling")//Pak de target div
    element.appendChild(paragraph); // Voeg nieuwe paragraaf aan target div
    document.getElementById("btn.2").style.display = "inline-block";
}

function printTotalPrice(){
    let paragraph = document.createElement("h2");
    let text = document.createTextNode("€"+(Math.round(totalPrice * 100) / 100 ));
    paragraph.appendChild(text);
    let element = document.getElementById("totalPrice")
    element.appendChild(paragraph);
    document.getElementById("btn.2").style.display = "none";
    document.getElementById("btn.1").style.display = "none";
    document.getElementById("totaalBedrag").style.display = "inline-block";
    postData();

}

function  postData(){

    fetch("https://b10bc-weu-httptriggeranish-fa.azurewebsites.net/api/TableFunction", {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: `{
   "TotalPrice": ${totalPrice}

  }`,
});

}

