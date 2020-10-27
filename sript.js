
let photo = 0;

function changePhoto(){
    if(photo === 0){
        document.getElementById('myPhoto').setAttribute("src", "img/h-llHznXhnk.jpg");
        photo = 1;
    }else{
        document.getElementById('myPhoto').setAttribute("src", "img/Pr-GruoWDTk.jpg");
        photo = 0;
    }
}