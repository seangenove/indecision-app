const path = require('path');

// const projectPath = console.log(__dirname);

module.exports = {
    entry : "./src/app.js",
    output : {
        path : path.join(__dirname, "public"),
        filename : "bundle.js"
    }
};