var friends = require("../app/data/friends.js");

module.exports = function(app) {

	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

    app.post("/api/friends", function(req, res){
         if()

    }


}