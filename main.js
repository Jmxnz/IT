const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const para = document.querySelector('#para');

yesBtn.addEventListener("click", function() {
    window.location.href = "yes.html";
})

noBtn.addEventListener("mouseover", function() {
    let top = Math.floor(Math.random() * 100);
    let left = Math.floor(Math.random() * 100);

    noBtn.style.position = "absolute";
    noBtn.style.top = `${top}%`;
    noBtn.style.left = `${top}%`;
})

// yes
function supBtn() {
    document.getElementById("para").innerHTML = "Aral Mabuti, wag gagawing biro ang BSIT Course!";
}