var names = ['Andrew', 'John', 'Lee'];

// names.forEach(function(name) {
// 	console.log("forEach", name);
// });

// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// })

// names.forEach((name) => console.log(name));

// var returnEm = (name) => name + "!";
// console.log(returnEm('Gordon'));

// var person = {
// 	name: 'GOrdon',
// 	greet: function() {
// 		names.forEach((name) => {
// 			console.log(this.name + " says hi to" + name);
// 		});
// 	}
// }

// person.greet();

function add(a, b) {
	return a + b;
}

var addStatement = (a, b) => {
	return a + b;
}

var addExp = (a, b) => a + b;

console.log(addExp(1, 3));
console.log(addExp(9, 0));

// function getTempCallback(location, callback) {
// 	callback(undefined, 78);
// 	callback('City not found');
// }

// getTempCallback('Phiadelphia', function(err, temp) {
// 	if (err) {
// 		console.log('error', err);
// 	} else {
// 		console.log('success', temp);
// 	}
// });

// function getTempPromise(location) {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			resolve(79);
// 			reject("City not found.");
// 		}, 1000);
// 	});
// }

// getTempPromise("Beijing").then(function(temp) {
// 	console.log("promise success", temp);
// }, function(err) {
// 	console.log("promise error", err);
// });

// function addPromise(a, b) {
// 	return new Promise(function(resolve, reject) {
// 		if (typeof a === 'number' && typeof b === 'number')
// 			resolve(a + b);
// 		else
// 			reject('not number');
// 	});
// }

// addPromise(1, 2).then(function(total) {
// 	console.log('Total:', total);
// }, function(err) {
// 	console.log(err);
// });

// addPromise("s", 2).then(function(total) {
// 	console.log('Total:', total);
// }, function(err) {
// 	console.log(err);
// });