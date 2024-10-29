/**
 * @swagger
 * /user/turnUserOnOff:
 *   post:
 *     tags:
 *       - user
 *     summary: Enable or disable a user
 *     description: Toggles the active status of a user based on their `userId`. If the user is active, they will be disabled, and vice versa.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The unique ID of the user to enable or disable.
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: User status toggled successfully.
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
 *                   example: "user enabled" or "user disabled"
 *       404:
 *         description: No user found with the specified `userId`.
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
 *                   example: "no user exist"
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
