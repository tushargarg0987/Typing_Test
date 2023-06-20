

var count = 0;
var Rcount = 0, Wcount = 0;
var total = 0;
var value = Math.floor(Math.random()*10);
var k = value*6 + 1;
var start = k;
var i = 60;
var option = 1;
var forScroll = 0;

document.getElementById("input-box").value = "";
document.getElementById("row1").scrollTo(0,0);
document.getElementById("row1").scrollBy(0,value*60);




document.getElementById(k-1).classList.toggle('highlight');

document.getElementById("input-container").onkeypress = function(event) {
    if (event.which == 32) {
        total++;
        document.getElementById(k).classList.toggle('highlight');
        var check = document.getElementById(k-1).innerText;
        var toCheck = document.getElementById("input-box").value;
        
        if(k==start){
            if(toCheck==check){
                document.getElementById(k-1).classList.toggle('correct');
                Rcount++;
            } else {
                document.getElementById(k-1).classList.toggle('wrong');
                Wcount++;
            }
        } else {
            if(toCheck== check){
                document.getElementById(k-1).classList.toggle('correct');
                Rcount++;
            } else {
                document.getElementById(k-1).classList.toggle('wrong');
                Wcount++;
            }
        }

        if(k!=0){
            document.getElementById(k-1).classList.remove('highlight');
        }
        k = k+1;
        count = count + 1;
        if(count==6){
            if(forScroll==0){
                document.getElementById("row1").scrollBy(0,60);
                count=0;
                forScroll=1;
            }
            else{
                document.getElementById("row1").scrollBy(0,60);
                count=0;
            }
        }
        document.getElementById("input-box").value = "";
    }
    else if(document.getElementById("input-box").value == " "){
        document.getElementById("input-box").value = ""
    }
}

document.getElementById("input-container").onkeyup = () => {
    if(document.getElementById("input-box").value == " "){
        document.getElementById("input-box").value = ""
    }
}


function onTimer() {
    document.getElementById('mycounter').innerHTML = i;
    i--;
    if (i < 0) {
        
        i=0;
        alert("It's Done ! ");
        if(option == 1){
            document.getElementById('WPM').innerText = String(total) + " WPM";
        }
        else if(option == 2){
            document.getElementById('WPM').innerText = String(Math.floor(total/2)) + " WPM";
        }
        document.getElementById('Rwords').innerText = Rcount;
        document.getElementById('Wwords').innerHTML = Wcount;
        document.getElementById("accuracy").innerHTML = String(Math.floor(Rcount*100/(Rcount + Wcount))) + " %";
    }
    else {
        setTimeout(onTimer, 1000);
    }
}



var flag = 0;
    const startTimer = () => {
        if(flag == 0){
            flag = 1;
            onTimer();
        }
    }


    function one_minute(){
        if(i<=0){
            alert("Please retake the test to switch option")
        }
        else if(i==120){
            document.getElementById("one_button").classList.add('active-button');
            document.getElementById("one_button").classList.remove('default-button');
            document.getElementById("two_button").classList.remove('active-button');
            document.getElementById("two_button").classList.add('default-button');
            clearTimeout(onTimer);
            flag = 0;
            i=60;
            document.getElementById('mycounter').innerHTML = i;
            option = 1;
        }
        else{
            alert("Please complete the test first or retake the test")
        }

    }

    function two_minute(){

        if(i<=0){
            alert("Please retake the test to switch option")
        }
        else if(i==60){
            document.getElementById("two_button").classList.add('active-button');
            document.getElementById("two_button").classList.remove('default-button');
            document.getElementById("one_button").classList.remove('active-button');
            document.getElementById("one_button").classList.add('default-button');
            clearTimeout(onTimer);
            flag = 0;
            i=120;
            document.getElementById('mycounter').innerHTML = i;
            option = 2;
        }
        else{
            alert("Please complete the test first or retake the test")
        }
        
    }


    const retake = () => {
        document.location.reload()
    }