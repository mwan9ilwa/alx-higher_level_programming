#!/usr/bin/node

if (process.argv[2] === undefined) {
  console.log('No argument');
  // If there's no argument, outputs the string 'No argument' to the console.
} else {
  console.log(process.argv[2]);
}
