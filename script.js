function on(){
  document.getElementById("show").style.display="block";
  document.getElementById("ham").style.display="none";
}
function off(){
  document.getElementById("show").style.display="none";
  document.getElementById("ham").style.display="block";
}

var nav=document.querySelector('.social');

window.onscroll=()=>{
  var top=window.scrollY;
  if(top>=200){
    nav.classList.add('active');
  }
  else if(top<4){
    nav.classList.remove('active')
  }
}

// after click menu it will diappeare
istrue=false;
function done(){
  document.getElementById("show").style.display="none";
  document.getElementById("ham").style.display="block";
  var istrue=true;
}
if(istrue){
  istrue=false;
}