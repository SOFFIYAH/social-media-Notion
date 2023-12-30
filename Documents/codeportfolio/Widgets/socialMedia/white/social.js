function chnge(id){


if(id=="tgii"){
    document.getElementById("tgii").style.padding="15px"
    document.getElementById("tgi").style.padding="8px"
    document.getElementById("tgiii").style.padding="8px"
    document.getElementById("tgiv").style.padding="8px"
    
    let btn=document.querySelectorAll("i");
 

   function blck(e){
    let btn=e.target
    btn.style.backgroundColor="#443F3C"
    btn.style.color="#FFF7EC"
}

function blk(e){
    let btn=e.target
    btn.style.backgroundColor="rgb(255, 255, 255, 0%)"
    btn.style.color="#443F3C"
}


btn.forEach(btn => {
    btn.addEventListener("mouseover",blck)
    
});

btn.forEach(btn => {
    btn.addEventListener("mouseout",blk)
    
});


}

 else if(id=="tgiii"){
    document.getElementById("tgiii").style.padding="15px"
    document.getElementById("tgii").style.padding="8px"
    document.getElementById("tgi").style.padding="8px"
    document.getElementById("tgiv").style.padding="8px"
    let btn=document.querySelectorAll("i");
 

   function blck(e){
    let btn=e.target
    btn.style.backgroundColor="#B0F3D4"
    btn.style.color="#FFF7EC"
}

function blk(e){
    let btn=e.target
    btn.style.backgroundColor="rgb(255, 255, 255, 0%)"
    btn.style.color="#443F3C"
}

btn.forEach(btn => {
    btn.addEventListener("mouseover",blck)
    
});

btn.forEach(btn => {
    btn.addEventListener("mouseout",blk)
    
});

}

else if(id=="tgiv"){
    document.getElementById("tgiii").style.padding="8px"
    document.getElementById("tgii").style.padding="8px"
    document.getElementById("tgi").style.padding="8px"
    document.getElementById("tgiv").style.padding="15px"
    let btn=document.querySelectorAll("i");
 

   function blck(e){
    let btn=e.target
    btn.style.backgroundColor="#FFE3B3"
    btn.style.color="#FFF7EC"
}

function blk(e){
    let btn=e.target
    btn.style.backgroundColor="rgb(255, 255, 255, 0%)"
    btn.style.color="#443F3C"
}

btn.forEach(btn => {
    btn.addEventListener("mouseover",blck)
    
});

btn.forEach(btn => {
    btn.addEventListener("mouseout",blk)
    
});

}

else if(id=="tgi"){
    document.getElementById("tgiii").style.padding="8px"
    document.getElementById("tgii").style.padding="8px"
    document.getElementById("tgi").style.padding="15px"
    document.getElementById("tgiv").style.padding="8px"
    let btn=document.querySelectorAll("i");
 

   function blck(e){
    let btn=e.target
    btn.style.backgroundColor="#35CEC9"
    btn.style.color="#FFF7EC"
}

function blk(e){
    let btn=e.target
    btn.style.backgroundColor="rgb(255, 255, 255, 0%)"
    btn.style.color="#443F3C"
}

btn.forEach(btn => {
    btn.addEventListener("mouseover",blck)
    
});

btn.forEach(btn => {
    btn.addEventListener("mouseout",blk)
    
});

}

}

function shp(id){
document.getElementById("rad").style.padding="8px"
document.getElementById("rid").style.padding="5px"
document.getElementById("fb").style.borderRadius="0px"
document.getElementById("inst").style.borderRadius="0px"
document.getElementById("yt").style.borderRadius="0px"
document.getElementById("tt").style.borderRadius="0px"
document.getElementById("txt").style.borderRadius="0px"
document.getElementById("twt").style.borderRadius="0px"
document.getElementById("pnt").style.borderRadius="0px"
document.getElementById("lik").style.borderRadius="0px"
document.getElementById("rdt").style.borderRadius="0px"
document.getElementById("eml").style.borderRadius="0px"




}


function sht(id){
document.getElementById("rid").style.padding="8px"
document.getElementById("rad").style.padding="5px"
document.getElementById("fb").style.borderRadius="100px"
document.getElementById("inst").style.borderRadius="100px"
document.getElementById("yt").style.borderRadius="100px"
document.getElementById("tt").style.borderRadius="100px"
document.getElementById("txt").style.borderRadius="100px"
document.getElementById("twt").style.borderRadius="100px"
document.getElementById("pnt").style.borderRadius="100px"
document.getElementById("lik").style.borderRadius="100px"
document.getElementById("rdt").style.borderRadius="100px"
document.getElementById("eml").style.borderRadius="100px"




}

function move(id){


	if(id=="fb"){
	console.log("test me")
	window.open("link here")
}


else if(id=="inst"){
	window.open("link here")
}

else if(id=="yt"){
	window.open("link here")
}

else if(id=="tt"){
	window.open("link here")
}

else if(id=="txt"){
	window.open("link here")
}

else if(id=="twt"){
	window.open("link here")
}

else if(id=="pnt"){
	window.open("link here")
}

else if(id=="lik"){
	window.open("link here")
}

else if(id=="rdt"){
	window.open("link here")
}

else if(id=="eml"){
	window.open("link here")
}



}

