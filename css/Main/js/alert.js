$(function() {
<<<<<<< HEAD
  for (i = 0; i < 5; i++) {
    var alert = document.createElement("DIV")
    var attr = document.createAttribute("class")
    var text = document.createTextNode("Fake notifications")
=======
  var balerts = document.getElementById("alert_area");


  for (i = 0; i < 5; i++) {
    var alert = document.createElement("DIV")
    var attr = document.createAttribute("class")
    var text = document.createTextNode("This works!")
>>>>>>> 1d7a6d157fc7f4c8ee671a327cecac56d5322e3b

    attr.value = "alert alert-success"

    alert.setAttributeNode(attr)
    alert.appendChild(text);

    balerts.appendChild(alert);
  }
});
