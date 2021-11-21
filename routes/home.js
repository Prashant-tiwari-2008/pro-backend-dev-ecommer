const express = require('express');
const router = express.Router()


//Controllers
const { home, homeDummy }= require('../controller/homeController')


router.route('/').get(home)
router.route('/dummy').get(homeDummy)
// router.get('/',home,()=>{
//     console.log(home)
// })




module.exports = router;