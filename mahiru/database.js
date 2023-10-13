/**
 * Author Asli & Penulis : https://github.com/Jabalsurya2105
 * Wa : 62895415497664
 * Note: mohon untuk tidak mengubah credit yang sudah ada
 */

const fs = require('fs')
const { join, dirname } = require('path')

const dirr = join(__dirname, 'modules')
const data = {
user: join(dirr, 'database.json'),
};

// database user
try {
fs.existsSync(data.user) ? JSON.parse(fs.readFileSync(data.user)) : fs.writeFileSync(data.user, JSON.stringify({}, null, 2))
} catch (err) {
fs.writeFileSync(data.user, JSON.stringify({}, null, 2));
console.log('Pembuatan Ulang Database User Sukses ✓')
}

let db = {
user: JSON.parse(fs.readFileSync(data.user)),
}

setInterval(async() => {
fs.writeFileSync(data.user, JSON.stringify(db.user, null, 2)); //Write from read file db user 
}, 990);

module.exports = db