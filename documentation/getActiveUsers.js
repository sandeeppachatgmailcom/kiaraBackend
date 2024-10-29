/**
 * @swagger
 * /user/getActiveUsers:
 *   get:
 *     tags:
 *       - user
 *     summary: Get active users by designation
 *     description: Retrieves a list of active users based on their designation.
 *     parameters:
 *       - in: query
 *         name: userType
 *         schema:
 *           type: string
 *         required: true
 *         description: The designation of the users to retrieve (e.g., "Manager").
 *         example: "Manager"
 *     responses:
 *       200:
 *         description: List of active users retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       userId:
 *                         type: string
 *                         example: "12345"
 *                       name:
 *                         type: string
 *                         example: "John Doe"
 *                       designation:
 *                         type: string
 *                         example: "Manager"
 *       400:
 *         description: Bad request, possibly due to missing or invalid `userType`.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Error: [error message]"
 */
