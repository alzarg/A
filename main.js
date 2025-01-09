let elkalamah=document.getElementById('elkalamah');
let hazef=document.getElementById('hazef');
let hazefan=document.getElementById("hazefan");
let hazefOl=document.getElementById("hazef-ol");
let thbat=document.getElementById('thbat');
let thabatan=document.getElementById("thabatan");
let thabatOl=document.getElementById("thabat-ol");
let ayat=document.getElementById("aya");
let ta7at= document.getElementById("ta7at");
let gatk= 'جاتك';
let i= 1;
const newWordColor= '#fff';

hazef.addEventListener('click', ()=>{
    mo7zofah();
});

hazefan.addEventListener('click', ()=>{
    mo7zofan();
});

hazefOl.addEventListener('click', ()=>{
    mo7zofOl();
});

thbat.addEventListener('click', ()=>{
    thbatah();
});

thabatan.addEventListener('click', ()=>{
    thbatan();
});

thabatOl.addEventListener('click', ()=>{
    thbatOl();
});

addEventListener("click", ()=>{
    jatk();
    aya();
});

function jatk() {
    if (elkalamah.innerHTML === gatk) {
        ta7at.innerHTML= i++;  
    }
    if (i == 4) {
        elkalamah.innerHTML = "ثلثت";
        setTimeout(() => {
            i =  0;
        }, 2000); 
    }
}

function aya() {
    ayat.style.display = "none";
    if (elkalamah.innerHTML === "العالمين") {
        ayat.style.display = "block";
    } else {
        ayat.style.display = "none";
    }
    if(elkalamah.innerHTML === "اياك") {
        
    }
}