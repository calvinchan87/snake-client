// const net = require('net');

// /**
//  * Establishes connection with the game server
//  */
// const connect = function() {
//   const conn = net.createConnection({ 
//     host: 'localhost',
//     port: 50541
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8'); 
  
//   conn.on('data', (data) => {
//     console.log('Server says: ', data);
//   });
// }

const { connect } = require('./client');
console.log('Connecting ...');

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
 const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

// following function created by referencing @RahmatSaeedi, @neihynocnir, @babs20
const handleUserInput = function (input) {
  // const stdout = process.stdout; //@Commoddity
  if (input === '\u0003') {
    // stdout.write("Exited snek game. Bye bye.\n"); // @Commoddity
    process.exit();
  }
};

setupInput();
connect();