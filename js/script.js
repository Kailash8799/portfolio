/*============== typed animation ==============*/

var typed = new Typed(".typing",{
    strings:["","web designer","Programmer"],
    typeSpeed:150,
    BackSpeed:100,
    loop:true
})
function opennav(){
    document.getElementById('sidebar').style.left='0px';
    
}
function closenav(){
    document.getElementById('sidebar').style.left='-270px';
    
}

window.addEventListener("scroll",() => {
    if(screen.width<1199){
        document.getElementById('sidebar').style.left='-270px';

    }
})