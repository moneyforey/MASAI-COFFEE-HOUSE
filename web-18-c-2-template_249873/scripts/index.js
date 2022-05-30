// Add the coffee to local storage with key "coffee"

let container = document.getElementById("menu");

async function getData(){
    let url = "https://masai-mock-api.herokuapp.com/coffee/menu";

    let res = await fetch(url);

    let coffees = await res.json();
    console.log(coffees.menu.data);
    append(coffees.menu.data);
}
getData();

function append(data){

    data.forEach(e => {
        let div = document.createElement('div');

        let image =  document.createElement('img');
        image.src = e.image;

        let title = document.createElement('p');
        title.innerText = e.title;

        let price = document.createElement('p');
        price.innerText = e.price;

        let btn = document.createElement('button');
        btn.innerText = "Add to bucket";
        btn.setAttribute("id", "add_to_bucket");
        btn.addEventListener("click", function(){
            addtoBucket(e);
            location.reload();
        });
        
        div.append(image,title,price,btn);
        container.append(div);

    });

}

let coffee = JSON.parse(localStorage.getItem("coffee")) || [];
function addtoBucket(e){
    // console.log(e);
   
    coffee.push(e);
    console.log(coffee);

    localStorage.setItem("coffee", JSON.stringify(coffee));
    

}


function counter1(){
    let counter = document.getElementById('coffee_count')
    counter.innerText = coffee.length;
}

counter1();



