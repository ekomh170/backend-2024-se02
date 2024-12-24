const express = require('express'); // Import express
const router = express.Router(); // Create a router

/**
 * Define a route
 * Method GET accepts two parameters:
 * 1. The route
 * 2. A callback function that accepts two parameters:
 *   - Request
 *  - Response
 */

router.get('/', (req, res) => {
    res.send('Hello Express JS');
});

router.put('/:id', (req, res) => {
    res.status(201) // Set the status code to 201
        .json({
            message: `Updating the user with id: ${req.params.id}`,
            data: req.body,
        }); // Send a response
});

// Export the router
module.exports = router;
