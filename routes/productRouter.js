const express = require('express');

const productsController = require('../controllers/productsController.js');

const router = express.Router();

// GET /feed/posts
router.get('/products', productsController.getProducts);

router.get('/products/searchbytitle/:title', productsController.getProductsByTitle);

// POST /feed/post
//router.post('/post', feedController.createPost);

module.exports = router;