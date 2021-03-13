// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  /**
   * Setup User Interface 
   * Specifically, so that we can handle user input via stdin
   */
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', handleUserInput);
    return stdin;
  
};

// following function created by referencing @RahmatSaeedi, @neihynocnir, @babs20
const handleUserInput = function (input) {
  // const stdout = process.stdout; //@Commoddity
  if (input === '\u0003') {
    // stdout.write("Exited snek game. Bye bye.\n"); // @Commoddity
    process.exit();
  } else if (input === 'w') {
    connection.write('Move: up');
  } else if (input === 'a') {
    connection.write('Move: left');
  } else if (input === 's') {
    connection.write('Move: down');
  } else if (input === 'd') {
    connection.write('Move: right');
  }
};

module.exports = {setupInput};