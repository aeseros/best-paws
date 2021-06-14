// Mobile Menu Function
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
});

// When Document is ready, THEN load Functions
$(document).ready(function () {
    // YouTube API
    var key = "";
    var playlistId = "PL_lgr1_NiQp8-w1mwUVkA1Y55EMmbit_J";
    // HTTP Request URL
    var URL = "https://www.googleapis.com/youtube/v3/playlistItems";
    // Response from API, specified in YouTube API Documentation
    var options = {
        part: "snippet",
        key: key,
        maxResults: 5,
        playlistId: playlistId
    }
    // Calling the Function
    loadVids();
    // Request sent with jQuery returning the function of "data"
    function loadVids() {
        $.getJSON(URL, options, function (data) {
            console.log(data)
            var id = data.items[0].snippet.resourceId.videoId;
            // Make API Call then Load mainVid
            mainVid(id);
            resultsLoop(data);
        });
    }

    function mainVid(id) {
        // ` Allows the use of Variables directly into the String -- Looking for $variable(id)
        $("#video").html(`
			<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			`);
    }

    // Loop through Items Array and Add Another Video
    function resultsLoop(data) {
        // For Each Data Item
        $.each(data.items, function (i, item) {
            // Variables Displayed for Thumbnail Looped Videos
            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 150); // Up to 100 Characters
            var vid = item.snippet.resourceId.videoId; // videoId from Console Log

            $("main").append(`
			<article class="item" data-key="${vid}">

			<img src="${thumb}" alt="" class="thumb">
			<div class="details">
				<h4>${title}</h4>
				<p>${desc}</p>
			</div>
            </article>
	        `);
        });
    }

    // Click Event for Article Videos
    $("main").on("click", "article", function () {
        var id = $(this).attr("data-key"); // Selects "data-key" which is individual per Video
        mainVid(id); // Sends Thumb video to "Main"
    });


    // GeoLocation API -- Permission Panel Asking User for Actual Position/Location
    const successCallback = (position) => {
        console.log(position);
    };
    // If Permission is Denied, Unavailable or Timeout
    const errorCallback = (error) => {
        console.error(error);
    };
    // Allows Updates as Users Position Changes
    // const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback);

    // Dog Parks Array (using the Shortcut for a New Array = [] in scope)
    // var parks = [];
    // $("#auto-complete").on("click", function (event) {
    //     $("#display-results").empty();
    //     parks = [];
    //     let zipCode = $("#zip-input").val();
    //     // Map Quest API -- Pulls information from Parameters
    //     var mapquestQuery = "https://www.mapquestapi.com/geocoding/v1/address?key=d5gSCP90yDE05j7pqKiqfVqbC53mLpmC&location=" + zipCode
    //     // Calling Latitude and Longitude for given zipCode

    //     $.ajax({
    //         url: mapquestQuery,
    //         method: "GET"
    //     }).then(function (response) {
    //         console.log(response)
    //         let lat = (response.results[0].locations[0].displayLatLng.lat);
    //         let lon = (response.results[0].locations[0].displayLatLng.lng);
    //         var weatherQuery = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=9252538e0cdc637a6781b199ba8f3ff7";

    //         // Second Call Posting Weather into Console
    //         $.ajax({
    //             url: weatherQuery,
    //             method: "GET"
    //         }).then(function (response) {
    //             console.log(response)
    //         });
    //     });
    // });
});
