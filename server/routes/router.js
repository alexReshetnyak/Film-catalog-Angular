var express = require('express'),
    router  = express.Router(),
    favoritesController  = require("../../server/controllers/favoritesController");

router.get('/api/films', favoritesController.getFilmsFromMdb);
router.post('/api/film', favoritesController.saveFilm);
router.delete('/api/film/:id', favoritesController.deleteFilm);


module.exports = router;