const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connetti al database MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connesso a MongoDB');
}).catch((err) => {
    console.error('Errore di connessione a MongoDB:', err.message);
});

// Modello BlogPost
const BlogPostSchema = new mongoose.Schema({
    title: String,
    excerpt: String,
    content: String,
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// Rotte API
app.get('/api/posts', async (req, res) => {
    const posts = await BlogPost.find();
    res.json(posts);
});

app.post('/api/posts', async (req, res) => {
    const { title, excerpt, content, author } = req.body;
    const newPost = new BlogPost({ title, excerpt, content, author });
    await newPost.save();
    res.json(newPost);
});

app.listen(PORT, () => {
    console.log(`Server avviato sulla porta ${PORT}`);
});
