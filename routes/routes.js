const {Router} = require('express')
const router = Router();

const User = require('../models/user')

router.get('/', (req,res) => {
    res.render('index');
});

router.post('/insert',(req, res) =>{
    let name = req.body.user;
    let email = req.body.email;
    let password = req.body.password

    const user = new User({
        name: name,
        email: email,
        password: password
});


user.save();
res.render('index')
} )



module.exports = router;