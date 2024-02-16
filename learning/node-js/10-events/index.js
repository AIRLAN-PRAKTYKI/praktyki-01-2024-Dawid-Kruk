const EventEmitter = require('events');

const customEvent = new EventEmitter();

customEvent.on('print', (product, price) => {
    console.log(`your: ${product} costs ${price}pln`);
})

customEvent.on('print', () => {
    console.log('Succesfully paid for your product');
})

customEvent.emit('print', 'apple', 2);