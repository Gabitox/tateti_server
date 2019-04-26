const view= require('../views/view.js')
const commons=require('../commons')
//sirve el juego.
function index(request , response){
	view.make('tateti.html', response);	
}
function test(request, response){
	response.write("test")
	response.end()
}
//Funcion que guardaría las jugadas por tablero.
function store(request, response){
	try{
		let payload = JSON.parse(request.body)
		console.log(payload)
		let resp = {success: true}
		commons.sender.send(response, JSON.stringify(resp))
		
	}catch(e){
		console.log(e)
		let resp = {success : false, message: "Error de formato "}
		commons.sender.send(response,JSON.stringify(resp),400)
	}
}



exports.index = index;
exports.store= store;
exports.test=test