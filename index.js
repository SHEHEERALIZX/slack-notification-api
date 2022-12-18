const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 3000;
require('dotenv').config()




const slack_webhook_url = process.env.SLACK_WEB_HOOK


let  slack0bj = {
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "You have a new request:\n*<fakeLink.toEmployeeProfile.com|Fred Enriquez - New device request>*"
			}
		},
		{
			"type": "section",
			"fields": [
				{
					"type": "mrkdwn",
					"text": "*Type:*\nComputer (laptop)"
				},
				{
					"type": "mrkdwn",
					"text": "*When:*\nSubmitted Aut 10"
				},
				{
					"type": "mrkdwn",
					"text": "*Last Update:*\nMar 10, 2015 (3 years, 5 months)"
				},
				{
					"type": "mrkdwn",
					"text": "*Reason:*\nAll vowel keys aren't working."
				},
				{
					"type": "mrkdwn",
					"text": "*Specs:*\n\"Cheetah Pro 15\" - Fast, really fast\""
				}
			]
		},
		{
			"type": "actions",
			"elements": [
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"emoji": true,
						"text": "Approve"
					},
					"style": "primary",
					"value": "click_me_123"
				},
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"emoji": true,
						"text": "Deny"
					},
					"style": "danger",
					"value": "click_me_123"
				}
			]
		}
	]
}

let count = 0

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get('/hostname',(req,res)=>{
    count++
    axios.post(slack_webhook_url,slack0bj).then((result)=>{
   
        res.send(`Successfully submittted \n ${count} request`)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

