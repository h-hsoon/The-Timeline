const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://hanna:hanna@cluster0.s2hpooe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Define the Post schema and model
const postSchema = new mongoose.Schema({
    name: String,
    date: { type: Date, default: Date.now },
    message: String
});

const Post = mongoose.model('Post', postSchema);

// Routes
app.get('/', async (req, res) => {
    const posts = await Post.find().sort({ date: -1 });
    res.render('index', { posts: posts });
});

app.post('/post', async (req, res) => {
    const { name, message } = req.body;
    const post = new Post({ name, message });
    await post.save();
    res.redirect('/');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
