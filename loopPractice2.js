var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];


// 1. rat cat butterfly marmot

// for(i=0; i < animals.length -1; i++){
// 	console.log(animals[i])
// }

// 2. rat butterfly ocelot

// for(i=0; i < animals.length; i+= 2){
// 		console.log(animals[i])
// }

//3. ocelot marmot butterfly cat rat

// for(i=0; i < animals.length; i++){
// 	animals.reverse();
// 	console.log(animals[i]); 

// }

//4. rat cat cat butterfly butterfly marmot marmot ocelot

var animalsList = function() {
for (var i = animals.length - 1; i >= 0; i --) {
    if (i === 0 || i === animals.length - 1) {
        console.log(animals[i]);
    } else {
        console.log(animals[i]);
        console.log(animals[i]);
    }
};
};
animalsList();