
    for(i=0; i<150; i++){
        let x = Math.random();
        if(x<0.5){
            document.getElementById("container").innerHTML += "<div style='background: white;'class='block'></div>";
        }else{
            document.getElementById("container").innerHTML += "<div style='background: black;'class='block'></div>";
        }
    }
    var left = document.getElementById("container");
    var wrapper = document.getElementById("wrapper");
    var spiegel = left.cloneNode(true);
    wrapper.appendChild(spiegel);
    