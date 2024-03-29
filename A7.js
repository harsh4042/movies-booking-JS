function Ticket() {
    var c = document.getElementById("Fname").value;
    var t = document.getElementById("time").value;
    var sp = document.getElementById("Sposition").value;
    var s1 = document.getElementById("seat").value;
    
    if (c === "") {
        alert("Enter valid customer name!!!");
    } else if (t === "Show Time") {
        alert("Choose valid Show Time!!!");
    } else if (sp === "Seat Position") {
        alert("Choose valid Seat Position!!!");
    } else if (s1 === "") {
        alert("Enter how many seats you have required!!!");
    } else {
        document.getElementById("demo").innerHTML = "***** Ticket of Customer *****";
        document.getElementById("c").innerHTML = "| *Customer Name:" + c;
        var book = new Date().toLocaleDateString();
        document.getElementById("b").innerHTML = "| *Booking Date:" + book;
        document.getElementById("t").innerHTML = "| *Show Time:" + t;
        document.getElementById("sp").innerHTML = "| *Seat Position:" + sp;
        document.getElementById("s").innerHTML = "| *Seat:" + s1;
        var price = "| *Price :" + s1 * 300;
        document.getElementById("p").innerHTML = price;
        document.getElementById("thank-you").innerHTML = "***** Thank you for visiting *****";
        document.getElementById("ticket-details").style.display = "block";
    }
}