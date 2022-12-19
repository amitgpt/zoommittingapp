const express = require("express");
const router = express.Router();
const requestPromise = require("request-promise");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const payload = {
  iss: 'dM2ffQSXR0-kKq1qz5GQJQ', //your API KEY
  exp: new Date().getTime() + 5000,
};
const token = jwt.sign(payload, 'u9k86Ooy3tWoxEeJLNl66DjMPlPaQ6PbB3PG'); //your API SECRET HERE

router.get("/createMeeting", (req, res) => {
  email = "yacexis770@paxven.com"; // your zoom developer email account
  var options = {
    method: "POST",
    uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
    body: {
      topic: "Zoom Meeting Using Node JS", //meeting title
      type: 1,
      settings: {
        host_video: "true",
        participant_video: "true",
      },
    },
    auth: {
      bearer: token,
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json",
    },
    json: true, //Parse the JSON string in the response
  };

  requestPromise(options)
    .then(function (response) {
      console.log("response is: ", response);
      res.send("create meeting result: " + JSON.stringify(response));
    })
    .catch(function (err) {
      // API call failed...
      console.log("API call failed, reason ", err);
    });
});

module.exports = router;