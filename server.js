//server.js
var express = require('express')
var Twitter = require('twitter')
var CronJob = require("cron").CronJob

var app = express()

var twitter= new  Twitter({
  consumer_key:'zMsBbF55dsMgBgI8NczgWaauT',
  consumer_secret:'1f0u7oJ3mnRgL9W0RMUzltO4MLAMtva1HagnCYItOLoKustIaJ',
  access_token_key:'717125061644124160-1qaIvhLZhO8dxcBMKCDrLPJixf65gmA',
  access_token_secret:'vS66YeB5Dnd7E2Iw2zdkKg14TvcF0KLBT8U2yiS3rVK9R'
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
