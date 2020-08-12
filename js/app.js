let button = document.getElementById('btn');

button.addEventListener('click', function (){

    let words = document.getElementById('words').value;

    let length = words.length;

    let out = document.getElementById('count');

    out.innerHTML = length;
});