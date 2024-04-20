import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';
import { readFile } from 'node:fs';

readFile('./message.txt','utf8', (err, data) => {
  if (err) throw err;

  // Convert data to buffer
  const bufferdata = new Uint8Array(Buffer.from(data));
  // Write buffer data to file
writeFile('data.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});


