 transform="rotate(45,750,350)" 

/***********************************************************************************************/

elem1 = document.getElementById('rect1');
//dragstart unterbinden!!
elem1.addEventListener('dragstart', e => e.preventDefault(), false)
elem1.addEventListener('mousemove', move1, false);

/***********************************************************************************************/

var ns = "http://www.w3.org/2000/svg";

var svg = document.createElementNS(ns, 'svg');
document.body.appendChild(svg);

var g1 = document.createElementNS(ns, 'g');
svg.appendChild(g1);

var g2 = document.createElementNS(ns, 'g');
svg.appendChild(g2);

var rect_arr = [];
var len = 20;
for (var i = 0; i < len; i++) {
    var rect = document.createElementNS(ns, 'rect');
    rect.setAttribute('x', i);
    rect.setAttribute('y', i);
    rect.setAttribute('width', i * 2);
    rect.setAttribute('height', i * 3);
    g1.appendChild(rect);
    rect_arr.push(rect);
}

/***********************************************************************************************/

var svgNS = "http://www.w3.org/2000/svg";

var myCircle = document.createElementNS(svgNS, "circle");
myCircle.setAttributeNS(svgNS, "id", "mycircle");
myCircle.setAttributeNS(null, "cx", 100);
myCircle.setAttributeNS(null, "cy", 100);
myCircle.setAttributeNS(null, "r", 50);
myCircle.setAttributeNS(null, "fill", "black");
myCircle.setAttributeNS(null, "stroke", "none");

document.getElementById("svg").appendChild(myCircle);

/***********************************************************************************************/

rect.setAttribute('x', '500');
rect.setAttribute('y', '200');
rect.setAttribute('width', '500');
rect.setAttribute('height', '300');
rect.setAttribute('fill', 'red');
rect.setAttribute('stroke', '#000000');
rect.setAttribute('stroke-width', '4');
svg.appendChild(rect);

