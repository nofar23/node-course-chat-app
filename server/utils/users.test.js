const expect = require('expect');

const {Users} = require('./users');

describe('User', () => {

	var users;
	users = new Users();

	beforeEach(() => {
		user = new Users();
		users.users = [{
			id: '1',
			name: 'Asaf',
			room: 'Node course'
		},{
			id: '2',
			name: 'Sapir',
			room: 'React course'
		},{
			id: '3',
			name: 'Nofar',
			room: 'Node course'
		}]
	});
	it('should add new user', () => {
		var users = new Users();
		var user = {
			id:'123',
			name:'Nofar',
			room: 'The office Fans'
		};
		var resUser = users.addUser(user.id,user.name,user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		var userId = '1';
		var user = users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove user', () => {
		var userId = '5';
		var user = users.removeUser(userId);

		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		var userId ='3';
		var user = users.getUser(userId);

		expect(user.id).toBe(userId);
		
	});

	it('should not find user', () => {
		var userId ='4';
		var user = users.getUser(userId);
		expect(user).toNotExist();

	});

	it('should return names for node course', () => {
		var userList = users.getUserList('Node course');

		expect(userList).toEqual(['Asaf', 'Nofar']);
	});
	it('should return names for react course', () => {
		var userList = users.getUserList('React course');

		expect(userList).toEqual(['Sapir']);
	});
});