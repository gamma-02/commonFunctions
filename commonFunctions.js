
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
