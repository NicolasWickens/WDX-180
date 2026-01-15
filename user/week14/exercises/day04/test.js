// Round 1: Given an object, in one line, assign variables to the values of the object using different names than the keys already in the object.

var object = {name: 'elvis', title: 'hip swinger'};
var {name: n, title: t} = object;

// Round 2: What if I want to grab the values of the first and second elements of a given array using variables, and then swap the values of those variables?

var items = ['apple', 'banana', 'pear']
var [first, second] = items;
[first, second] = [second, first];

// Round 3: Given an object, write one line of code that assigns variables to the keys.

var object = {
  user: 'brenna',
  id: 1,
  date: 'monday',
  module: 3
}
var {user, id, date, module} = object;

// Round 4: Given an object with nested objects, write one line of code that assigns variables to the keys.

var object1 = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
}
var {user, address: {city, state}, id} = object1;

// Round 5: Given an object, in one line of code pull out the individual keys to be accessible directly.

var object = {name: 'elvis', title: 'hip swinger'}
var {name, title} = object;

// Round 6: Given a crazy array of objects with nested objects, iterate over it and grab just the artist and the third album title.

var singers = [
  {
    artist: 'Elvis',
    albums: {
      album1: 'this first title for Elvis',
      album2: 'another second title for Elvis',
      album3: 'third title for Elvis'
    }
  },
  {
    artist: 'Cher',
    albums: {
      album1: 'this first title for Cher',
      album2: 'another second title for Cher',
      album3: 'third title for Cher'
    }
  }
]
singers.forEach(({artist, albums: {album3}}) => {
	  console.log(artist, album3);
})

// new rounds
// Round 1: Write a function findCheapToys that uses forEach and returns an array of toy names that cost less than $20. You may not use any other iterator methods.

// Round 2: Solve the prompt using a filter and map. You may not use any other iterator methods.

// Round 3: Solve the prompt using a reduce. You may not use any other iterator methods.

const ninetiesToys = [
  {
      name: "Tamagotchi",
      releaseYear: 1996,
      price: 15.99
  },
  {
      name: "Furby",
      releaseYear: 1998,
      price: 29.99
  },
  {
      name: "Super Soaker",
      releaseYear: 1989,
      price: 19.99
  },
  {
      name: "Pogs",
      releaseYear: 1991,
      price: 5.99
  },
  {
      name: "Game Boy",
      releaseYear: 1989,
      price: 89.99
  }
];

function findCheapToys(toys) {
	const cheapToys = [];
	toys.forEach(toy => {
		if (toy.price < 20) {
			cheapToys.push(toy.name);
		}
	});
	return cheapToys;
}

function findCheapToysFilterMap(toys) {
	const cheapToys = toys
		.filter(toy => toy.price < 20)
		.map(toy => toy.name);
	return cheapToys;
}

function findCheapToysReduce(toys) {
	const cheapToys = toys.reduce((acc, toy) => {
		if (toy.price < 20) {
			acc.push(toy.name);
		}
		return acc;
	}, []);
	return cheapToys;
}