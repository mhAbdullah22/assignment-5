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
function repeat(){
  const assignedValue=getInputByid('task-assigned');
  const result=assignedValue-1;
  showvalue('task-assigned',result);

  const checkbox=getInputByid('checkbox-btn');
  const check=checkbox+1;
  showvalue('checkbox-btn',check);
}

// timeshow function
function timeShow(){
  const history=document.getElementById('history');
  const p=document.createElement('p');
  p.innerText=`
  You have completed the task 77    at ${updateTime()}
  `
  history.appendChild(p);
}

// function message()
// {
//   const msg=document.getElementById(id).innerText;
//   return msg;
// }

// // clear history button
 document.getElementById('clearhistory-btn').addEventListener('click',function(){
 document.getElementById('history').style.display='none';
 })


const results=document.getElementsByClassName('complete');
let count=0;
for(const result of results )
{
  result.addEventListener('click',function(){
  count++;
 repeat();
  alert('Board updated Successfully');
  timeShow();
  result.disabled=true;
  if(count===6){
    alert('congrates!!! You have completed all the current task');
    
   }

  })
}

// const titles=document.getElementsByClassName('title');
// for(const title of titles)
// {
//   const show=title.innerText;
// }


