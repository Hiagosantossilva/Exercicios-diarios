const btn_enviar = window.document.getElementById('btn_enviar');
btn_enviar.addEventListener('click', calcular);

function calcular(){
    const num = window.document.getElementById('num').value;
    const dobrar = num*2;
    window.alert(`O dobro de ${num} é ${dobrar}`);
}w 