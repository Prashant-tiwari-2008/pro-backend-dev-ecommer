const BigPromise = require('../middleware/bigPromise');
const bigPromise = require('../models/bigPromise');

exports.home = bigPromise((req, res) => {
    res.status(200).json({
        success: true,
        greeting: "hello from api"
    })
})

exports.homeDummy = (req, res) => {
    res.status(200).json({
        success: true,
        greeting: "hello from Dummy api"
    })
}