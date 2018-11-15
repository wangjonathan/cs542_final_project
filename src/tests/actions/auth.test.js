import { authUser, authLoading, authError } from '../../actions/auth';

test('should setup auth loading action object', () => {
  const action = authLoading(true);
  expect(action).toEqual({
    type: 'AUTH_LOADING',
    isWaiting: true
  });
});

test('should setup auth user action object', () => {
  const action = authUser({
    username: 'test',
    email: 'test@gmail.com',
    password: '123'
  });
  expect(action).toEqual({
    type: 'AUTH_USER',
    user: {
      username: 'test',
      email: 'test@gmail.com',
      password: '123'
    }
  })
})