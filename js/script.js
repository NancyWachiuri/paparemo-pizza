$(document).ready(function () {
  $("#order").submit(function (event) {

    event.preventDefault();

    function flavor() {
      var pizzaFlavour = document.getElementById("flavor").value;
      return parseInt(pizzaFlavour);
    }
    function size() {
      var pizzaSize = document.getElementById("size").value;
      return parseInt(pizzaSize);
    }
    function crust() {
      var pizzaCrust = document.getElementById("crust").value;
      return parseInt(pizzaCrust);
    }
    function topping() {
      var pizzaTopping = document.getElementById("topping").value;
      return parseInt(pizzaTopping);
    }
    function number() {
      var pizzaNumber = document.getElementById("quantity").value;
      return parseInt(pizzaNumber);
    }

var flavorName = $("#flavor option:selected").text()

var sizeName = $("#size option:selected").text()

var crustName = $("#crust option:selected").text()

var toppingName = $("#topping option:selected").text()

function Order(flavor, size, crust, topping, quantity) {
  this.newFlavor = flavor;
  this.newSize = size;
  this.newCrust = crust;
  this.newTopping = topping;
  this.newQuantity = quantity;
}

var userInput = new Order(flavor(), size(), crust(), topping(), number());

var totalCost =
  userInput.newSize +
  userInput.newCrust +
  userInput.newTopping +
  userInput.newFlavor *
  userInput.newQuantity;

if (confirm('Would you like your pizza to be delivered')) {
    prompt("enter your location");
    prompt("enter your phone number");
    alert("Your pizza will be delivered");
    alert("Order summary: " + number() + ", " + flavorName + ",  " + sizeName + ", " + toppingName + ", " + crustName + " and Ksh 200 Delivery fee");
    alert("Your charges for Pizza" + (totalCost + 200));
    } else {
      alert("Order summary: " + number() + ", " + flavorName + ",  " + sizeName + ", " + toppingName + ", " + crustName);
      alert("Your charges for Pizza" + totalCost);
    }
    document.getElementById("order").reset();
  });
});