function Dog(name,type){
	this.name = name;
	this.type = type;
}

Dog.prototype.bark = function(){
	console.log("roof roof says "+this.name+" the "+this.type);
}

onmessage = function(e) {
	console.log('Worker: Message received from main script, car object is in the worker thread now');
	let car = e.data;
	console.log("Now writing car object's properties in worker thread");
	for(var key in car){
		console.log(key+" property is "+typeof(car[key]));
	}

	console.log("As you can see car object lost its method named 'run'...");
	console.log("Now creating dog object from Dog class in worker thread and sending to main thread");
	var dog = new Dog("Lassie","Kangal");
	console.log("Now writing dog object's properties in worker thread");	
	for(var key in dog){
		console.log(key+" property is "+typeof(dog[key]));
	}

	console.log("Sending dog to main thread");
	postMessage(dog);
}
