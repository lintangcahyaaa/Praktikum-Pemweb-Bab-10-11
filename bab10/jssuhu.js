function convert(event) {
  event.preventDefault();
  let from = $("#from").val();
  let to = $("#to").val();
  let value = Number($("#number").val());

  console.log(from);
  console.log(to);

  let result = value;

  if (from === "c" && to === "r") {
    result = (4 * value) / 5;
  } else if (from === "c" && to === "f") {
    result = (value * 9) / 5 + 32;
  } else if (from === "r" && to === "c") {
    result = (5 * value) / 4;
  } else if (from === "r" && to === "f") {
    result = (value * 9) / 4 + 32;
  } else if (from === "f" && to === "c") {
    result = (5 * (value - 32)) / 9;
  } else if (from === "f" && to === "r") {
    result = (4 * (value - 32)) / 9;
  }

  $("#initial h3").text(value + " °");
  $("#result h3").text(result.toFixed(2) + " °");

  $("#initial span").text(from.toUpperCase());
  $("#result span").text(to.toUpperCase());
}
