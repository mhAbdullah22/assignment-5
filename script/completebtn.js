// get input value function
function getInputByid(id){
  const value=document.getElementById(id).innerText;
  const convertedValue=parseInt(value);
  return convertedValue;
}

// show value function
function showvalue(id,show){
  document.getElementById(id).innerText=show;
}

// repeat button function
function repeat(id){
  const assignedValue=getInputByid('task-assigned');
  const result=assignedValue-1;
  showvalue('task-assigned',result);

  const checkbox=getInputByid('checkbox-btn');
  const check=checkbox+1;
  showvalue('checkbox-btn',check);

  document.getElementById(id).disabled=true;
}

// timeshow function
function timeShow(){
  const history=document.getElementById('history');
  const p=document.createElement('p');
  p.innerText=`
  You have completed the task 777 at ${updateTime()}
  `
  history.appendChild(p);
}

  

document.getElementById('complete-btn1').addEventListener('click',function(){
  repeat('complete-btn1');
  alert('Board updated Successfully');
  timeShow();
 })

 document.getElementById('complete-btn2').addEventListener('click',function(){
  repeat('complete-btn2');
  alert('Board updated Successfully');
  timeShow();  
 
 })

 document.getElementById('complete-btn3').addEventListener('click',function(){
  repeat('complete-btn3');
  alert('Board updated Successfully');
  timeShow();
 })

 document.getElementById('complete-btn4').addEventListener('click',function(){
  repeat('complete-btn4');
  alert('Board updated Successfully');
  timeShow();
 })

 document.getElementById('complete-btn5').addEventListener('click',function(){
  repeat('complete-btn5');
  alert('Board updated Successfully');
  timeShow();
 })

 document.getElementById('complete-btn6').addEventListener('click',function(){
  repeat('complete-btn6');
  alert('Board updated Successfully');
  timeShow();
 })

 document.getElementById('clearhistory-btn').addEventListener('click',function(){
 document.getElementById('history').style.display='none';
 })



