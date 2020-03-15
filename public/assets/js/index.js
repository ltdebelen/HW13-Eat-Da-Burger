$(() => {
  // Add New Burger (POST Method)
  $("#burger-form").on("submit", event => {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#newBurger")
        .val()
        .trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
      location.reload();
    });
  });
});
