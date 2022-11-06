


var countDownDate = new Date("nov 8, 2022 24:00:00").getTime();//Deal end Date

var x = setInterval(function() {
    var now = new Date().getTime();
      
    var distance = countDownDate - now;
 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);



function deleteRow(row,index){
    console.log(row);
    var d = row.parentNode.parentNode.parentNode.parentNode.rowIndex;
    if(index == 'a'){
        document.getElementById('b1').innerText = parseInt(document.getElementById('b1').innerText) - parseInt(document.getElementById('a').innerText);
        document.getElementById('b2').innerText = parseInt(document.getElementById('b1').innerText) / 10;
        document.getElementById('b3').innerText = parseInt(document.getElementById('b2').innerText) + parseInt(document.getElementById('b1').innerText) 

        document.getElementById('a').innerText = 0;
    }
    else if(index == 'b'){
        document.getElementById('b1').innerText = parseInt(document.getElementById('b1').innerText) - parseInt(document.getElementById('b').innerText);
        document.getElementById('b2').innerText = parseInt(document.getElementById('b1').innerText) / 10;
        document.getElementById('b3').innerText = parseInt(document.getElementById('b2').innerText) + parseInt(document.getElementById('b1').innerText)   
        
        document.getElementById('b').innerText = 0;
    }
    else{
        document.getElementById('b1').innerText = parseInt(document.getElementById('b1').innerText) - parseInt(document.getElementById('c').innerText);
        document.getElementById('b2').innerText = parseInt(document.getElementById('b1').innerText) / 10;
        document.getElementById('b3').innerText = parseInt(document.getElementById('b2').innerText) + parseInt(document.getElementById('b1').innerText)
        
        document.getElementById('c').innerText = 0;
    }
    document.getElementById('dsTable').deleteRow(d);

    // bill();
}


//JQUERY
function calc(col,id) {

    let value = $(col).val();
    if(value < 0 ) value = 0;
    // console.log($("#"+id).html());
    let tr = $("#"+id);
    if(id == 'a'){
        tr.html(value*299);
    }
    else if (id == 'b') {
        tr.html(value*40);
    }
    else{
        tr.html(value*99);
    }
    bill();
}

function bill() {
    let sub = $('#b1');
    let tax = $('#b2');
    let total = $('#b3');
    let first = parseInt($('#a').text());
    let second = parseInt($('#b').text());
    let third = parseInt($('#c').text());
    
    // console.log(first);
    let sum = first+second+third;
    sub.text(sum);
    tax.text(sum/10);
    total.text(sum + (sum/10));
    
}

//JAVASCRIPT
// function calc(col,id) {

//     let value = col.value;
//     if(value < 0 ) value = 0;

//     let tr = document.getElementById(id);
//     if(id == 'a'){
//         tr.innerHTML =  value*299;
//     }
//     else if (id == 'b') {
//         tr.innerHTML =  value*40;
//     }
//     else{
//         tr.innerHTML =  value*99;
//     }
//     bill();
// }

// function bill() {
//     let sub = document.getElementById('b1');
//     let tax = document.getElementById('b2');
//     let total = document.getElementById('b3');
//     let first = parseInt(document.getElementById('a').innerText);
//     let second = parseInt(document.getElementById('b').innerText);
//     let third = parseInt(document.getElementById('c').innerText);
    
//     let sum = first+second+third;
//     sub.innerHTML =  sum;
//     tax.innerHTML =  sum/10;
//     total.innerHTML =  (sum + (sum/10));

// }