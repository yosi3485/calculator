/*=============================================
Object with property
=============================================*/

var p = {

	key: document.querySelectorAll("#calculator ul li"),
	action: null
}




/*=============================================
Object with methods
=============================================*/

var m = {

	start: function (){

		for (var i = 0; i < p.key.length; i++) {

				p.key[i].addEventListener("click", m.printKey)

			}

	},

	printKey: function (event){

		p.action = event.target.getAttribute("class");
		m.calculator(p.action);
	
	},

	calculator: function (action){

		switch(action) {

			case "number":

			console.log( "number" );

			break;

			case "sign-math":

			console.log( "sign-math" );

			break;

			case "sign-float":

			console.log( "sign-float" );

			break;

			case "sign-equal":

			console.log( "sign-equal" );

			break;

		}
	
	}
}

m.start();