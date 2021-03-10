const Whale = require('../models/whale')

exports.getWhaleSpots = (req, res, next) => {

    console.log(req.body.whale)
    console.log(req.body.since)
    console.log(req.body.until)

    Whale.getCoordintes(
        req.body.whale, 
        req.body.since, 
        req.body.until,
        (c, q) => {
            res.render('main/index',{
                whale: req.body.whale,
                coordinates: JSON.stringify(c), 
                quantity: q,
                path: '/' 
            })           
        })
        

    
    
}
    

