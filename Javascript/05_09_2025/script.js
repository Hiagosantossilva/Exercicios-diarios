const adicionar = document.getElementById('adicionar');
adicionar.addEventListener('click', function() {
    const new_card = document.getElementById('new_card').value;
    const res = document.getElementById('res');
    res.innerHTML += `<div id="card"> <p>${new_card}</p> </div>`;
})