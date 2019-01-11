const Buffer = require('buffer').Buffer;

const buffer = Buffer.alloc(6, 'aGVsbG8gd29ybGQ=', 'ascii');

console.log(buffer);


const buf2 = Buffer.from('0123').toString();
console.log(buf2);

const mappedBuffer = buf2.split('').map(() => 104);

console.log(mappedBuffer);

const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);

console.log(smile.toString());
