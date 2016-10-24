var mongoose 		= require("mongoose");
var Campground 	= require("./models/campground");
var Comment			= require("./models/comment");

var data 				= [
	{
		name: "Cloud's Nest",
		image: "http://www.hutui6.com/data/out/32/67213509-camping-wallpapers.jpg",
		description: "Tip steak pastrami, shankle tail shankle ham tip beef andouille braunschweiger, ham pork braunschweiger ham ham pancetta ham leberkas, pastrami cow landjaeger cow pork porchetta drumstick, landjaeger beef jerky ham jerky. Filet shoulder leberkas cow fatback bregenwurst ham sirloin pig cow mignon pork ham andouille ham hock tip pastrami pig short, salami braunschweiger brisket."
	},
	{
		name: "Stone Trail",
		image: "http://il9.picdn.net/shutterstock/videos/11865671/thumb/1.jpg",
		description: "Tip steak pastrami, shankle tail shankle ham tip beef andouille braunschweiger, ham pork braunschweiger ham ham pancetta ham leberkas, pastrami cow landjaeger cow pork porchetta drumstick, landjaeger beef jerky ham jerky. Filet shoulder leberkas cow fatback bregenwurst ham sirloin pig cow mignon pork ham andouille ham hock tip pastrami pig short, salami braunschweiger brisket."
	},
	{
		name: "Rattlesnake Peak",
		image: "http://wallpaper.zone/img/389338.jpg",
		description: "Tip steak pastrami, shankle tail shankle ham tip beef andouille braunschweiger, ham pork braunschweiger ham ham pancetta ham leberkas, pastrami cow landjaeger cow pork porchetta drumstick, landjaeger beef jerky ham jerky. Filet shoulder leberkas cow fatback bregenwurst ham sirloin pig cow mignon pork ham andouille ham hock tip pastrami pig short, salami braunschweiger brisket."
	}
];

function seedDB() {
	// REMOVE ALL CAMPGROUNDS
	Campground.remove({}, function(err) {
		if(err) {
			console.log(err);
		}
		console.log("Removed Campgrounds.");
			// ADD A FEW CAMPGROUNDS
			data.forEach(function(seed) {
				Campground.create(seed, function(err, campground) {
					if(err) {
						console.log(err);
				} else {
					console.log("Added a campground.");
				// ADD A FEW COMMENTS
					Comment.create(
						{
							text: "This place is great, but i wish there was internet!!",
							author: "Homer"
						}, function(err, comment) {
							if(err) {
								console.log(err);
							} else {	
								campground.comments.push(comment);
								campground.save();
								console.log("Created new comment!");
							}
						});
				}	
			});
		});
	});	

}

module.exports = seedDB;


