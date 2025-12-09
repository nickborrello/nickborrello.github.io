
const https = require('https');

const url = 'https://api.github.com/users/nickborrello/events/public';
const options = {
    headers: {
        'User-Agent': 'Node.js Test Script'
    }
};

https.get(url, options, (res) => {
    console.log('Status Code:', res.statusCode);
    console.log('Headers:', res.headers);

    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        if (res.statusCode === 200) {
            console.log('Success! Data length:', data.length);
            console.log('First event:', JSON.parse(data)[0].type);
        } else {
            console.log('Failed. Response body:', data);
        }
    });

}).on('error', (e) => {
    console.error('Network Error:', e);
});
