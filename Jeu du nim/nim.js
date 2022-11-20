var player = document.querySelectorAll("#player")
var allumette = document.querySelectorAll("#allumette")
var turn = document.querySelectorAll("#turn")
var reset = document.querySelectorAll("#reset")

function boom(target) {
        document.getElementById(target).style.display = 'none';
}

function showAll(target) {
        document.querySelector('.'+ target).style.display = 'block';
}



