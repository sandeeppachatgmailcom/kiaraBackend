/**
 * @swagger
 * /user/postActiveClientsByClient:
 *   post:
 *     tags:
 *       - user
 *     summary: Get active users by designation and client ID
 *     description: Retrieves a list of active users based on their designation and reporting head (client ID).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userType:
 *                 type: string
 *                 description: The designation of the users to retrieve (e.g., "Manager").
 *                 example: "DN10000008"
 *               clientID:
 *                 type: string
 *                 description: The ID of the client under whom the users report.
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
 *                       name:
 *                         type: string
 *                         example: "Jane Doe"
 *                       designation:
 *                         type: string
 *                         example: "DN10000008"
 *                       reportingHead:
 *                         type: string
 *                         example: "HU100019"
 *       400:
 *         description: Bad request, possibly due to missing or invalid `userType` or `clientID`.
 *       404:
 *         description: No data found for the specified criteria.
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
 *                   example: "no data"
 *                 data:
 *                   type: array
 *                   example: []
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
