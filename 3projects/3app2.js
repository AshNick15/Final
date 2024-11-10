let data = [
  {
    name: "Emma",
    age: "30",
  },
  {
    name: "Noah",
    age: "30",
  },
  {
    name: "Nick",
    age: "24",
  },
  {
    name: "Jessica",
    age: "27",
  },
  {
    name: "Olivia",
    age: "33",
  },
  {
    name: "Kai",
    age: "35",
  },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
  return "<div>" + item.name + " " + "is " + item.age + " years old" + "</div>";
});

info.innerHTML = details.join("\n");
