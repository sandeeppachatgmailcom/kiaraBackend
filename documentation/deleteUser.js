/**
 * @swagger
 * /admin/deleteUser:
 *   post:
 *     tags:
 *       - admin
 *     summary: Delete a user
 *     description: Marks a user as deleted in the system by updating their status based on `userId`.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The unique ID of the user to be deleted.
 *                 example: "HU100017"
 *     responses:
 *       200:
 *         description: User marked as deleted successfully.
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
 *                   example: "user deleted"
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
