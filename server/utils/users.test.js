const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

var users;

beforeEach(()=>{
  users = new Users();
  users.users = [{
    id: '1',
    name: 'A',
    room: 'The Office Fans'
  },
  {
    id: '2',
    name: 'B',
    room: 'React Course'
  },
  {
    id: '3',
    name: 'C',
    room: 'The Office Fans'
  }]
});




it('should add new user', () => {

var users = new Users();
var user = {
  id: '123',
  name: 'Seba',
  room: 'The Office Fans'
};
  var resUser = users.addUser(user.id, user.name, user.room);
  expect(users.users).toEqual([user]);

});
})
