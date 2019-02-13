class Users {
	constructor () {
		this.users = [];
	}
	addUser (id, name, room) {
		const user = {id, name, room};
		this.users.push(user);
		return user;
	}
	removeUser (id) {
		const removedUser = this.getUser(id);

		if (removedUser) {
			this.users = this.users.filter((user) => {
				return user.id !== id;
			});
		}
		return removedUser;
	}
	getUser (id) {
		const userId = this.users.filter((user) => {
			return user.id === id;
		});
		return userId[0];
	}
	getUsersList (room) {
		const users = this.users.filter((user) => {
			return user.room === room;
		})
		const namesArray = users.map((user) => {
			return user.name;
		});
		return namesArray;
	}
}

module.exports = {Users};

// class Person {
// 	constructor (name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	getUserDescription () {
// 		return `${this.name} is ${this.age} year(s) old.`
// 	}
// }

// const me = new Person('Josh', 28);
// const description = me.getUserDescription();
// console.log(description);