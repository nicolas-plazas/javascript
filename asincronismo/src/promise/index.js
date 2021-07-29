const somethingWillHappen = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve('Hey!');
		} else {
			reject('something wrong');
		}
	});
};

somethingWillHappen()
	.then((response) => console.log(response))
	.catch((error) => console.error(error));

const somethingWillHappen2 = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			setTimeout(() => {
				resolve('true');
			}, 2000);
		} else {
			const error = new Error('something wrong');
			reject(error);
		}
	});
};

somethingWillHappen2()
	.then((response) => console.log(response))
	.catch((error) => console.error(error));

// Promise.all ayuda a llamar múltiples promesas, manteniendo un código limpio y ordenado
Promise.all([somethingWillHappen(), somethingWillHappen2()])
	.then((response) => {
		console.log('Array of results', response); // output: Array of results [ 'Hey!', 'true' ]
	})
	.catch((error) => console.error(error));
