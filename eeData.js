const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('we did it with data', (data = 'default data') => {
  console.log(data);
});

ee.emit('we did it with data', 42);
