$(document).ready(function() {
    $("#order").submit(function(event) {
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
  
      function Order(flavor, size, crust, topping, quantity) {
        this.newFlavor = flavor;
        this.newSize = size;
        this.newCrust = crust;
        this.newTopping = topping;
        this.newQuantity = quantity;
      }
  
      var userInput = new Order(flavor(), size(), crust(), topping(), number());
    
      var totalCost =
        (userInput.newSize +
          userInput.newCrust +
          userInput.newTopping +
          userInput.newFlavor) *
        userInput.newQuantity;
  
      alert("Your charges for Pizza" + totalCost);
      prompt("enter your email address");
      prompt("enter your phone number");
      prompt("enter your location");
      alert("Your pizza will be delivered");
  
      $("#order").reset();
  
      event.preventDefault();
    });
  });