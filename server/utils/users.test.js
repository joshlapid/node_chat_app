const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
	let users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: 1,
			name: 'Bob',
			room: 'Node course'
		},{
			id: 2,
			name: 'Jim',
			room: 'React course'
		},{
			id: 3,
			name: 'Guy',
			room: 'Node course'
		}];
	});

	it('should add new user', () => {
		const users = new Users();
		const user = {
			id: 123,
			name: 'Bob',
			room: 'Room B'
		};
		const resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove user', () => {
		const userId = 2;
		const removedUser = users.removeUser(userId);
		expect(removedUser.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove user', () => {
		const userId = 5;
		const removedUser = users.removeUser(userId);
		expect(removedUser).toBeFalsy();
		expect(users.users.length).toBe(3);
	});

	it('should get user by id', () => {
		const userId = users.getUser(1);
		expect(userId).toEqual({id: 1, name: 'Bob', room: 'Node course'})
	});

	it('should not get user by id', () => {
		const userId = users.getUser(5);
		expect(userId).toBe(undefined);
	});

	it('should return names for node course', () => {
		const userList = users.getUsersList('Node course');
		expect(userList).toEqual(['Bob', 'Guy']);
	});

	it('should return names for react course', () => {
		const userList = users.getUsersList('React course');
		expect(userList).toEqual(['Jim']);
	});

});