
class UsernameError extends Error {
  constructor(message = 'Invalid username') {
    super(message);
    this.name = 'UsernameError';
  }
}

class PasswordError extends Error {
  constructor(message = 'Invalid password') {
    super(message);
    this.name = 'PasswordError';
  }
}

function validateUsername(username) {
  const usernamePattern = /^[a-zA-Z0-9]{3,15}$/;
  if (!usernamePattern.test(username)) {
    throw new UsernameError(); // Throw a custom error if validation fails
  }
}

function validatePassword(password) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordPattern.test(password)) {
    throw new PasswordError(); 
}


function registerUser(username, password) {
  try {
    validateUsername(username);
    validatePassword(password);
    console.log('User registration successful!');
  } catch (error) {
    if (error instanceof UsernameError) {
      console.error('Username Error:', error.message);
    } else if (error instanceof PasswordError) {
      console.error('Password Error:', error.message);
    } else {
      console.error('Unexpected Error:', error.message);
    }
  } finally {
    console.log('Registration attempt complete.');
  }
}

const username = 'lahari';
const password = 'lahari123';

registerUser(username, password);
}
