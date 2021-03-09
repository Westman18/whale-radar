exports.getIndex = (req, res, next) => {
    res.render('main/index', {
        path: '/',
        coordinates: JSON.stringify([]),
        whale: null,
        quantity: null,
        
    });
}

exports.getInfo = (req, res, next) => {
    res.render('main/info', {
        path: '/info',
    });
}

