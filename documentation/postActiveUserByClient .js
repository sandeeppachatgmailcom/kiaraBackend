/**
 * @swagger
 * /user/postActiveUserByClient:
 *   post:
 *     tags:
 *       - user
 *     summary: Get active users by client
 *     description: Retrieves a list of active users associated with a specific client based on the user's designation.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userType:
 *                 type: string
 *                 description: The designation of the user (e.g., role or type).
 *                 example: "DN10000009"
 *               clientId:
 *                 type: string
 *                 description: The unique ID of the client for whom to retrieve active users.
 *                 example: "HU100019"
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
 *                       designation:
 *                         type: string
 *                         example: "DN10000010"
 *                       reportingHead:
 *                         type: string
 *                         example: "67890"
 *       400:
 *         description: Bad request, possibly due to missing or invalid `userType` or `clientID`.
 *       404:
 *         description: No active users found for the specified client.
 *       500:
 *         description: Internal server error.
 */
