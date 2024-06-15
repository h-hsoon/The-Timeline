const express = require('express');
const router = express.Router();
const controller = require('../controllers/postcontroler')

router.get('/',controller.homepage);
router.post('/add-new-post',controller.addNewPost);
router.post('/add-comment/:id',controller.addCommant);
router.get('/delete-post/:id', controller.deletPost);
router.get('/delete-comment/:id/:commentId',controller.deletComment)
router.get('/update-post/:id',controller.updetPostPage)
router.post('/updated-post/:id',controller.updetedPost)
router.get('/update-comment/:id/:commentId',controller.updetCommentPage)
router.post('/updated-comment/:id/:commentId',controller.updatedComment)
module.exports = router;