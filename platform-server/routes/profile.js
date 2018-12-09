const express = require('express');
const router = express.Router();
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads/')
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
var upload = multer({storage: storage});


router.post('/profile/update/avatar', upload.single('thumbnail'), (req, res, next) => {
    var file = req.file;
    res.send("uploaded");
})

module.exports = router;