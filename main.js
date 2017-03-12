  $(document).ajaxStart(function(){
    $("#user-image").attr("src","8puiO.gif");
  }).ajaxStop(function(){
    console.log("Ajax Stopped.")
  }).ajaxSuccess(function(){
    console.log("Ajax Success")
  }).ajaxComplete(function(){
    console.log("Ajax Completed")
  })

  $(document).ready(function(){
  $("#get-data").on("click",function(){
    //var username = $("#username").val();
    //console.log(username);
    $.ajax({
      url:"https://public-api.wordpress.com/rest/v1/sites/dotnetask.wordpress.com",
      success: function(data){
      //  alert("success")
        console.log(data)
        $("#user-id").val(data.ID);
          $("#user-name").val(data.name);
        $("#desc").val(data.description);
        // $("#user-email").val("Email-id is: "+data.email);
        //   $("#user-url").val("Url is: "+data.url);
        //     $("#user-created").text("Account was created at: "+data.created_at);
        //     $("#user-location").text("location is: "+data.location);
      },
      error: function(){
        // $("#user-image").attr("src","512pxIcon-sunset_photo_not_found.png");
        alet("error")
        $("#user-name").text("User not found!");
      }
    })
  })
});
