module.exports = router => {

    router.get('/hello', (req, res) => {
       res.json("Hello World");
    });
}


