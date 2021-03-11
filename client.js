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
  
    conn.on('data', (data) => {
      console.log('Server says: ', data);
  
    });

  }
};

module.exports = client;