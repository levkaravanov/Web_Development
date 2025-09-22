# Activity: Authentication with bcrypt

This project demonstrates the use of the `bcrypt` library for secure password hashing in Node.js applications.

## Project Structure

- `bcrypt_lab.js` - Part 1: bcrypt demonstration (hashing, comparison, synchronous methods)
- `app.js` - Part 2: Express API with MongoDB (requires running MongoDB)
- `app_demo.js` - Part 2: Express API with in-memory storage (no MongoDB required)
- `test_api.js` - API testing script
- `package.json` - Project dependencies

## Part 1: Understanding How bcrypt Works

### Running Part 1

```bash
node bcrypt_lab.js
```

### What Part 1 demonstrates:

1. **Salt generation and password hashing**
   - Using `bcrypt.genSalt()` to generate salt
   - Hashing passwords with `bcrypt.hash()`
   - Displaying bcrypt prefixes (2a, 2b, 2x, 2y)

2. **Password comparison**
   - Using `bcrypt.compare()` to verify passwords
   - Secure comparison without revealing the original password

3. **Synchronous hashing**
   - Using `bcrypt.hashSync()` and `bcrypt.genSaltSync()`
   - When to use synchronous methods

## Part 2: Password Hashing in an Express App

### Demo version (without MongoDB)

```bash
# Start the server
node app_demo.js

# In another terminal - test the API
node test_api.js
```

### Full version (with MongoDB)

```bash
# Make sure MongoDB is running locally
# Start the server
node app.js

# In another terminal - test the API
node test_api.js
```

### API Endpoints

- `POST /api/users` - Register a new user
- `POST /api/users/login` - User login
- `GET /api/users` - Get all users (without passwords)
- `GET /api/users/demo` - Get all users (with hashed passwords for demo)
- `GET /` - API health check

### Usage Examples

#### User Registration

```bash
curl -X POST http://localhost:3001/api/users \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "testpassword"}'
```

#### User Login

```bash
curl -X POST http://localhost:3001/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "testpassword"}'
```

## Key Concepts

### Password Security

- **Salt**: Random value added to the password before hashing
- **Hashing**: One-way transformation of password into unreadable format
- **bcrypt prefixes**: Algorithm versions (2a, 2b, 2x, 2y) - recommend using 2b

### bcrypt Methods

- `bcrypt.hash()` - Asynchronous hashing (recommended)
- `bcrypt.hashSync()` - Synchronous hashing (for simple applications)
- `bcrypt.compare()` - Secure password comparison
- `bcrypt.genSalt()` - Salt generation

### Security Settings

- **Salt rounds**: 10-12 rounds provide good balance of security and performance
- **Salt uniqueness**: Each password gets a unique salt
- **Attack protection**: bcrypt protects against rainbow table and brute force attacks

## Testing

The project includes automated tests that verify:

1. ✅ User registration
2. ✅ Prevention of duplicate users
3. ✅ Successful login with correct credentials
4. ✅ Rejection of incorrect passwords
5. ✅ Rejection of non-existent users
6. ✅ User list retrieval

## Dependencies

- `bcrypt` - Password hashing library
- `express` - Web framework for Node.js
- `mongoose` - ODM for MongoDB (optional)
- `axios` - HTTP client for testing

## Installation

```bash
npm install
```

## Conclusion

This project demonstrates proper authentication implementation using bcrypt:

- Passwords are never stored in plain text
- Each password has a unique salt
- Modern bcrypt version (2b) is used
- API is protected against major authentication vulnerabilities
