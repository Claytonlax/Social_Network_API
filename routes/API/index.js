const router = require('express').Router();
const userRouter = require('./userRouter');
const thoughtRouter = require('./thoughtRouter');

router.use('/users', userRouter);
router.use('/thoughts', thoughtRouter);

module.exports = router;