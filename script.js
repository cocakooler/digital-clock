let area1 = document.getElementById("grid-1");
let area2 = document.getElementById("grid-2");
let area3 = document.getElementById("grid-3");
let area4 = document.getElementById("grid-4");
let area5 = document.getElementById("grid-5");
let area6 = document.getElementById("grid-6");
let alarmSet2 = document.getElementById("alarmSet1");
const music = document.querySelector("#music");


function setTime(){
var now = new Date();
var Hour = now.getHours();
var Min = now.getMinutes();
hourten = Math.floor(Hour/10) % 10
hourone = Math.floor(Hour/1) % 10
minten = Math.floor(Min/10) % 10
minone = Math.floor(Min/1) % 10

area1.innerHTML =creatGrid(1,hourten);
area2.innerHTML =creatGrid(1,hourone);
area3.innerHTML =creatGrid(1,10);
area4.innerHTML =creatGrid(1,minten);
area5.innerHTML =creatGrid(1,minone);
}
function alarm(){
    if(minten === alarmMinTen & minone === alarmMinOne & hourten === alarmHourTen & hourone === alarmHourOne){
        if (music.currentTime >= 15){
            music.pause();
            area6.innerHTML = 'アラームは終了しました';
           }else{
        music.play();
        area6.innerHTML ='今がその時!!';
           }
    }else{
        area6.innerHTML = '今はまだその時ではない';
        music.currentTime = 0;
    }
}
function clickbutton1(){
    var alarmHour1 = document.getElementById("number1").value;
    var alarmMin1 = document.getElementById("number2").value;
    const alarmHour = ('00' + alarmHour1).slice(-2);
    const alarmMin = ('00' + alarmMin1).slice(-2);

    area6.innerHTML = 'アラームの時間を'+alarmHour + '時' + alarmMin +'分に設定しました';
    alarmSet2.innerHTML = 'アラームの時間を'+alarmHour + '時' + alarmMin +'分に設定しました';  
    alarmHourTen = Math.floor(alarmHour/10) % 10
    alarmHourOne = Math.floor(alarmHour/1) % 10
    alarmMinTen = Math.floor(alarmMin/10) % 10
    alarmMinOne = Math.floor(alarmMin/1) % 10   
}
setInterval('setTime()',1000);
setInterval('alarm()',2000);


function creatGrid(iro,suzi){
        let row = "";
 if (iro === 0){
    iro = "■";
 }else if(iro === 1){
    iro = "　";
 }else{
    iro = "△";
 }
 if(suzi ===0){
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++) {
            if(j ===0 || j === 4 || i === 0 || i === 4){
            row = row + "■";
            }else{
            row = row +　iro;
            }
        }
        row = row + "<br>";
    }
    return  row;
}
 if(suzi ===1){
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5 -2; j++) {
            if(j ===0 && i === 0){
            row = row + "■";
            }else if(j === 1){
            row = row + "■";
            }else{
            row = row +　iro;
            }
        }
        row = row + "<br>";
    }
    return  row;
}
 if(suzi === 2){
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++) {
            if(i ===0 || i=== 2 || i==4){
                row = row + "■";
            }else{
                if(j ===4 && i === 1){
                    row = row + "■";
                }else if(j ===0 && i === 3){
                    row = row + "■";  
                }else{
                row = row +　iro;
                }
            } 
        }
        row = row + "<br>";
    }
    return  row;
 }
 if(suzi === 3){
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++) {
            if(i ===0 || i=== 2 || i==4){
                row = row + "■";
            }else if(j === 4 ){
                row = row + "■";
            }else{
            row = row +　iro;
            }
        }
        row = row + "<br>";
    }
    return  row;
 }
 if(suzi === 4){
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++) {
            if(i=== 2 || j === 4){
                row = row + "■";
            }else{
                if(j ===0){
                    if(i ===0 || i === 1){
                        row = row + "■";  
                    }else{
                        row = row +　iro;
                    }
                }else{
                    row = row +　iro;
                }
              
            } 
        }
        row = row + "<br>";
    }
    return  row;
 }
 if(suzi === 5){
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++) {
            if(i ===0 || i=== 2 || i==4){
                row = row + "■";
            }else{
                if(j ===0 && i === 1){
                    row = row + "■";
                }else if(j ===4 && i === 3){
                    row = row + "■";  
                }else{
                row = row +　iro;
                }
            } 
        }
        row = row + "<br>";
    }
    return  row;
 }
 if(suzi === 6){
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++) {
            if(i ===0 || i=== 2 || i==4){
                row = row + "■";
            }else{
                if( j=== 0){
                    row = row + "■";
                }else if(j ===4 && i === 3){
                    row = row + "■";  
                }else{
                row = row +　iro;
                }
            } 
        }
        row = row + "<br>";
    }
    return  row;
 }
 if(suzi ===7){
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++) {
            if(i === 0){
            row = row + "■";
            }else if(j === 4){
            row = row + "■";
            }else{
            row = row +　iro;
            }
        }
        row = row + "<br>";
    }
    return  row;
}
 if(suzi === 8){
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++) {
            if(i ===0 || i=== 2 || i==4){
                row = row + "■";
            }else if(j === 4 ||j === 0){
                row = row + "■";
            }else{
            row = row +　iro;
            }
        }
        row = row + "<br>";
    }
    return  row;
 }
 if(suzi === 9){
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++) {
            if(i ===0 || i=== 2 || i==4){
                row = row + "■";
            }else{
                if( j=== 4){
                    row = row + "■";
                }else if(j ===0 && i === 1){
                    row = row + "■";  
                }else{
                row = row +　iro;
                }
            } 
        }
        row = row + "<br>";
    }
    return  row;
 }
 if(suzi ===10){
    for (let i = 0; i < 5; i++){   
        if(i ===1 || i === 3 ){
            row = row + "■";
            }else{
            row = row +　iro;
            }
        row = row + "<br>";
    }
    return  row;
}
}