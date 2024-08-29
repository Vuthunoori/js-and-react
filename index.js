#!/usr/bin/env node

const { program } = require('commander');


function generatePassword(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}


program
    .version('1.0.0') 
    .description('Generate a random password with customizable length')
    .option('-l, --length <number>', 'Length of the password', '8') 
    .parse(process.argv); 

const options = program.opts();
const passwordLength = Number(options.length);


const password = generatePassword(passwordLength);
console.log(`Generated Password: ${password}`);
