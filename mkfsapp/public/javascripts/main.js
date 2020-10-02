document.getElementById('mySwitch').addEventListener('click',function() {
    let btnA = document.getElementById('btnA');
    let btnB = document.getElementById('btnB');
    if (btnA.classList.contains('switcher')) {
        document.getElementById('btnA').classList.remove('opacity-50','cursor-not-allowed')
        document.getElementById('btnB').classList.add('opacity-50','cursor-not-allowed')
    } else if (btnB.classList.contains('switcher')) {
        document.getElementById('btnB').classList.remove('opacity-50','cursor-not-allowed')
        document.getElementById('btnA').classList.add('opacity-50','cursor-not-allowed')
    }
})
const A = 12345
console.log(A)