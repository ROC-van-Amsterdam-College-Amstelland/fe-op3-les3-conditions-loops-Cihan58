//javascript code
function check() {
    var saldo = document.getElementById("saldo").value;
 
    if (saldo==500) {
        document.getElementById("tekst").innerHTML = "Er is bonus geld gestort."
    } else {
        document.getElementById("tekst").innerHTML = "Sorry, er is geen geld gestort.";
    }
}