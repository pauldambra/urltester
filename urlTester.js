"use strict";
const request = require('superagent');

const printError = (status, url) => console.error()

module.exports = {
    test: url => request
                  .get(url)
                  .end((err, res) => {
                    if (err && err.code === 'ENOTFOUND') {
                        console.error(`${url} returned 404`);
                    }
                    else if (err) {
                        console.error(err);
                        process.exit(1);
                    }
                    else {
                        console.log(`${url} returned ${res.status}`);
                    }
                })
};