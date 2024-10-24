/**
 * @swagger
 * /user/deleteUser:
 *   post:
 *     summary: Delete a user
 *     description: Deletes a user from the system by their userId.
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
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: User deleted successfully.
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
 *                   example: "User has been deleted."
 *                 userId:
 *                   type: string
 *                   example: "12345"
 *       400:
 *         description: Bad request, possibly due to a missing or invalid userId.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 */
