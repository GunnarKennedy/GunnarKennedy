var area = document.querySelector("#area");
var target = document.querySelector(".target");
var accuracy = document.querySelector("#percent");
var body = document.querySelector("body");
var counter = 0;
var total = 0;
init();

function init() {
    target.addEventListener("click", function() {
        // Generate attributes
        var height = randNumber(800);
        var len = randNumber(area.offsetWidth);
        // Reset Attributes
        target.style.left =  "0px";
        target.style.top =  "0px";

        target.style.left = len + "px";
        target.style.top = height + "px";
        
        // update counter
        counter+=1;
        updateAccuracy();
        target.textContent = counter;

    });
    area.addEventListener("click", function() {
        total+=1;
        updateAccuracy();
    });
}
function updateAccuracy() {
    var percent = ((counter / total) * 100);
    accuracy.textContent = Math.floor(percent);
}

function randNumber(limit) {
    while(true) {
        var num = Math.floor(Math.random() * limit) - 50;
        if(num > 100) return num;
    }
}