const express = require('express');
const error404 = require('../controller/error404');
const getAdmin = require('../controller/getAdmin');
const router = express.Router();

/**
 * @swagger
 * /admin:
 *   get:
 *     summary: Get list of admins
 *     description: Returns a list of all admins.
 *     responses:
 *       200:
 *         description: A successful response with a list of admins
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 example: "Admin Name"
 */
router.get('/', getAdmin);

/**
 * @swagger
 * /admin:
 *   post:
 *     summary: Create a new admin
 *     description: Accepts admin data to create a new admin.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *     responses:
 *       200:
 *         description: A successful response indicating the admin was created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "admin"
 */
router.post('/', (req, res) => {
  console.log(req.body, 'req.body');
  res.json({ message: 'admin' });
});

// Handling undefined API endpoints
router.use(error404);

module.exports = router;
