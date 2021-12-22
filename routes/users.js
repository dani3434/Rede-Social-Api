const router = require('express').Router();

router.get('/', (req,res) => {
  res.send('Essa é routa de usuario');
})

module.exports = router;
