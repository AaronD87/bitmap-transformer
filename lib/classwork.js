function myTimeout(arg) {
    console.log(`${arg}`);
  }
  
setTimeout(myTimeout, 2000, 'OHHH, callbacks?');

setTimeout(myTimeout, 1000, 'One second Callbacks');

setInterval(myTimeout, 1000, 'Again and Again');