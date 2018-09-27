function binaryClock(){
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    let h32 = document.getElementById("h32");
    let h16 = document.getElementById("h16");
    let h8 = document.getElementById("h8");
    let h4 = document.getElementById("h4");
    let h2 = document.getElementById("h2");
    let h1 = document.getElementById("h1");

    let min32 = document.getElementById("min32");
    let min16 = document.getElementById("min16");
    let min8 = document.getElementById("min8");
    let min4 = document.getElementById("min4");
    let min2 = document.getElementById("min2");
    let min1 = document.getElementById("min1");

    let sec32 = document.getElementById("sec32");
    let sec16 = document.getElementById("sec16");
    let sec8 = document.getElementById("sec8");
    let sec4 = document.getElementById("sec4");
    let sec2 = document.getElementById("sec2");
    let sec1 = document.getElementById("sec1");
    
    let allseconds = document.querySelectorAll(".seconds div");
    let allminutes = document.querySelectorAll(".minutes div");
    let allhours = document.querySelectorAll(".hours div");

    switch(seconds){
        case 0:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            break;
        case 1:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            break;
       case 2:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec2.style.background = "black";
            break;
        case 3:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec2.style.background = "black";
            break;
        case 4:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec4.style.background = "black";
            break;
        case 5:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec4.style.background = "black";
            break;
        case 6:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec4.style.background = "black";
            sec2.style.background = "black";
            break;
        case 7:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec2.style.background = "black";
            sec4.style.background = "black";
            break;
        case 8:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec8.style.background = "black";
            break;
        case 9:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec8.style.background = "black";
            break;
        case 10:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec8.style.background = "black";
            sec2.style.background = "black";
            break;
        case 11:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec2.style.background = "black";
            sec8.style.background = "black";
            break;
        case 12:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec4.style.background = "black";
            sec8.style.background = "black";
            break;
        case 13:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec4.style.background = "black";
            sec8.style.background = "black";
            break;
        case 14:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec2.style.background = "black";
            sec4.style.background = "black";
            sec8.style.background = "black";
            break;
        case 15:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec2.style.background = "black";
            sec4.style.background = "black";
            sec8.style.background = "black";
            break;
        case 16:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec16.style.background = "black";
            break;
        case 17:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec16.style.background = "black";
            break;
        case 18:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec2.style.background = "black";
            sec16.style.background = "black";
            break;
        case 19:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec2.style.background = "black";
            sec16.style.background = "black";
            break;
        case 20:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec16.style.background = "black";
            sec4.style.background = "black";
            break;
        case 21:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec4.style.background = "black";
            sec16.style.background = "black";
            break;
        case 22:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec16.style.background = "black";
            sec2.style.background = "black";
            sec4.style.background = "black";
            break;
        case 23:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec16.style.background = "black";
            sec2.style.background = "black";
            sec4.style.background = "black";
            sec1.style.background = "black";
            break;
        case 24:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec16.style.background = "black";
            sec8.style.background = "black";
            break;
        case 25:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec16.style.background = "black";
            sec8.style.background = "black";
            break;
        case 26:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec2.style.background = "black";
            sec8.style.background = "black";
            sec16.style.background = "black";
            break;
        case 27:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec2.style.background = "black";
            sec8.style.background = "black";
            sec16.style.background = "black";
            break;
        case 28:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec16.style.background = "black";
            sec8.style.background = "black";
            sec4.style.background = "black";
            break;
        case 29:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec16.style.background = "black";
            sec8.style.background = "black";
            sec4.style.background = "black";
            break;
        case 30:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec2.style.background = "black";
            sec16.style.background = "black";
            sec8.style.background = "black";
            sec4.style.background = "black";
            break;
        case 31:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec2.style.background = "black";
            sec16.style.background = "black";
            sec8.style.background = "black";
            sec4.style.background = "black";
            break;
        case 32:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec32.style.background = "black";
            break;
        case 33:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec32.style.background = "black";
            break;
        case 34:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec2.style.background = "black";
            sec32.style.background = "black";
            break;
        case 35:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec2.style.background = "black";
            sec32.style.background = "black";
            break;
        case 36:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec4.style.background = "black";
            sec32.style.background = "black";
            break;
        case 37:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec4.style.background = "black";
            sec32.style.background = "black";
            break;
        case 38:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec2.style.background = "black";
            sec4.style.background = "black";
            sec32.style.background = "black";
            break;
        case 39:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec2.style.background = "black";
            sec4.style.background = "black";
            sec32.style.background = "black";
            break;
        case 40:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec32.style.background = "black";
            sec8.style.background = "black";
            break;
        case 41:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec32.style.background = "black";
            sec8.style.background = "black";
            break;
        case 42:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec2.style.background = "black";
            sec32.style.background = "black";
            sec8.style.background = "black";
            break;
        case 43:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec2.style.background = "black";
            sec32.style.background = "black";
            sec8.style.background = "black";
            break;
        case 44:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec4.style.background = "black";
            sec32.style.background = "black";
            sec8.style.background = "black";
            break;
        case 45:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec4.style.background = "black";
            sec32.style.background = "black";
            sec8.style.background = "black";
            break;
        case 46:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec2.style.background = "black";
            sec4.style.background = "black";
            sec32.style.background = "black";
            sec8.style.background = "black";
            break;
        case 47:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec2.style.background = "black";
            sec4.style.background = "black";
            sec32.style.background = "black";
            sec8.style.background = "black";
            break;
        case 48:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec16.style.background = "black";
            sec32.style.background = "black";
            break;
        case 49:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec16.style.background = "black";
            sec32.style.background = "black";
            break;
        case 50:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec2.style.background = "black";
            sec16.style.background = "black";
            sec32.style.background = "black";
            break;
        case 51:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec2.style.background = "black";
            sec16.style.background = "black";
            sec32.style.background = "black";
            break;
        case 52:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec4.style.background = "black";
            sec16.style.background = "black";
            sec32.style.background = "black";
            break;
        case 53:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec4.style.background = "black";
            sec16.style.background = "black";
            sec32.style.background = "black";
            break;
        case 54:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec2.style.background = "black";
            sec4.style.background = "black";
            sec16.style.background = "black";
            sec32.style.background = "black";
            break;
        case 55:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec2.style.background = "black";
            sec4.style.background = "black";
            sec16.style.background = "black";
            sec32.style.background = "black";
            break;
        case 56:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec16.style.background = "black";
            sec32.style.background = "black";
            sec8.style.background = "black";
            break;
        case 57:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec16.style.background = "black";
            sec32.style.background = "black";
            sec8.style.background = "black";
            break;
        case 58:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec2.style.background = "black";
            sec16.style.background = "black";
            sec32.style.background = "black";
            sec8.style.background = "black";
            break;
        case 59:
            for(i=0; i<allseconds.length; i++){
                allseconds[i].style.background="white";
            }
            sec1.style.background = "black";
            sec2.style.background = "black";
            sec16.style.background = "black";
            sec32.style.background = "black";
            sec8.style.background = "black";
            break;
    }
    switch(minutes){
        case 0:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            break;
        case 1:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            break;
       case 2:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min2.style.background = "black";
            break;
        case 3:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min2.style.background = "black";
            break;
        case 4:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min4.style.background = "black";
            break;
        case 5:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min4.style.background = "black";
            break;
        case 6:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min4.style.background = "black";
            min2.style.background = "black";
            break;
        case 7:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min2.style.background = "black";
            min4.style.background = "black";
            break;
        case 8:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min8.style.background = "black";
            break;
        case 9:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min8.style.background = "black";
            break;
        case 10:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min8.style.background = "black";
            min2.style.background = "black";
            break;
        case 11:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min2.style.background = "black";
            min8.style.background = "black";
            break;
        case 12:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min4.style.background = "black";
            min8.style.background = "black";
            break;
        case 13:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min4.style.background = "black";
            min8.style.background = "black";
            break;
        case 14:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min2.style.background = "black";
            min4.style.background = "black";
            min8.style.background = "black";
            break;
        case 15:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min2.style.background = "black";
            min4.style.background = "black";
            min8.style.background = "black";
            break;
        case 16:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min16.style.background = "black";
            break;
        case 17:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min16.style.background = "black";
            break;
        case 18:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min2.style.background = "black";
            min16.style.background = "black";
            break;
        case 19:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min2.style.background = "black";
            min16.style.background = "black";
            break;
        case 20:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min16.style.background = "black";
            min4.style.background = "black";
            break;
        case 21:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min4.style.background = "black";
            min16.style.background = "black";
            break;
        case 22:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min16.style.background = "black";
            min2.style.background = "black";
            min4.style.background = "black";
            break;
        case 23:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min16.style.background = "black";
            min2.style.background = "black";
            min4.style.background = "black";
            min1.style.background = "black";
            break;
        case 24:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min16.style.background = "black";
            min8.style.background = "black";
            break;
        case 25:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min16.style.background = "black";
            min8.style.background = "black";
            break;
        case 26:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min2.style.background = "black";
            min8.style.background = "black";
            min16.style.background = "black";
            break;
        case 27:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min2.style.background = "black";
            min8.style.background = "black";
            min16.style.background = "black";
            break;
        case 28:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min16.style.background = "black";
            min8.style.background = "black";
            min4.style.background = "black";
            break;
        case 29:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min16.style.background = "black";
            min8.style.background = "black";
            min4.style.background = "black";
            break;
        case 30:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min2.style.background = "black";
            min16.style.background = "black";
            min8.style.background = "black";
            min4.style.background = "black";
            break;
        case 31:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min2.style.background = "black";
            min16.style.background = "black";
            min8.style.background = "black";
            min4.style.background = "black";
            break;
        case 32:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min32.style.background = "black";
            break;
        case 33:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min32.style.background = "black";
            break;
        case 34:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min2.style.background = "black";
            min32.style.background = "black";
            break;
        case 35:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min2.style.background = "black";
            min32.style.background = "black";
            break;
        case 36:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min4.style.background = "black";
            min32.style.background = "black";
            break;
        case 37:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min4.style.background = "black";
            min32.style.background = "black";
            break;
        case 38:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min2.style.background = "black";
            min4.style.background = "black";
            min32.style.background = "black";
            break;
        case 39:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min2.style.background = "black";
            min4.style.background = "black";
            min32.style.background = "black";
            break;
        case 40:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min32.style.background = "black";
            min8.style.background = "black";
            break;
        case 41:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min32.style.background = "black";
            min8.style.background = "black";
            break;
        case 42:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min2.style.background = "black";
            min32.style.background = "black";
            min8.style.background = "black";
            break;
        case 43:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min2.style.background = "black";
            min32.style.background = "black";
            min8.style.background = "black";
            break;
        case 44:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min4.style.background = "black";
            min32.style.background = "black";
            min8.style.background = "black";
            break;
        case 45:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min4.style.background = "black";
            min32.style.background = "black";
            min8.style.background = "black";
            break;
        case 46:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min2.style.background = "black";
            min4.style.background = "black";
            min32.style.background = "black";
            min8.style.background = "black";
            break;
        case 47:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min2.style.background = "black";
            min4.style.background = "black";
            min32.style.background = "black";
            min8.style.background = "black";
            break;
        case 48:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min16.style.background = "black";
            min32.style.background = "black";
            break;
        case 49:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min16.style.background = "black";
            min32.style.background = "black";
            break;
        case 50:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min2.style.background = "black";
            min16.style.background = "black";
            min32.style.background = "black";
            break;
        case 51:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min2.style.background = "black";
            min16.style.background = "black";
            min32.style.background = "black";
            break;
        case 52:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min4.style.background = "black";
            min16.style.background = "black";
            min32.style.background = "black";
            break;
        case 53:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min4.style.background = "black";
            min16.style.background = "black";
            min32.style.background = "black";
            break;
        case 54:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min2.style.background = "black";
            min4.style.background = "black";
            min16.style.background = "black";
            min32.style.background = "black";
            break;
        case 55:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min2.style.background = "black";
            min4.style.background = "black";
            min16.style.background = "black";
            min32.style.background = "black";
            break;
        case 56:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min16.style.background = "black";
            min32.style.background = "black";
            min8.style.background = "black";
            break;
        case 57:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min16.style.background = "black";
            min32.style.background = "black";
            min8.style.background = "black";
            break;
        case 58:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min2.style.background = "black";
            min16.style.background = "black";
            min32.style.background = "black";
            min8.style.background = "black";
            break;
        case 59:
            for(i=0; i<allminutes.length; i++){
                allminutes[i].style.background="white";
            }
            min1.style.background = "black";
            min2.style.background = "black";
            min16.style.background = "black";
            min32.style.background = "black";
            min8.style.background = "black";
            break;
    }
    switch(hours){
        case 0:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            break;
        case 1:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h1.style.background = "black";
            break;
       case 2:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h2.style.background = "black";
            break;
        case 3:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h1.style.background = "black";
            h2.style.background = "black";
            break;
        case 4:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h4.style.background = "black";
            break;
        case 5:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h1.style.background = "black";
            h4.style.background = "black";
            break;
        case 6:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h4.style.background = "black";
            h2.style.background = "black";
            break;
        case 7:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h1.style.background = "black";
            h2.style.background = "black";
            h4.style.background = "black";
            break;
        case 8:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h8.style.background = "black";
            break;
        case 9:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h1.style.background = "black";
            h8.style.background = "black";
            break;
        case 10:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h8.style.background = "black";
            h2.style.background = "black";
            break;
        case 11:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h1.style.background = "black";
            h2.style.background = "black";
            h8.style.background = "black";
            break;
        case 12:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h4.style.background = "black";
            h8.style.background = "black";
            break;
        case 13:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h1.style.background = "black";
            h4.style.background = "black";
            h8.style.background = "black";
            break;
        case 14:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h2.style.background = "black";
            h4.style.background = "black";
            h8.style.background = "black";
            break;
        case 15:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h1.style.background = "black";
            h2.style.background = "black";
            h4.style.background = "black";
            h8.style.background = "black";
            break;
        case 16:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h16.style.background = "black";
            break;
        case 17:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h1.style.background = "black";
            h16.style.background = "black";
            break;
        case 18:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h2.style.background = "black";
            h16.style.background = "black";
            break;
        case 19:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h1.style.background = "black";
            h2.style.background = "black";
            h16.style.background = "black";
            break;
        case 20:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h16.style.background = "black";
            h4.style.background = "black";
            break;
        case 21:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h1.style.background = "black";
            h4.style.background = "black";
            h16.style.background = "black";
            break;
        case 22:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h16.style.background = "black";
            h2.style.background = "black";
            h4.style.background = "black";
            break;
        case 23:
            for(i=0; i<allhours.length; i++){
                allhours[i].style.background="white";
            }
            h16.style.background = "black";
            h2.style.background = "black";
            h4.style.background = "black";
            h1.style.background = "black";
            break;
    }
        
    

}
setInterval(binaryClock,1000);