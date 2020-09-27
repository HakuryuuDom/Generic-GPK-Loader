const fs = require('fs');
const path = require('path');

exports.ClientMod = class {
    install(installer) {
        const dir = path.join(__dirname, 'Put-GPKs-Here');
        if(fs.existsSync(dir))
            fs.readdirSync(dir, {withFileTypes: true})
              .filter(file => path.extname(file.name) === '.gpk')
              .forEach(file => installer.gpk(path.join('Put-GPKs-Here', file.name)));
    }
}; 