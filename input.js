const input = {
  /**
   * Setup User Interface 
   * Specifically, so that we can handle user input via stdin
   */
  setupInput: function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', handleUserInput);
    return stdin;
  }
};

// following function created by referencing @RahmatSaeedi, @neihynocnir, @babs20
const handleUserInput = function (input) {
  // const stdout = process.stdout; //@Commoddity
  if (input === '\u0003') {
    // stdout.write("Exited snek game. Bye bye.\n"); // @Commoddity
    process.exit();
  }
};

module.exports = input;