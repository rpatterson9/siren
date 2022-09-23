

function send() {
  const message = Buffer.from('1234567890123456789');
  const client = dgram.createSocket('udp4');
  client.send(message, 1234, '192.168.1.93', (err) => {
    client.close();
  });
  }
