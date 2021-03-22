window.onLoad = (event) => {
  console.log("Thank you for using Common Functions, made by gamma_02.");
  console.log('now enjoy this doge');
  console.log("                   ▄              ▄");
  console.log("                  ▌▒█           ▄▀▒▌");
  console.log("                  ▌▒▒█        ▄▀▒▒▒▐");
  console.log("                 ▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐");
  console.log("               ▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐");
  console.log("             ▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌");
  console.log("            ▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌");
  console.log("            ▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐");
  console.log("           ▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌");
  console.log("           ▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌");
  console.log("          ▌▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐");
  console.log("          ▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌");
  console.log("          ▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐");
  console.log("           ▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌");
  console.log("           ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐");
  console.log("            ▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌");
  console.log("              ▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀");
  console.log("                ▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀");
  console.log("                   ▒▒▒▒▒▒▒▒▒▒▀▀");
  console.log("-gamma_02 :)");
});


function removeClass(element, clss) {
  let alpha;
  let array = Object.prototype.toString.b;
  let a = element;
  let b = clss;
  if (array == "[object Array]"){
    for (alpha = 0; alpha <b.length; alpha++) {
      a.classList.remove(b[alpha]);
    }
  }else{
    a.classList.remove(b);
  }
  console.log("removed");
}

function removeCss(element, styl){
  let alpha;
  let array = Object.prototype.toString.b;
  let a = element;
  let b = styl;
  if (array == "[object Array]"){
    for (alpha = 0; alpha <b.length; alpha++) {
      a.style.removeStyle(b[alpha]);
    }
  }else{
    a.style.removeStyle(b);
  }
  console.log("removed");
}

function show(element){
  let a = element;
  let alpha;
  let array = Object.prototype.toString.a;
  if (array == "[object Array]"){
    for (alpha = 0; alpha <a.length; alpha++){
      a[alpha].style.display="block";
    }
  }else{
    a.style.display="block";
  }
  console.log("shown");
}
function hide(element){
  let a = element;
  let alpha;
  let array = Object.prototype.toString.a;
  if (array == "[object Array]"){
    for (alpha = 0; alpha <a.length; alpha++){
      a[alpha].style.display="none";
    }
  }else{
    a.style.display="none";
  }
  console.log("hidden");
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}//I hate javascript sometimes. why cant there be a sleep function. why.
function moneyClickTest(amount, element) {
    let i;
    let b=element;
    for (i=0; i < amount; i++){
        b.click();
        sleep(1);
    }
}//but some things are cool, like the .click(); function.
