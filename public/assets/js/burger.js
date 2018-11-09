// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    //DEVOUR IT
    $(".devour_it_btn").on("click", function(e) {
        e.preventDefault();
        const id = $(this).attr("data-id");
        
        var newState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
        }).then(
        function() {
            console.log("changed devoured to true");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
  
    //ADD NEW BURGER
    $(".add_burger_btn").on("click", function(e) {
      // Make sure to preventDefault on a submit event.
      e.preventDefault();
  
      var newBurger = {
        burger_name: $(".burger_name").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  