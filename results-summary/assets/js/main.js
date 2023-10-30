$(document).ready(function () {
  // Define the path to your data.json file
  var jsonFile = "data.json";

  // Get the UL element
  var dataList = $("#data-list");

  var totalScore = 0;

  // Fetch the JSON data using AJAX
  $.ajax({
    url: jsonFile,
    dataType: "json",
    success: function (data) {
      // Loop through the JSON data and create list items
      $.each(data, function (index, item) {
        var listItem = $("<div class='result-block'>");
        totalScore = totalScore + item.score;
        listItem.html(
          '<div class="left"><img src="' +
            item.icon +
            '" alt="' +
            item.category +
            '"><span>' +
            item.category +
            "</span></div>" +
            '<div class="right"><sapn class="result-block-value">' +
            item.score +
            "</span><span>&nbsp;/&nbsp;100</span></div>"
        );
        dataList.append(listItem);
      });
      var counterElement = $(".counter");
      counterElement.attr("data-target", Math.round(totalScore / 4));
    },
    error: function (error) {
      console.log("Error loading JSON data: " + error);
    },
  });

  /**
   * Counter JS
   */
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;

      const increment = target / 200;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
});
