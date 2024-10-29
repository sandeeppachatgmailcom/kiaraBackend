/**
 * @swagger
 * /admin/turnUserOnOff:
 *   post:
 *     tags:
 *       - user
 *     summary: Enable or disable a user
 *     description: Toggles the active state of a user in the system by their userId.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The unique ID of the user to be toggled.
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: User status toggled successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "User status has been updated."
 *                 userId:
 *                   type: string
 *                   example: "12345"
 *                 isActive:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Bad request, possibly due to a missing or invalid userId.
 *       500:
 *         description: Internal server error
 */
