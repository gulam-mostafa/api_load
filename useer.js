const user = "https://jsonplaceholder.typicode.com/posts";

function loadUserData() {
  fetch(user)
    .then((res) => res.json())
    .then((json) => {
      display(json);
    });

  function display(data) {
    const ul = document.getElementById("user-list");
    ul.innerHTML = " agerr data deeted"; // ✅ আগের ডাটা মুছবে
    for (const user of data) {
        // console.log(data[0]);
      const li = document.createElement("li");
      li.innerText =('-> '+ user.title );
      ul.appendChild(li);
    }
  }
}
