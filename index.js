const fs = require('fs');
const path = require('path');
module.exports = function GPKLoader(mod) {
    const dir = path.join(__dirname, 'Put-GPKs-Here');
    if(!fs.existsSync(dir)) fs.mkdirSync(dir);
    const files = fs.readdirSync(dir, {withFileTypes: true});
    files.forEach(file => {
        if(file.name.slice(-3) !== 'gpk') return;
        mod.installGPK(path.join('Put-GPKs-Here', file.name));
    });
}