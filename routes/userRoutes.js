const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById); // New route for getting a single user
router.put('/:id', userController.updateUserById); // New route for updating a user
router.delete('/:id', userController.deleteUserById); // New route for deleting a user

module.exports = router;
