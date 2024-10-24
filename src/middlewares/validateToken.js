const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next ) => {

    const token = req.headers.authorization
    // console.log(req.headers)
    if(!token){
        return res.status(403).json({
            message: 'Acesso negado'
        })
    }

    jwt.verify(token, process.env.SECRET, (err, adm) => {
        if (err) {
            return res.status(403).json({
                message: 'Acesso negado'
            })
        }
        req.adm = adm
    })
    console.log(token)
    return next()
}

module.exports = authenticateToken;