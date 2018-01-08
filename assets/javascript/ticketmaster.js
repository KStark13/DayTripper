$( document ).ready(function(){
	//Function that displays activities
	function displayActivities (){
		 var activity = $(this).attr("data-name");
		 var queryURL = "http://api.eventful.com/json/events/search?q=location&app_key=xknQ6SvQTNHGgt7Q";
		 console.log(queryURL);
		$.ajax({
  			url: queryURL,
  			method:'GET'
		})
		.done(function(response){
 		 $("#activity-input").empty();
 		 var results = response.data;
 		 for (var i=0; i<results.length; i++)

 	

 		 console.log(results);
  
		});

	}

});




  


