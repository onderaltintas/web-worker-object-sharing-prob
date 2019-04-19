function Car(param1,param2){
	this.param1 = param1;
	this.param2 = param2;
}

Car.prototype.run = function(){
	console.log("brrrr "+this.param1+" "+this.param2);
}

if (window.Worker) {
	var car = new Car("Ferrari","the sports car");
	console.log("writing car object's properties in main thread:")
	for(var key in car){
		console.log(key+" property is "+typeof(car[key]));
	}
	
	const myWorker = new Worker("worker.js");
	myWorker.postMessage(car);
	myWorker.onmessage = function(e) {
		console.log('Message received from worker');
		var dog = e.data;
		console.log("writing dog object's properties in main thread:")
		for(var key in dog){
			console.log(key + " property is " + typeof(dog[key]));
		}
	}
} else {
	console.log('Your browser doesn\'t support web workers.')
}

