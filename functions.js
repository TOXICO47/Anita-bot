const fs = require('fs');
const cfonts = require("cfonts")
const moment = require("moment-timezone")

const banner = cfonts.render(("yotsuba|Bot"), {
font: "block",
align: "center",
colors: ["blue", "white"]
})

const getBuffer = async (url, opcoes) => {
try {
opcoes ? opcoes : {}
const post = await axios({
method: "get",
url,
headers: {
    'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 
	'DNT': 1,
	'Upgrade-Insecure-Request': 1
},
...opcoes,
responseType: 'arraybuffer'
})
return post.data
} catch (erro) {
console.log(`Erro identificado: ${erro}`)
}
}
const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`;
};
const getExtension = async (type) => {
	return await mimetype.extension(type)
}

//======//


function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}


module.exports = { TelegraPh }

const time2 = moment().tz('America/lima').format('HH:mm:ss')
if(time2 > "00:00:00"){
var time = 'Buenas Madrugadas'
}
if(time2 > "05:30:00"){
var time = 'Buenos dias'
}
if(time2 > "12:00:00"){
var time = 'Buenas tardes'
}
if(time2 > "18:00:00"){
var time = 'Buenas noches'
}
const timee = moment.tz("America/lima").format("HH:mm:ss")

const banner2 = cfonts.render((`${time}`), {
font: "console",
align: "center",
})

respuesta = {
espere: " ..enviando.. ",
aguarde: "..Espere Porfavor.. ",
dono: ".. Este comando es Privado.. ",
grupos: ".. Este comando es para grupos.. ",
privado: ".. Este comando es para chats.. ",
admin: " ... Este comando es solo para admins..",
botadmin: " .. Este comando funciona si y solo si, el bot es admin ",
error: ".. Error, intente nuevamente.."
}

module.exports = {
banner,
banner2
}
