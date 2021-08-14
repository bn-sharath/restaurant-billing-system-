let menu = {
    'masala dosa': 40,
    'palin dosa': 35,
    'single butter dosa': 30,
    'butter dosa': 60,
    'idli vada': 40,
    'vada': 15,
    'idli': 25,
    'tea': 10,
    'coffee': 10,
    'milk': 5,
    'roti meal': 60,
    'rice sambar': 30
};
let additem = document.getElementById("additem");
let total = document.getElementById("total");
let dishprice = 0;
let noPlate = 1;
let totalBill = 0;


let dishvalue = document.querySelectorAll("#dishes .items");
let platevalue = document.querySelectorAll("#plates .items");
let pricevalue = document.querySelectorAll("#price .items");

function addDish() {
    let dishes = document.getElementById("dishes")
    let plates = document.getElementById("plates")
    let price = document.getElementById("price")

    let dishInput = document.createElement("input");
    let plateInput = document.createElement("input");
    let priceInput = document.createElement("input");
    dishInput.type = "text";
    plateInput.type = "number";
    priceInput.type = "number";

    dishInput.className = "items";
    plateInput.className = "items";
    priceInput.className = "items";

    dishInput.onkeyup = function (event) {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.code);
        if (event.code == "Enter" || event.code == "NumpadEnter") {
            for (let key in menu) {
                if (key == (dishInput.value.toLowerCase())) {
                    // console.log(key);
                    dishprice = menu[key];
                    plateInput.focus();


                }

            }
            // if(key!=(dishInput.value.toLowerCase())){

            //     dishInput.focus();
            //     dishInput.value="";
            //     dishInput.placeholder="dish is not present, enter again";
            // }
        }
        // if(eve)
    };
    plateInput.onkeyup = function (event) {
        if (event.code == "Enter" || event.code == "NumpadEnter") {
            noPlate = plateInput.value;
            totalBill = totalBill + (dishprice * noPlate);
            priceInput.value = dishprice * noPlate;
            priceInput.focus();
        }
    };

    priceInput.onkeyup = function (event) {
        if (event.code == "Enter" || event.code == "NumpadEnter" ) {
            
            // console.log("working");
            addDish();
        }
    }




    dishes.appendChild(dishInput);
    plates.appendChild(plateInput);
    price.appendChild(priceInput);
    dishInput.focus();

}

function totalPrice() {
let str = "₹" + totalBill + " rupees only/-";//for ₹ this symbal use (ctr + alt + 4)
    document.getElementById("result").innerHTML = str;


    // let price = document.getElementById("price");
    // console.log(dishvalue);
    // console.log(platevalue);
    // console.log(pricevalue);

    // for (const hotelDish in menu) {
    //     console.log(hotelDish);
    //     console.log(menu[hotelDish]);

    // }
}
additem.addEventListener("click", addDish);
total.addEventListener("click", totalPrice);

for (let i = 0; i < dishvalue.length; i++) {

    dishvalue[i].addEventListener("keyup", (event) => {
        console.log(event);
        console.log(dishvalue);
        console.log(platevalue);

        if (event.keycode === 13) {
            platevalue[i].focus();
        }
    });
}