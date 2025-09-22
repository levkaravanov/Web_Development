const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

// Test data
const testUser = {
    username: 'testuser',
    password: 'testpassword'
};

async function testAPI() {
    console.log('=== Testing Express bcrypt API ===\n');

    try {
        // Test 1: Health check
        console.log('1. Testing health check...');
        const healthResponse = await axios.get(`${BASE_URL}/`);
        console.log('✅ Health check:', healthResponse.data.message);
        console.log('');

        // Test 2: Register a new user
        console.log('2. Testing user registration...');
        const registerResponse = await axios.post(`${BASE_URL}/api/users`, testUser);
        console.log('✅ Registration successful:', registerResponse.data.message);
        console.log('   User ID:', registerResponse.data.user.id);
        console.log('');

        // Test 3: Try to register the same user again (should fail)
        console.log('3. Testing duplicate registration...');
        try {
            await axios.post(`${BASE_URL}/api/users`, testUser);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log('✅ Duplicate registration correctly rejected:', error.response.data.message);
            } else {
                throw error;
            }
        }
        console.log('');

        // Test 4: Login with correct credentials
        console.log('4. Testing login with correct credentials...');
        const loginResponse = await axios.post(`${BASE_URL}/api/users/login`, testUser);
        console.log('✅ Login successful:', loginResponse.data.message);
        console.log('   User ID:', loginResponse.data.user.id);
        console.log('');

        // Test 5: Login with incorrect password
        console.log('5. Testing login with incorrect password...');
        try {
            await axios.post(`${BASE_URL}/api/users/login`, {
                username: testUser.username,
                password: 'wrongpassword'
            });
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log('✅ Incorrect password correctly rejected:', error.response.data.message);
            } else {
                throw error;
            }
        }
        console.log('');

        // Test 6: Login with non-existent user
        console.log('6. Testing login with non-existent user...');
        try {
            await axios.post(`${BASE_URL}/api/users/login`, {
                username: 'nonexistentuser',
                password: 'anypassword'
            });
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log('✅ Non-existent user correctly rejected:', error.response.data.message);
            } else {
                throw error;
            }
        }
        console.log('');

        // Test 7: Get all users
        console.log('7. Testing get all users...');
        const usersResponse = await axios.get(`${BASE_URL}/api/users`);
        console.log('✅ Users retrieved:', usersResponse.data.length, 'user(s)');
        console.log('   Users:', usersResponse.data.map(u => u.username));
        console.log('');

        console.log('🎉 All tests passed! The API is working correctly.');

    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            console.log('❌ Error: Could not connect to the server.');
            console.log('   Make sure the server is running on port 3001.');
            console.log('   Run: node app.js');
        } else if (error.response) {
            console.log('❌ API Error:', error.response.status, error.response.data);
        } else {
            console.log('❌ Error:', error.message);
        }
    }
}

// Run the tests
testAPI();
