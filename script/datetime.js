function updateTime() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  return time;
}




function updateDate() {
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const day = date.toLocaleDateString(undefined, options);
  document.getElementById('time').innerHTML =
      ` ${day}`;
}

setInterval(updateDate, 1000);
updateDate();

