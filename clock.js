//checks values and adds zero in front numbers
function chcNum(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
//change background image depending on hour interval
function changeBack(i) {
    console.log("trenutni sat: ", i);
  if (i >= 8 && i <= 18) {
    document.body.style.backgroundImage = "url('day.jpg')";
    document.getElementById("h").innerHTML="Have a nice day!";
    
    
  } else {
    document.body.style.backgroundImage = "url('night.jpg')";
    document.getElementById("h").innerHTML="Good night!";
  }
}

function clock() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  m = chcNum(m);
  s = chcNum(s);

  changeBack(h);
  document.getElementById("clk").innerHTML = h + ":" + m + ":" + s;
  
  var t = setTimeout(clock, 1000); //calls function clock() after specified number of ms

}
