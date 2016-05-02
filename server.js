'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

//test data
var playlists = {
	"playlistA": [
		{
			username: 'jeff',
			songUri: 'test/uri',
			played: false
		},
		{
			username: 'pat',
			songUri: 'test/uri',
			played: false
		},
		{
			username: 'rachel',
			songUri: 'test/uri',
			played: true
		}
	],
	"playlistB": [
		{
			username: 'jeff2',
			songUri: 'test/uri',
			played: false
		},
		{
			username: 'pat2',
			songUri: 'test/uri',
			played: false
		},
		{
			username: 'rachel2',
			songUri: 'test/uri',
			played: true
		}
	]
};

//get all playlists
app.get('/playlists', function(req, res) {
  res.send(Object.keys(playlists));
});

//get playlist by title
app.get('/playlists/:title', function(req, res, next) {
  var title = req.params.title;

  var playlist = playlists[title];
  res.send(playlists[title]);
});

//create playlist
app.post('/playlists', function(req, res) {
	var title = req.body.title;

	//check if playlist title already exists
	if(!playlists[title]) {
		playlists[title] = [];

		console.log('playlist created successfully.');
		res.sendStatus(200);
	} else {
		console.log('playlist title already exists');
		res.sendStatus(409);
	}
});

//add song to playlist
app.post('/playlists/:title/songs', function(req, res) {
	var songUri = req.body.songUri;
	var username = req.body.username;
	var title = req.params.title

	//check if playlist exists
	if(playlists[title]) {
		playlists[title].push({
			username: username,
			songUri: songUri,
			played: false
		})

		console.log('song added to playlist.');
		res.sendStatus(200);
	} else {
		console.log('playlist does not exist');
		res.sendStatus(500);
	}
});

app.listen(port, function () {
  console.log('Server is running on port ' + port);
});