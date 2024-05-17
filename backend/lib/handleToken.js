import axios from 'axios';

async function fetchToken(clientInfo) {
    try {
        const response = await axios.post('http://localhost:4000/test', {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clientInfo)
        });
        const { access_token } = response.data;
        return access_token;
    } catch (error) {
        console.error('Error fetching token:', error);
        return null;
    }
}

export { fetchToken };
