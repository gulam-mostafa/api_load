// // const user = "https://jsonplaceholder.typicode.com/posts";
// const user = "https://newsdata.io/api/1/latest?apikey=pub_695766572bc9b326846ca158b41b66bb14aaa&category=politics&country=bd";

// function loadUserData() {
//   fetch(user)
//     .then((res) => res.json())
//     .then((json) => {
//       display(json);
//     });

//   function display(data) {
//     // console.log(data)
//     const postContaier = document.getElementById("user-list");
//     postContaier.innerHTML = " agerr data deeted"; // ✅ আগের ডাটা মুছবে
//     for (const user of data) {
//       console.log(data);
//       const postDiv = document.createElement("div");
//       postDiv.classList.add("m-16", "bg-orange-100");
//       postDiv.classList.add('text-red-500');
//       postDiv.innerHTML = `
//       <h1 class="text-xl text-cente bg-gray-300 p-6 font-bold text-blue-500">user: ${user.userId} </h1>
//       <h2>title: ${user.title} </h2>
//       <p class="text-sm p-8 m-4 text-orange-600">Description: ${user.body} </p>
//       `;
//       postContaier.appendChild(postDiv);
//     }
//   }
// }

const user = "https://newsdata.io/api/1/latest?apikey=pub_695766572bc9b326846ca158b41b66bb14aaa&category=politics&country=bd";

function loadUserData() {
  fetch(user)
    .then((res) => res.json())
    .then((json) => {
      display(json.results); // API থেকে মূল ডাটা আসে `results` অবজেক্টে
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function display(data) {
  const postContainer = document.getElementById("user-list");
  postContainer.innerHTML = "আগের ডাটা ডিলিটেড"; // ✅ আগের ডাটা মুছে ফেলা হচ্ছে

  data.forEach((newsItem) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("ml-72", "mr-72", "bg-orange-100", "p-4", "rounded", "shadow-md" ,"flex", "justify-center", "flex-col", "mt-4" );

    postDiv.innerHTML = `
      <h1 class="text-xl text-center w-50 bg-gray-300 p-6 font-bold text-blue-500">
        Source: ${newsItem.source_id || "Unknown"}
      </h1>
      <h2 class="text-lg font-semibold text-gray-800"> ${newsItem.title}</h2>
      <p class="text-sm p-4 text-orange-600">Description: ${newsItem.description || "No description available"} </p>
 
      <img src="${newsItem.image_url}" alt="">
    `;

    postContainer.appendChild(postDiv);
  });
}

