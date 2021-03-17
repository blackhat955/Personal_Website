
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
let btn=document.getElementById('sub');
btn.addEventListener('click',()=>{
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
  var tempParams={
    from_name:nameVal,
    email_id:emailVal,
    contact:contactVal,
    project:projectVal,
    message:textVal
  }
  const val=sendMail(tempParams);
  if (val){
    // window.setTimeout(()=>{
      let input=document.querySelectorAll('input');
      let text=document.getElementById('textval');
      input.forEach(input=>input.value='');
      text.value=''
    // },6000);
  }

 }//this
 else{
  let input=document.querySelectorAll('input');
  let text=document.getElementById('textval');
  input.forEach(input=>input.value='');
  text.value=''
  Swal.fire({
    icon: 'error',
    title: 'Validation Failed....',
    text: `Email not send due to validation Failed`
  });
 }

});

const validateName=(nameVal)=>{
  if(nameVal===''){
    document.getElementById('name').style.border="2px solid red";
    document.getElementById('name').style.color="red";
    return false;
  }
  else if(nameVal.length<5 || nameVal.length>30){
    document.getElementById('name').style.border="2px solid red";
    document.getElementById('name').style.color="red";
    return false;
  }
  else{
    document.getElementById('name').style.color="green";
    document.getElementById('name').style.border="2px solid green";
    return true;
    
  }
}
const validateEmail=(emailVal)=>{
const regex=new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')
if(regex.test(emailVal)){
  document.getElementById('email').style.color="green";
  document.getElementById('email').style.border="2px solid green";
  return true;
}
else{
  document.getElementById('email').style.color="red";
  document.getElementById('email').style.border="2px solid red";
  return false;
}
}

const validateProject=(projectVal)=>{
  if(projectVal.length>10 && projectVal.length<50){
    document.getElementById('project').style.color="green";
    document.getElementById('project').style.border="2px solid green";
    return true;
  }
  else{
    document.getElementById('project').style.color="red";
    document.getElementById('project').style.border="2px solid red";
    return false;
  }
}
const validateContact=(contactVal)=>{
  if(contactVal.length===10){
    document.getElementById('contact').style.color="green";
    document.getElementById('contact').style.border="2px solid green";
    return true;
  }
  else{
    document.getElementById('contact').style.color="red";
    document.getElementById('contact').style.border="2px solid red";
    return false;
  }
}

const validateText=(textVal)=>{
if(textVal.length>30 && textVal.length<300){
  document.getElementById('textval').style.color="green";
  document.getElementById('textval').style.border="2px solid green";
    return true;
}
else{
  document.getElementById('textval').style.color="red";
  document.getElementById('textval').style.border="2px solid red";
    return false;
}
}

function sendMail(params){
  emailjs.send('service_rrba16d','template_u7g8bbp',params)
  .then(function(res){
    Swal.fire({
      icon: 'success',
      title: `Mail Send successfully....`,
      text: 'I will contact you sortly.......'
    })
    window.setTimeout(()=>{
      location.reload();
    },8000);
  })
  .catch(()=>{
    Swal.fire({
      icon: 'error',
      title: 'Something Failed....',
      text: 'Mail could not be send yet try again'
    });
    return false;
  });
  
 }