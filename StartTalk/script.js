function toggleProfile() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}
function showSelect(){
    const select=document.querySelector('.selecting');
    select.classList.toggle('active');

}
function openFeedback(){
    const feedback=document.querySelector('.feedback');
    feedback.classList.toggle('active');
    const call=document.querySelector('.container');
    call.classList.remove('active');

}
function showCall(){
    const call=document.querySelector('.container');
    call.classList.toggle('active');
    const select=document.querySelector('.selecting');
    select.classList.remove('active');
    const startcall=document.querySelector('.startCall');
    startcall.style.display='none';
}
function changeMicrophone(){
    const mic=document.getElementById('mic');
    mic.style.backgroundColor=' #4CAF50';
    mic.style.color='white';

}
function changeAgain(){
    const mic=document.getElementById('mic');

    mic.style.color= '#4CAF50';
    mic.style.borderColor='#4CAF50';
    style.backgroundColor='white';
  

}
function changeAgainn(){
    const speak=document.getElementById('speaker');
    speak.style.color='#2196F3';
    speak.style.borderColor='#2196F3';
    speak.style.backgroundColor='white';
}

function changeSpeakers(){
    const mic=document.getElementById('speaker');
    mic.style.backgroundColor='#2196F3';
    mic.style.color='white';

}
function change(){
   const feedback=document.querySelector('.feedback');
    feedback.classList.remove('active');
    alert('Feedback sent successfully');
    const startcall=document.querySelector('.startCall');
    startcall.style.display='block';
}