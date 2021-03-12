const net = require('net');

/**
 * Establishes connection with the game server
 */

const client = {
  connect: function() {
    const conn = net.createConnection({ 
      host: 'localhost',
      port: 50541
    });

    // interpret incoming data as text
    conn.setEncoding('utf8'); 

    conn.on('connect', () => {
      console.log('Successfully connected to game server.');
      conn.write('Name: C87');
      // setInterval(function() { conn.write('Move: up') }, 50);
    });

    conn.on('data', (data) => {
      console.log('Server says: ', data);
    });

  }
};

module.exports = client;