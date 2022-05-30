// On clicking remove button the item should be removed from DOM as well as localstorage.

let coffee = JSON.parse(localStorage.getItem("coffee")) || [];
let container = document.getElementById('bucket');
 
coffee.forEach(function(e,i) {
    let div = document.createElement('div');

    let image =  document.createElement('img');
    image.src = e.image;

    let title = document.createElement('p');
    title.innerText = e.title;

    let price = document.createElement('p');
    price.innerText = e.price;

    let btn = document.createElement('button');
    btn.innerText = "Remove";
    btn.setAttribute("id", "remove_coffee");
    btn.addEventListener("click", function(){
        remove(e,i);
        location.reload();
    });
    
    div.append(image,title,price,btn);
    container.append(div);

});


function remove(e,i){

    coffee.splice(i,1);

    localStorage.setItem("coffee", JSON.stringify(coffee));
}

let Amount = document.getElementById("total_amount");
let Total = 0;
function totalAmount(){
    let coffee = JSON.parse(localStorage.getItem("coffee")) || [];
    for(i=0;i<coffee.length;i++){
        Total += coffee[i].price;
    }
    console.log(Total);
    Amount.append(Total);
}
totalAmount();

function checkountfn(){
    window.location.href = "checkout.html";
}