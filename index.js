"use strict";

const urlTester = require('./urlTester');
const noUrls = () => process.argv.length === 0;

if (noUrls()) {
    console.error("you must provide space separated URLs or this tool doesn't do anything");
    process.exit(1);
}

for (var i = 2; i <= process.argv.length - 1; i++) {
    const url = process.argv[i];
    urlTester.test(url);
}