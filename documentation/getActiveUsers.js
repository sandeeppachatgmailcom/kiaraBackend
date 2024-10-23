
/**
 * @swagger
 * /user/getActiveClients:
 *   get:
 *     summary: Get list of active users
 *     description: Fetches a list of all active users from the system.
 *     responses:
 *       200:
 *         description: A successful response with a list of active users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "12345"
 *                   name:
 *                     type: string
 *                     example: "John Doe"
 *                   email:
 *                     type: string
 *                     example: "john.doe@example.com"
 *                   isActive:
 *                     type: boolean
 *                     example: true
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */