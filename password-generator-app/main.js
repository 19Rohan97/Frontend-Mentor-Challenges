function rangeSlide(value) {
  document.getElementById("rangeValue").innerHTML = value;
  console.log(value);
}

$(document).ready(function () {
  $(".error").hide();

  $(".generate").on("click", function (e) {
    e.preventDefault();

    var passwordLength = $("#rangeValue").text();
    let password = "";

    if (passwordLength >= 1 && passwordLength < 5) {
      $(".strength-range").attr("class", "strength-range too-weak");
    } else if (passwordLength >= 5 && passwordLength < 10) {
      $(".strength-range").attr("class", "strength-range weak");
    } else if (passwordLength >= 10 && passwordLength < 15) {
      $(".strength-range").attr("class", "strength-range medium");
    } else if (passwordLength >= 15 && passwordLength <= 20) {
      $(".strength-range").attr("class", "strength-range strong");
    } else {
      $(".strength-range").attr("class", "strength-range");
    }

    let chars =
      "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}?><";
    //   string.replace(/\d+/g, '') // Replace numbers

    for (let i = 0; i < passwordLength; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }

    $("#password").val(password);
  });

  $(".copied").hide();
  $(".copy").on("click", function () {
    var pass = $("#password").val();
    if (pass != "") {
      $(".copied").show();
      navigator.clipboard.writeText(pass);
    }
  });
});
