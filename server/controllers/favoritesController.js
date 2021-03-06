    var FavoriteFilmModel  = require("../../server/models/favoriteItem");

    function handleError(res, error) {
        res.statusCode = 500;
        log.error('Internal error(%d): %s',res.statusCode,error.message);
        return res.send({ error: 'Server error' });
    }

    var favoritesController = {

        getFilmsFromMdb: function (req, res) {
            FavoriteFilmModel.find(function (err, favoritesList) {
                if (!err) {
                    return res.send(favoritesList);
                } else {
                    handleError(res, err);
                }
            });
        },

        saveFilm: function(req, res) {
            var item = new FavoriteFilmModel(req.body);

            item.save(function (err) {
                if (!err) {
                    console.log("Favorites item is created");
                    return res.send({ status: 'OK', item: item });
                } else {
                    res.statusCode = 500;
                    res.send({ error: 'Server error' });
                    log.error('Internal error(%d): %s',res.statusCode,err.message);
                }
            });
        },

        deleteFilm: function(req, res) {
            var item = new FavoriteFilmModel(req.body);

            FavoriteFilmModel.find(
                {filmId: req.params.id}
            ).remove(
                function(err){
                    if (!err) {
                        console.log("Favorites item is deleted");
                        return res.send({ status: 'OK', item: item });
                    }else {
                        res.statusCode = 500;
                        res.send({ error: 'Server error' });
                        log.error('Internal error(%d): %s',res.statusCode,err.message);
                    }
                }
            );
        }    
    }

module.exports = favoritesController;
