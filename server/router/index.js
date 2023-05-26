const express = require('express')
const userController = require('../controller/user-controller')
const router = express.Router()
const { body } = require('express-validator')
const authMiddleware = require('../middleware/auth-middleware')

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.registration
)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.post('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)

module.exports = router
