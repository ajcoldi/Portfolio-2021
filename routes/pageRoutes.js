const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/index')
})
router.get('/projects', (req, res) => {
    res.render('pages/projects')
})
router.get('/art', (req, res) => {
    res.render('pages/art')
})
router.get('/blogs', (req, res) => {
    res.render('pages/blogs')
})
router.get('/contact', (req, res) => {
    res.render('pages/contact')
})



router.get('/projects/takeaway', (req, res) => {
    res.render('pages/projects/takeaway/index.ejs')
})

module.exports = router;