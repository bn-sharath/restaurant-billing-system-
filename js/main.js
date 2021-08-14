let menu={
    dosa:40,
    idly:35,
    meal:60
};
function addDish()
{
    let dishes = document.getElementById("dishes")
    let plates = document.getElementById("plates")
    let price = document.getElementById("price")

    let dishInput=document.createElement("input");
    let plateInput=document.createElement("input");
    let priceInput=document.createElement("input");
    dishInput.type="text";
    plateInput.type="text";
    priceInput.type="text";

    dishInput.className="items";
    plateInput.className="items";
    priceInput.className="items";
    dishes.appendChild(dishInput);
    plates.appendChild(plateInput);
    price.appendChild(priceInput);

}
function total(){
    // let price = document.getElementById("price");
    let dishvalue = document.querySelectorAll("#dishes .items");
    let platevalue = document.querySelectorAll("#plates .items");
    let pricevalue = document.querySelectorAll("#price .items");
    console.log(dishvalue);
    console.log(platevalue);
    console.log(pricevalue);
    
    for (const hotelDish in menu) {
        console.log(hotelDish);
        console.log(menu[hotelDish]);
        
    }
}