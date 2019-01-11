const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('letter', letter => { console.log(`RECEIVED ${letter}`); });
  
'abcdefg'.split('').forEach(letter => ee.emit('letter', letter));

