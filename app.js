const express = require('express');
const app = express();
const port = 3000;

const posts = [
    { user: 'Michael Choi', date: '2024-01-17', message: 'This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message.' },
    { user: 'Michael Choi', date: '2024-02-27', message: 'This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message.' },
    { user: 'Cory Whiteland', date: '2024-03-17', message: 'This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message.' },
    { user: 'Cory Whiteland', date: '2024-04-22', message: 'This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message. This is my message.' },
];
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { posts });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
