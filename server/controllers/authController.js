const bcrypt = require('bcryptjs')

module.exports = {
    async register(req, res) {
        const db = req.app.get('db')
        const {email, password, name} = req.body

        // CHECK TO SEE IF THE USER HAS ALREADY REGISTERED
        /* user comes back as an array */
        const user = await db.find_email(email)
            // IF THEY HAVE, STOP THE FUNCTION
            /* because it comes back as an array, we have to bracket notation */
            if (user[0]) return res.status(200).send({message: 'Email already in use'})
        // SALT AND HASH PASSWORD
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        // STORE THE NEW USER IN THE DB
        /* userId will be an array when Massive DB comes back */
        const userId = await db.add_user({name, email})
            /* we're just adding hash below. We don't need to wait for it with await. */
        /* Massive always sends back an array. That's why we have to target the UserId more specifically */
        db.add_hash({user_id: userId[0].user_id, hash}).catch(err => {
            return res.sendStatus(503)
        })
        // STORE THE NEW USER IN SESSIONS
        /* making a new object on session called "user" */
        /* req.session object lives on the server, the user just has a cookie with the id to that session */
        /* How do we reference req.session on the front end? We're going to stick it in Redux */
        req.session.user = {email, name, userId: userId[0].user_id, isAdmin: false}
        // SEND THE session.user OBJECT TO THE FRONT END
        res.status(201).send({message: 'Logged in', user: req.session.user, loggedIn: true})
    }
}