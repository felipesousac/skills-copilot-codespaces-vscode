// Create web server

// Import express
const express = require('express');
// Import router
const router = express.Router();

// Import comments controller
const commentsController = require('../controllers/commentsController');

// Handle GET request for comments
router.get('/', commentsController.comments_get);

// Handle GET request for comments
router.get('/comments', commentsController.comments_get);

// Handle POST request to add comments
router.post('/comments', commentsController.comments_post);

// Handle GET request for comments
router.get('/comments/:id', commentsController.comments_get);

// Handle PUT request to update comments
router.put('/comments/:id', commentsController.comments_put);

// Handle DELETE request to delete comments
router.delete('/comments/:id', commentsController.comments_delete);

// Export router
module.exports = router;



