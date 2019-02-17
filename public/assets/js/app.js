
$(document).ready(function () {
    
    $("#addBurger").on("submit", function (event) {
        event.preventDefault();      
        var burgeName = $("#burgerName").val().trim();

        $.ajax("/add", {
            type: "POST",
            data: { burgeName }
        }).then(function (data) {
          
            location.reload("/");
        });
    })

    $(".delquote").on("click", function (event) {
        event.preventDefault();
        var burger_id = $(this).data("id");
        
        $.ajax("/upd/" + burger_id, {
            type: "post",
            data: { burger_id }
        }).then(function () {
            location.reload("/");
        })
    })
})


