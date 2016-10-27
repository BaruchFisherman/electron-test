"use strict"
let remote = require('remote');
let dialog = remote.require('dialog');
let fs = require('fs');
let win = new Array(2);
let selected = 0;

fs.writeFile('C:\\test\\test.txt', "");

let openBtn = document.getElementById("open");
openBtn.addEventListener("click", () => {
    win[0] = window.open("win1.html");
    win[1] = window.open("win2.html");
}, false);

let blurBtn = document.getElementById("blur");
blurBtn.addEventListener("click", () => {
    setInterval(() => {
        win[selected].focus();
        win[selected].eval("writeMessage()");
        writeLog(selected);
        selected = +!selected;
    }, 1000);
}, false);

function writeLog() {
    fs.readFile('C:\\test\\test.txt', 'utf-8', (err, data) => {
        data += `\r\n win ${selected + 1} focused...`;
        fs.writeFile('C:\\test\\test.txt', data);
    });
}
