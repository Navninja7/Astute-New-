// document.getElementById('horizontal').style.position ="fixed";
// document.getElementById('horizontal').style.width = "100vw";
// document.getElementById('horizontal').style.height = "1px";
// document.getElementById('horizontal').style.top = ""+window.innerHeight/2+"px";
// document.getElementById('horizontal').style.backgroundColor = "black";
// document.getElementById('vertical').style.position ="fixed";
// document.getElementById('vertical').style.left = ""+window.innerWidth/2+"px";
// document.getElementById('vertical').style.height = "100vh";
// document.getElementById('vertical').style.width = "1px";
// document.getElementById('vertical').style.backgroundColor = "black";

let ring = document.createElement('div');
let diameter = 20;
ring.style.zIndex="10";
ring.setAttribute('class','ring');
ring.style.position = "fixed";
ring.style.borderRadius="50%";
ring.style.height=""+diameter+"px";
ring.style.width=""+diameter+"px";
ring.style.border="8px solid orangered";
//ring.style.backgroundColor="red";
document.body.addEventListener('load',()=>{
    document.body.style.opacity=0;
    
});
document.body.addEventListener('click',(e)=>{
    console.log(e.clientX, e.clientY);
    ring.style.left = ""+((e.clientX)-diameter/2)+"px";
    ring.style.top = ""+((e.clientY)-diameter/2)+"px";
    document.body.append(ring);
    let radius = diameter;
    let opacity = 1;
    let interval = setInterval(() => {
        ring.style.height = ""+radius+"px";
        ring.style.width = ""+radius+"px";
        ring.style.left = ""+((e.clientX)-radius/2)+"px";
    ring.style.top = ""+((e.clientY)-radius/2)+"px";
        radius+=1;
        opacity = opacity - 0.05;
        ring.style.opacity= ""+opacity+"";
    }, 10);
    setTimeout(() => {
        
        ring.remove();
        clearInterval(interval);
    }, 200);
    
})
let navbar = document.getElementsByClassName("navbar");
let services = document.getElementById('services');
let dropdownServices = document.getElementById('dropdown-services');
let floatingMenu = document.getElementById('floating-menu');
let floatingItems = document.querySelectorAll('.floating-menu-list-item');
let noDisplay=true;

floatingItems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        console.log('click');
        let offset = document.getElementsByClassName('heading')[index].getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({
            top:offset,
            behavior:'smooth'
        });
    });
});
window.addEventListener('resize',()=>{
    if(window.innerWidth < 1280){
        document.getElementById('floating-menu').style.display="none";
        noDisplay=true;
    } else {
        document.getElementById("floating-menu").style.display="flex";
        noDisplay=false;
    }
})
window.addEventListener('scroll',()=>{
    if(!noDisplay){

    
    if(document.getElementsByClassName('heading')[0].getBoundingClientRect().top > window.innerHeight/2){
        document.getElementById('floating-menu').style.display="none";
        document.getElementById('floating-menu').style.transform = "translateX(5px)";
    } else {
        document.getElementById('floating-menu').style.display="flex";
        document.getElementById('floating-menu').style.transform = "translateX(-5px)";
    }
    
    if(document.getElementById('footer').getBoundingClientRect().bottom < window.innerHeight + 100){
        document.getElementById('floating-menu').style.display="none";
    }
    document.querySelectorAll('.heading').forEach((div,index)=>{
        if((div.getBoundingClientRect().top - 30) <= window.innerHeight/2 && document.getElementsByClassName('heading-text')[index].getBoundingClientRect().bottom >= window.innerHeight/2){
            document.getElementsByClassName('floating-menu-list-item')[index].style.backgroundColor="rgba(30,144,255,0.1)";
            document.getElementsByClassName('floating-menu-list-item')[index].style.fontWeight="500";
        } else {
            document.getElementsByClassName('floating-menu-list-item')[index].style.backgroundColor="transparent";
            document.getElementsByClassName('floating-menu-list-item')[index].style.fontWeight="normal";
            
        }
        
    });
}
    
});

for(let i=0;i<(floatingMenu.children[0].childElementCount);i++){
    console.log();
    
}



services.addEventListener('mouseenter',()=>{
    document.querySelectorAll('.nav-link').forEach((nav)=>{
        nav.style.color="#fff";
    });
    navbar[0].style.backgroundColor="orangered";
    dropdownServices.style.display="flex";
});

services.addEventListener('mouseleave',()=>{
    document.querySelectorAll('.nav-link').forEach((nav)=>{
        nav.style.color="#000";
    });
    navbar[0].style.backgroundColor="rgba(255,255,255,0.6)";
    dropdownServices.style.display="none";
dropdownServices.addEventListener('mouseenter',()=>{
    document.querySelectorAll('.nav-link').forEach((nav)=>{
        nav.style.color="#fff";
    });
    navbar[0].style.backgroundColor="orangered";
    dropdownServices.style.display="flex";
});
        
        dropdownServices.addEventListener('mouseleave',()=>{
            document.querySelectorAll('.nav-link').forEach((nav)=>{
                nav.style.color="#000";
            });
            navbar[0].style.backgroundColor="rgba(255,255,255,0.6)";
            dropdownServices.style.display="none";
    
        });

}); 


let neonColors = [
{
    color:"Neon Green",
    rgb:"rgb(57,255,20)"
},
{
    color:"Neon Pink",
    rgb:"rgb(255,0,252)"
},
{
    color:"Neon Blue",
    rgb:"rgb(0,179,255)"
},
{
    color:"Neon Yellow",
    rgb:"rgb(255,255,85)"
},
{
    color:"Neon Purple",
    rgb:"rgb(198,0,255)"
},
{
    color:"Neon Red",
    rgb:"rgb(255,0,0)"
},
{
    color:"Neon Cyan",
    rgb:"rgb(0,255,255)"
}]
function randomRange(a,b){
    let numbers = [];
    for(let i=a;i<=b;i++){
        numbers.push(i);
    }

    for(let i=numbers.length-1;i>=0;i--){
        let j = Math.floor(Math.random()*(i+1));
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
    }
    return numbers[0];
}
let ix=0;
let iy=0;
let _switch=0;
let randomLocationsX = [
    {
        a:window.innerWidth/2,
        b:window.innerWidth-200
    },
    {
        a:Math.min(200,window.innerWidth/8),
        b:Math.max(200,window.innerWidth/8)
    }
]
let randomLocationsY = [
    {
        a:window.innerHeight/2,
        b:window.innerHeight-200
    },
    {
        a:Math.min(200,window.innerHeight/8),
        b:Math.max(200,window.innerHeight/8)
    }
]
function moveCircle(id){
    let circle = document.getElementById(id);
    let speed = randomRange(80,300);
    let randomX = randomRange(-5,5);
    let randomY = randomRange(-5,5);
    let x=0,y=0;
    let interval = setInterval(() => {
        circle.style.transform = "translate("+x+"px,"+y+"px)";
        x+=randomX;
        y+=randomY;
    }, speed);
    setTimeout(() => {
        circle.style.opacity=0;
        
    }, 6500);
    setTimeout(()=>{
        circle.remove();
        clearInterval(interval);
    },7000);
}
setInterval(() => {
    let circle = document.createElement('div');
    circle.style.borderRadius ="50%";
    let randomSize = randomRange(40,200);
    circle.style.height=""+randomSize+"px";
    circle.style.width=""+randomSize+"px";
    let id = Date.now();
    circle.setAttribute('id',id);
    circle.style.backgroundColor=""+neonColors[Math.floor(Math.random()*neonColors.length)].rgb+"";
    circle.style.position="fixed";
    circle.style.zIndex="-2";
    circle.style.opacity="0";
    circle.style.animation="hueRotate 2s infinite";
    let randomOpacity = randomRange(0.1,0.2);
    circle.style.right=""+randomRange(randomLocationsX[ix].a,randomLocationsX[ix++].b)+"px";
    console.log(iy);
    circle.style.bottom=""+ randomRange(randomLocationsY[iy].a,randomLocationsY[iy++].b)+"px";
    ix = ix%2;
    if(_switch == 0){
        iy=iy%2;
    } else {
        iy = 1 - iy%2;
    }
    _switch = (_switch+1)%2;
    circle.style.transition="all 0.7s";
    document.body.append(circle);
    moveCircle(id);
    setTimeout(()=>{
        circle.style.opacity=randomOpacity;
    },200);
    
}, 1500);

