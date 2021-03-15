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


//form validation

function validate(){
  const nameVal=document.getElementById('name').value.trim();
  const emailVal=document.getElementById('email').value.trim();
  const projectVal=document.getElementById('project').value.trim();
  const contactVal=document.getElementById('contact').value.trim();
  const textVal=document.getElementById('textval').value.trim();
  const value1=validateName(nameVal);
  const value2=validateEmail(emailVal);
  const value3=validateProject(projectVal);
  const value4=validateContact(contactVal);
  const value5=validateText(textVal);
  if(value1&&value2&&value3&&value4&&value5){
    document.getElementById('sub').style.background="green";
    document.getElementById('sub').style.color="white";
    document.getElementById('sub').value="Submit Now";
  }
}

const validateName=(nameVal)=>{
  if(nameVal===''){
    document.getElementById('name').style.border="3px solid red";
    document.getElementById('name').placeholder="Name must be long";
    return false;
  }
  else if(nameVal.length<3 || nameVal.length>30){
    document.getElementById('name').style.border="3px solid red";
    document.getElementById('name').placeholder="You may enter too sor or long name";
    return false;
  }
  else{
    document.getElementById('name').style.border="3px solid green";
    document.getElementById('sub').style.background="red";
    document.getElementById('sub').style.color="white";
    document.getElementById('sub').value="Somethig Fail....";
    return true;
    
  }
}
const validateEmail=(emailVal)=>{
const regex=new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')
if(regex.test(emailVal)){
  document.getElementById('email').style.border="3px solid green";
  console.log('ok')
  return true;
}
else{
  document.getElementById('email').style.border="3px solid red";
  return false;
}
}

const validateProject=(projectVal)=>{
  if(projectVal.length>15 && projectVal.length<50){
    document.getElementById('project').style.border="3px solid green";
    return true;
  }
  else{
    document.getElementById('project').style.border="3px solid red";
    return false;
  }
}
const validateContact=(contactVal)=>{
  if(contactVal.length===10){
    document.getElementById('contact').style.border="3px solid green";
    return true;
  }
  else{
    document.getElementById('contact').style.border="3px solid red";
    return false;
  }
}

const validateText=(textVal)=>{
if(textVal.length>30 && textVal.length<100){
  document.getElementById('textval').style.border="3px solid green";
    return true;
}
else{
  document.getElementById('textval').style.border="3px solid red";
    return false;
}
}
