const mongoes = require('mongoose');

mongoes.connect('mongodb+srv://hanna:hanna@cluster0.sbdxr18.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(err));