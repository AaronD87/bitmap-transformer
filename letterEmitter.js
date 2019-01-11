const EventEmitter = require('events');

class LetterEmitter extends EventEmitter {
  read(str) {
    const splitString = str.split('');
    splitString.forEach((letter, offset) => {
      this.emit('letter', (letter, { letter, offset }));
    });

    this.emit('end');
  }
}

module.exports = LetterEmitter;
