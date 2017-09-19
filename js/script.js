/*=============================================
Object with property
=============================================*/

var p = {

	key: document.querySelectorAll("#calculator ul li"),
	action: null,
	digit: null,
	operations: document.querySelector("#operations"),
	countsign: 0,
	countfloat: false,
	result: false
}



/*=============================================
Object with methods
=============================================*/

var m = {

	start: function() {

		for (var i = 0; i < p.key.length; i++) {

			p.key[i].addEventListener("click", m.printKey)

		}

	},

	printKey: function(event) {

		p.action = event.target.getAttribute("class");
		p.digit = event.target.innerHTML;

		m.calculator(p.action, p.digit);

	},

	calculator: function(action, digit) {

		switch (action) {

			case "number":

				p.countsign = 0;

				if (p.operations.innerHTML == 0) {
					p.operations.innerHTML = digit;
				} else {

					if (p.result) {

						p.result = false;
						p.operations.innerHTML = digit;

					} else {
						p.operations.innerHTML += digit;
					}


				}



				break;

			case "sign-math":

				p.countsign++;

				if (p.countsign == 1) {

					if (p.operations.innerHTML == 0) {

						p.operations.innerHTML = 0
					} else {

						p.operations.innerHTML += digit;
						p.countfloat = false;
						p.result = false;
					}

				}

				break;

			case "sign-float":

				if (!p.countfloat) {

					p.operations.innerHTML += digit;

					p.countfloat = true;

				}

				break;

			case "sign-equal":

				p.operations.innerHTML = eval(p.operations.innerHTML);
				p.result = true;

				break;

		}

	},

	deleteCalculator: function() {

		p.operations.innerHTML = 0;
	}
}

m.start();