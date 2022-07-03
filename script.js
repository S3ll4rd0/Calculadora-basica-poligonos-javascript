do {
    var figure = prompt("Enter the type of polygon.\nYou can try with:\n    1.- Triangle.\n    2.- Square.\n    3.- Pentagon.\n    4.- Hexagon.\n" + 
                        "    5.- Exit (to close the program)\n\nRemember, write it like in the example.");
    if (figure == "Exit") { break; }
    var side = parseInt(prompt("Enter the length of the side, only the number, in centimeters."));
    if (figure == "Triangle") { alert("The area of " + figure + " is: " + round(calculateTriangle(side))+ " cm^2."); }
    if (figure == "Square") { alert("The area of " + figure + " is: " + round(calculateSquare(side))+ " cm^2."); }
    if (figure == "Pentagon") { alert("The area of the " + figure + " is: " + round(calculatePentagon(side))+ " cm^2."); }
    if (figure == "Hexagon") { alert("The area of the " + figure + " is: " + round(calculateHexagon(side))+ " cm^2."); }
} while (figure != "Exit");

function calculateTriangle(side) {
    return ((side /2) * ((side * Math.sqrt(3)) /2));
}

function calculateSquare(side) {
    return (side * side);
}

function calculatePentagon(side) {
    return (1.3764 * 5 * (side /2) * (side /2));
}

function calculateHexagon(side) {
    return (6 * (side /2) * ((side * Math.sqrt(3)) /2));
}

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}