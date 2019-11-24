//server.js
var express = require('express')
var Twitter = require('twitter')
var CronJob = require("cron").CronJob

var app = express()

var twitter= new  Twitter({
  consumer_key:process.env['CONSUMER_KEY'],
  consumer_secret:process.env['CONSUMER_SECRET'],
  access_token_key:process.env['ACCESS_TOKEN_KEY'],
  access_token_secret:process.env['ACCESS_TOKEN_SECRET']
})

var cronTime='0 25 * * * *'
new CronJob({
  cronTime: cronTime,
  onTick: function(){
    cycleTweet()
  },
  start:true
})

//つぶやく関数
function cycleTweet(){
  var dateTime= new Date()
	var tips='Hello World ' + dateTime.toString()

	//自動投稿
	twitter.post('statuses/update',{status: tips},(err,tweet,response)=>{
		if(err){
			return console.log(err)
		}else{
			return console.log(tweet)
		}
	})
}
