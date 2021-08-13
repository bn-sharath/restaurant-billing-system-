
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