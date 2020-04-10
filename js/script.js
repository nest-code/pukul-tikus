const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
// const mulai = document.querySelectorAll('.mulai');
const papanSkor = document.querySelector('.papan-skor');
// karena cuma satu tidak perlu pake All

const pop = document.querySelector('#pop');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah){ 
    // floor pembulatan keatas
    // ceil pembulatan kebawah
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya= tRandom;
        return tRandom;
}

function randomWaktu(min, max){
    return Math.round(Math.random() * (max -min) + min);

}


function munculkanTikus(tanah) {
    // console.log(tanah);
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(300,1000);
    tRandom.classList.add('muncul');

    // kebalikan
    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if(!selesai){
            munculkanTikus(tanah);
        }
    },wRandom);
}


function mulai(){

    selesai= false;
    skor = 0;
    papanSkor.textContent = 0;



    munculkanTikus(tanah);
    setTimeout(() => {
       selesai = true;
    },10000);
    // 10 detik
}

function pukul() {
    skor++;
    this.parentNode.classList.remove('muncul');
    pop.play();
    papanSkor.textContent = skor;


}

tikus.forEach(t=>{
    t.addEventListener('click', pukul);
});
