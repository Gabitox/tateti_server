const  fs = require('fs')
const errors = require('../errors')
const commons = require('../commons')

 function make(file, response){
	
		fs.readFile('./views/'+file, function(err, data){
		if(err){
			throw new errors.exceptions.FilesystemException(err)
			
		}else{
			commons.sender.send(response, data,200,"html")
		}
		
	})



}	
exports.make=make