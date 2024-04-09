const btn=document.querySelector("#btn");
const input=document.querySelector("#input");
const form= document.querySelector("#form");



let input_value;

let bir_m=0;
let bes_m=0;
let on_m=0;
let yirmi_m=0;
let elli_m=0;
let yuz_m=0;
let ikiyuz_m=0;
let besyuz_m=0;

const main= document.querySelector("#main");
const div_besyuz=document.querySelector(".besyuz");
const div_ikiyuz=document.querySelector(".ikiyuz");
const div_yuz=document.querySelector(".yuz");
const div_elli=document.querySelector(".elli");
const div_yirmi=document.querySelector(".iyirmi");
const div_on=document.querySelector(".on");
const div_bes=document.querySelector(".bes");
const div_bir=document.querySelector(".bir");
const main_besyuz=document.querySelector(".main_besyuz");
const main_ikiyuz=document.querySelector(".main_ikiyuz")
const main_yuz=document.querySelector(".main_yuz")




form.addEventListener("click",(e)=>{
    e.preventDefault();

})
const clear=()=>{
     div_besyuz.innerHTML="";
     div_ikiyuz.innerHTML="";
     div_yuz.innerHTML="";
     div_elli.innerHTML="";
     div_yirmi.innerHTML="";
     div_on.innerHTML="";
     div_bes.innerHTML="";
     div_bir.innerHTML="";
}


btn.addEventListener("click",()=>{

clear();

input_value=input.value;
say_tap(input_value);
yoxla();
say();


for(let i=0;i<besyuz_m;i++){
    const img=document.createElement("img");
    img.src="images/500.jpg";
    img.style.left=`${i*5}%`;
    div_besyuz.append(img);
}

for(let i=0;i<ikiyuz_m;i++){
    const img=document.createElement("img");
    img.src="images/200.jpg";
    img.style.left=`${i*5}%`;
    div_ikiyuz.append(img);
}

for(let i=0;i<yuz_m;i++){
    const img=document.createElement("img");
    img.src="images/100.jpg";
    div_yuz.append(img);
}

for(let i=0;i<elli_m;i++){
    const img=document.createElement("img");
    img.src="images/50.jpg";
    div_elli.append(img);
}

for(let i=0;i<yirmi_m;i++){
    const img=document.createElement("img");
    img.src="images/20.jpg";
    img.style.left=`${i*5}%`;
    div_yirmi.append(img);
}


for(let i=0;i<on_m;i++){
    const img=document.createElement("img");
    img.src="images/10.jpg";
    div_on.append(img);
}

for(let i=0;i<bes_m;i++){
    const img=document.createElement("img");
    img.src="images/5.jpg";
    div_bes.append(img);
}

for(let i=0;i<bir_m;i++){
    const img=document.createElement("img");
    img.src="images/1.jpg";
    img.style.left=`${i*5}%`;
    div_bir .append(img);
}


})

const say=()=>{
    
let element=document.createElement("p");
element.textContent=`${besyuz_m}X`;
div_besyuz.append(element);

let element1=document.createElement("p");
element1.textContent=`${ikiyuz_m}X`;
div_ikiyuz.append(element1);

let element2=document.createElement("p");
element2.textContent=`${yuz_m}X`;
div_yuz.append(element2);


let element3=document.createElement("p");
element3.textContent=`${elli_m}X`;
div_elli.append(element3);

let element4=document.createElement("p");
element4.textContent=`${yirmi_m}X`;
div_yirmi.append(element4);

let element5=document.createElement("p");
element5.textContent=`${on_m}X`;
div_on.append(element5);

let element6=document.createElement("p");
element6.textContent=`${bes_m}X`;
div_bes.append(element6);


let element7=document.createElement("p");
element7.textContent=`${bir_m}X`;
div_bir.append(element7);

}

const yoxla=()=>{
    if(bes_m>0){
        div_bes.classList.remove("unvisible");
        console.log("a")
      
    }
    else{
        div_bes.classList.add("unvisible");
    }
    if(bir_m>0){
        div_bir.classList.remove("unvisible");
    }
    else{
        div_bir.classList.add("unvisible");
    }
    if(yirmi_m>0){
        div_yirmi.classList.remove("unvisible");
    }
    else{
        div_yirmi.classList.add("unvisible");
    }
    if(on_m>0){
        div_on.classList.remove("unvisible");
    }
    else{
        div_on.classList.add("unvisible");
    }
    if(elli_m>0){
        div_elli.classList.remove("unvisible");
    }
    else{
        div_elli.classList.add("unvisible");
    }
    if(yuz_m>0){
        div_yuz.classList.remove("unvisible");
    }
    else{
        div_yuz.classList.add("unvisible");   
    }
    if(ikiyuz_m>0){
        div_ikiyuz.classList.remove("unvisible");
    }
    else{
        div_ikiyuz.classList.add("unvisible");
    }
    if(besyuz_m>0){
        div_besyuz.classList.remove("unvisible");
    }
    else{
        div_besyuz.classList.add("unvisible");
    }
}


const say_tap=(a)=>{

    besyuz_m=Math.trunc((a/500));
    a=a%500;
    ikiyuz_m=Math.trunc((a/200));
    a=a%200;
    yuz_m=Math.trunc((a/100));
    a=a%100;
    elli_m=Math.trunc((a/50));
    a=a%50;
    yirmi_m=Math.trunc((a/20));
    a=a%20;
    on_m=Math.trunc((a/10));
    a=a%10;
    bes_m=Math.trunc((a/5));
    a=a%5;
    bir_m=Math.trunc((a/1));


    

}