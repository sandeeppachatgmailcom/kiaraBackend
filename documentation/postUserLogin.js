/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: User login
 *     description: Authenticates a user by validating their email and password.
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
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: "yourpassword123"
 *     responses:
 *       200:
 *         description: Login successful, returns the user details and token.
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
 *                   example: "Login successful."
 *                 token:
 *                   type: string
 *                   description: JWT token for the authenticated user.
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "12345"
 *                     email:
 *                       type: string
 *                       example: "john.doe@example.com"
 *                     name:
 *                       type: string
 *                       example: "John Doe"
 *       400:
 *         description: Bad request, possibly due to missing or invalid credentials.
 *       401:
 *         description: Unauthorized, incorrect email or password.
 *       500:
 *         description: Internal server error.
 */
