// routes/todos.js
const express = require('express');
const auth = require('../middleware/auth');
const todoController = require('../controllers/todoController');

const router = express.Router();

// Get all todos
router.get('/', auth, todoController.getTodos);

// Create a todo
router.post('/', auth, todoController.createTodo);

// Update a todo
router.put('/:id', auth, todoController.updateTodo);

// Delete a todo
router.delete('/:id', auth, todoController.deleteTodo);

module.exports = router;
