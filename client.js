const net = require('net');

/**
 * Establishes connection with the game server
 */

const { IP, PORT } = require('./constants');

const connect = function() {
    const conn = net.createConnection({ 
      host: IP,
      port: PORT
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

    return conn;
  
};

module.exports = {connect};