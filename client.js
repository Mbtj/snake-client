const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  //data from server "data event"
  conn.on('data', (data) => {
    console.log(data);
  });

  // on connect event
  conn.on("connect", () => {
    conn.write("Name: WHY "); //send name on connect 
    console.log('You\'re connected');
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");


  return conn;
};

module.exports = connect;