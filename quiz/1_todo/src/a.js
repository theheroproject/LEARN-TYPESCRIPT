const items = [
  { id: 1, title: "안녕", done: false },
  { id: 2, title: "타입", done: false },
  { id: 3, title: "스크립트", done: false },
];

let filtered = items.filter(function (item) {
  if (item.title === "안녕") {
    return item;
  }
});

console.log(filtered);
