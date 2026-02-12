
const intro = document.getElementById("intro");
const sections = document.querySelectorAll(".hidden");
const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("musicToggle");

setTimeout(()=>{
    intro.style.opacity="0";
    setTimeout(()=>{
        intro.style.display="none";
        sections.forEach(sec=>sec.style.opacity="1");
        music.play();
    },2000);
},6500);

toggleBtn.addEventListener("click",()=>{
    if(music.paused){
        music.play();
        toggleBtn.textContent="🔊 Música";
    }else{
        music.pause();
        toggleBtn.textContent="🔇 Mudo";
    }
});

const text=`
e mais um ano seu!!!! e mais um ano da gente junto. Eu sempre falei nos textos anteriores e repito: isso é encontro de almas! e isso, pra mim, é o que mais importa.

a gente já passou por tanta coisa, TANTA coisa mesmo… fase boa, fase ruim, briga de pirraça, vácuo, risada de doer o bucho, e mesmo assim a gente continua aqui, sempre volta pro mesmo lugar: pro mesmo restaurante. É o nosso restaurante pq mesmo em momentos difíceis a gente nunca deixou um ou o outro para trás.

eu não sei explicar o que a gente tem sem parecer um exagero, então eu nem vou tentar. é só…algo diferente das outras amizades (chupa currente). As vezes é leve, as vezes é só natural. E a gente consegue fazer isso com facilidade. Você é a minha segurança!!. eu posso ser insuportável, chata, TUDO e vc continua ali, não importa se é xingando ou só suportando, vc continua.

E esse dia não poderia ser mais feliz, eu te amo tanto que dói a alma!!! Desde 2018 vc é a minha pessoa favorita e uma das mais importantes da minha vida. Todos esses anos que se passam, essa coisa só se fortalece.

Ontem tava vendo algumas fotos suas de quando criança. Como você cresceu! Eu te amo muito sua puta. Obrigada por sempre estar aqui, feliz aniversário ❤️
`;

let i=0;
const speed=35;
const typedText=document.getElementById("typedText");

function typeWriter(){
    if(i<text.length){
        typedText.innerHTML+=text.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}

window.addEventListener("load",()=>{
    setTimeout(typeWriter,7000);
});
