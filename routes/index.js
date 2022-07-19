var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req
    , res, next) {
    res.render('index', {
        title: 'Express',
        name: 'HUY NGUYEN'
    });
});

router.get('/news', function (req, res) {

    // 1 bien binh thuong
    var name = 'Huy Nguyen'
    var tuoi = 222;

    // mang - array
    var mang = [4,5,6,4,6,7,7,66,7];
    var mangTen = ['HUy','Quynh','Sang','Giang','Day'];

    res.render('news',{
        ten : name,
        year : tuoi,
        arr1 : mang,
        arr2 : mangTen
    });
})


module.exports = router;
