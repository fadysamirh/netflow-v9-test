let Collector = require('@fxjs/netflow');

let co = new Collector(3000, function(flow) {
	console.log(flow);
});
co.run((err) => {
	console.error(err);
});
