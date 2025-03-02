document.getElementById('theme-btn').addEventListener('click',function(){
  const num1=Math.random()*250;
  const num2=Math.random()*250;
  const num3=Math.random()*250;
  document.getElementById('bg-color').style.backgroundColor=`rgb(${num1},${num2},${num3})`;
})