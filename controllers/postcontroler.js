const postmodel = require('../models/postmodel');

const homepage = (req,res) => {
    postmodel.find()
    .then((post) =>{
        res.render('homepage',{
            posts: post
        });
    })
    .catch(err => {
        console.log(err);
    })
}

const addNewPost = (req,res) => {
    const newPost = new postmodel(req.body);
    newPost.save()
    .then(() => {
        res.redirect('/');
    })
    .catch(err => {
        console.log(err);
    })
} 
const deletPost = (req,res) => {
    const id = req.params.id;
    postmodel.findByIdAndDelete(id)
    .then(() => {
        res.redirect('/');
    })
    .catch(err => {
        console.log(err);
    })
}

const addCommant =(req,res) => {
    const postId = req.params.id;
    postmodel.findById(postId)
    .then((post) => {
        post.comments.push({commentBody: req.body.comment});

         post.save();
         res.redirect('/');
      }).catch(err => console.log(err));
}

const deletComment = (req,res) => {
    const postId = req.params.id;
    const commentId = req.params.commentId;
    postmodel.findById(postId)
    .then((post) => {
        const commentIndex = post.comments.findIndex(comment => comment.id === commentId);
        post.comments.splice(commentIndex, 1);
        post.save();
        res.redirect('/');
        }).catch(err => console.log(err));

}

const updetPostPage = (req,res) => {
    const id = req.params.id;
    postmodel.findById(id)
    .then((post) => {
        res.render('updatepost', {post});
    })
    .catch(err => console.log(err));

}

const updetedPost = (req,res) => {
    const id = req.params.id;
    postmodel.findByIdAndUpdate(id, req.body)
    .then(() => {
        res.redirect('/');
    })
    .catch(err => console.log(err));
}

const updetCommentPage = (req,res) => {
    const postId = req.params.id;
    const commentId = req.params.commentId;
    postmodel.findById(postId)
    .then((post) => {
        const comment = post.comments.find(comment => comment.id === commentId);
        res.render('updatecomment', {post, comment});
    })
    .catch(err => console.log(err));
}

const updatedComment =(req,res) => {
    const postId = req.params.id;
    const commentId = req.params.commentId;
    postmodel.findById(postId)
    .then((post) => {
        const commentIndex = post.comments.findIndex(comment => comment.id === commentId);
        post.comments[commentIndex].commentBody = req.body.comment;
        post.save();
        res.redirect('/');
    })
    .catch(err => console.log(err));
}

module.exports = {
    homepage,
    addNewPost,
    addCommant,
    deletPost,
    deletComment,
    updetPostPage,
    updetedPost,
    updetCommentPage,
    updatedComment
}