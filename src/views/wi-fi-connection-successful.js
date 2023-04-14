import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './wi-fi-connection-successful.css'

const WiFiConnectionSuccessful = (props) => {
  return (
    <div className="wi-fi-connection-successful-container">
      <Helmet>
        <title>WiFi-Connection-Successful - Harker Contracting, LLC</title>
        <meta
          property="og:title"
          content="WiFi-Connection-Successful - Harker Contracting, LLC"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1be7eee1-e2db-4895-88d0-1e361ec098a1/17fb84e5-5960-4eca-9a50-a626e08a01c1?org_if_sml=1"
        />
      </Helmet>
      <div className="wi-fi-connection-successful-banner">
        <img
          alt="image"
          src="/playground_assets/harker%20monogram%20-%20complete%20-%20black-200h.png"
          className="wi-fi-connection-successful-image"
        />
        <h1 className="wi-fi-connection-successful-text">
          Connection Successful!
        </h1>
        <span className="wi-fi-connection-successful-text01">
          <span>
            Thanks for connecting! As a reminder, use of this network is subject
            to the terms of service you agreed to when connecting. If you
            didn&apos;t read them, go ahead and click the button below to take a
            gander.
          </span>
          <br></br>
          <br></br>
          <span>
            Your connection will expire 8 hours from now. At that point, you
            will be required to reconnect.
          </span>
          <br></br>
          <br></br>
          <span>Happy browsing!</span>
          <br></br>
          <br></br>
          <span className="wi-fi-connection-successful-text11">
            -The Harkers-
          </span>
          <br></br>
        </span>
        <div className="wi-fi-connection-successful-div">
          <DangerousHTML
            html={`<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style>
		#countdown {
			font-size: 48px;
			font-family: Arial, sans-serif;
			font-weight: regular;
			color: black;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
			margin: 0;
		}
	</style>
</head>
<body>
	<div id="countdown"></div>

	<script>
		var countDownDate = new Date().getTime() + (8 * 60 * 60 * 1000); // Set the timer for 8 hours from now

		var x = setInterval(function() {

			var now = new Date().getTime();
			var distance = countDownDate - now;

			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

			if (distance < 0) {
				clearInterval(x);
				document.getElementById("countdown").innerHTML = "EXPIRED";
			}
		}, 1000);
	</script>
</body>
</html>
`}
          ></DangerousHTML>
        </div>
        <Link
          to="/wi-fi-terms-of-service"
          className="wi-fi-connection-successful-navlink button"
        >
          Read the Terms of Service
        </Link>
      </div>
    </div>
  )
}

export default WiFiConnectionSuccessful
