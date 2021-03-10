const axios = require('axios');

let apiLink = '';

module.exports = class Whale {

    static getCoordintes(whale, since, until, cb) {

        if(since){
            since = since + '-01';
        }

        if(until){
            until = until + '-01';
        }
        
        apiLink = 'http://hotline.whalemuseum.org/api.json?species=' + whale + '&since=' + since + '&until=' + until + '&limit=50';
        
        
        axios.get(apiLink)
            .then(res => {
                const reports = res.data;
                const coordinates = [];
                for (let report of reports) {
                    coordinates.push({ lat: report.latitude, lng: report.longitude })
                }
                // console.log(res.data)
                return coordinates;
            })
            .then((coordinates)=>{
                const qtyLink = 'http://hotline.whalemuseum.org/api/count.json?species=' + whale + '&since=' + since + '&until=' + until;
                axios.get( qtyLink)
                .then(res => {
                    // console.log(res.data)
                    const qty = res.data;
                    cb(coordinates, qty)
                })

            })
            .catch(err => {
                console.log(err)
            })
    }

    static getApiLink() {
        return apiLink;
    }
}

