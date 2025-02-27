const user = "https://jsonplaceholder.typicode.com/posts";

function loadUserData() {
  fetch(user)
    .then((res) => res.json())
    .then((json) => {
      display(json);
    });

  function display(data) {
    const postContaier = document.getElementById("user-list");
    postContaier.innerHTML = " agerr data deeted"; // ✅ আগের ডাটা মুছবে
    for (const user of data) {
        // console.log(data[0]);
      const postDiv = document.createElement('div');
      postDiv.innerHTML =`
      <h1>user: ${user.userId} </h1>
      <h2>title: ${user.title} </h2>
      <p>Description: ${user.body} </p>
      `
        postContaier.appendChild(postDiv)
    }
  }
}
