/**
 * @swagger
 * /user/login:
 *   post:
 *     tags:
 *       - user
 *     summary: User login
 *     description: Authenticates a user based on their email and password. Returns user details, access menu list, and role if credentials are valid.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email address.
 *                 example: "admin@example.com"
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: "Asd@123.com"
 *     responses:
 *       200:
 *         description: User authenticated successfully.
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
 *                   example: "result success"
 *                 userId:
 *                   type: string
 *                   description: The unique ID of the user.
 *                   example: "12345"
 *                 email:
 *                   type: string
 *                   example: "user@example.com"
 *                 name:
 *                   type: string
 *                   example: "John Doe"
 *                 designation:
 *                   type: string
 *                   description: User's designation ID.
 *                   example: "67890"
 *                 menuList:
 *                   type: object
 *                   description: Access permissions for the user.
 *                   additionalProperties:
 *                     type: string
 *                   example: { "dashboard": "read", "settings": "write" }
 *                 role:
 *                   type: string
 *                   description: User's role title.
 *                   example: "Manager"
 *       400:
 *         description: Bad request, possibly due to missing email or password.
 *       401:
 *         description: Wrong credentials.
 *       404:
 *         description: User does not exist.
 *       500:
 *         description: Internal server error.
 */
