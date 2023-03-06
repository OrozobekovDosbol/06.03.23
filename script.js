fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const ul = document.createElement("ul");
    for (let i = 0; i < data.length; i++) {
      const li = document.createElement("li");
      li.textContent = data[i];
      ul.append(li);
    }
    document.body.append(ul);
  });

fetch("./cards.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (cards) {
    const ul = document.createElement("ul");
    for (let i = 0; i < cards.length; i++) {
      const li = document.createElement("li");
      li.textContent = cards[i];
      ul.append(li);
    }
    document.body.append(ul);
  });

fetch("./students.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const ul = document.createElement("ul");
    for (let i = 0; i < data.length; i++) {
      const li = document.createElement("li");
      li.textContent = data[i].name + "" + data[i].score;
      ul.append(li);
    }
    document.body.append(ul);
  });

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const ul = document.createElement("ul");
    for (let i = 1; i < data.length; i++) {
      const li = document.createElement("li");
      li.textContent = i + data[i].title;
      if (data[i].completed) {
        li.style.textDecoration = "line-through";
        li.textContent = "❌" + li.textContent;
      }
      ul.append(li);
    }
    document.body.append(ul);
  })
  .catch(function (reason) {
    console.log(reason);
  });



  fetch("https://jsonplaceholder.typicode.com/photos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const div = document.createElement("div");
    for (let i = 1; i < data.length; i++) {
      const img = document.createElement("img");
      img.alt = data[i].title;
      img.src = data[i].thumbnaiUrl
      const a = document.createElement("a");
      a.title = data[i].title;
      a.href = data[i].url;
      a.target = "_blank"
      a.append(img)

      div.append(a)
    }
    document.body.append(div);
  })
  .catch(function (reason) {
    console.log(reason);
  });