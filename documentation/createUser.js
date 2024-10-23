
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           example: "12345"
 *         firstname:
 *           type: string
 *           example: "John"
 *         designation:
 *           type: string
 *           default: "DN10000011"
 *         email:
 *           type: string
 *           format: email
 *           example: "john.doe@example.com"
 *         password:
 *           type: string
 *           format: password
 *           example: "P@ssw0rd"
 *         isAdmin:
 *           type: boolean
 *           default: false
 *         lastName:
 *           type: string
 *           example: "Doe"
 *         contact:
 *           type: string
 *           example: "+1234567890"
 *         userType:
 *           type: string
 *           default: "user"
 *         deleted:
 *           type: boolean
 *           default: false
 *         isActive:
 *           type: boolean
 *           default: true
 *       required:
 *         - userId
 *         - firstname
 *         - email
 *         - password
 * 
 * paths:
 *   /user/createUser:
 *     post:
 *       summary: Create a new user
 *       description: Creates a new user in the system.
 *       tags:
 *         - user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         201:
 *           description: User created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         400:
 *           description: Invalid input data
 * 
 */