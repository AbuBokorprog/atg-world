const post = "/post.json";
const allPostElement = document.getElementById("allPost");

fetch(post)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((post) => {
      // Create a div element for each post (card)
      const postCard = document.createElement("div");
      postCard.classList.add("post-card"); // You can add a specific class for styling

      // Set the content of the card with post data
      postCard.innerHTML = `
        <div class="allPost">
        <img src="${post?.thumbnail ? post?.thumbnail : ""}" class="thumbnail">
        <div class="category">${post.category}</div>
        <div id="title-three">
        <h3>${post.title}</h3>
        <div class="dropdown">
        <img src="https://cdn-icons-png.flaticon.com/128/2311/2311523.png" class="threeDotIcon" >
        <div class="dropdown-content">
    <a href="#">Edit</a>
    <a href="#">Report</a>
    <a href="#">Option</a>
  </div>
        </div>
        </div>
        <p class="description">${post?.description ? post?.description : ""}</p>
        <div class="author-additional">
        <div class="author-info">
          <img src="${post?.author_img}" alt="Author Image" class="author-img">
          <div class="author-title">${post?.author_name}</div>
        </div>
        <div class="additional-info">
        <div class="views">${post.views}</div>
        <button class="share-button"><img src="https://cdn-icons-png.flaticon.com/128/929/929539.png" class="share"></button>
        </div>
        </div>
        </div>
      `;

      // Append the post card to the "allPost" element
      allPostElement.appendChild(postCard);

      // Event listener for the threeDotIcon
      //   const threeDotIcon = postCard.querySelector(".threeDotIcon");
      //   const dropdownContainer = postCard.querySelector(".dropdown-container");

      //   threeDotIcon.addEventListener("click", () => {
      //     dropdownContainer.classList.toggle("show-dropdown");
      //   });

      //   // Function to handle the "Edit" option
      //   function editPost() {
      //     // Replace with your logic for editing the post
      //     alert("Edit post");
      //     dropdownContainer.classList.remove("show-dropdown");
      //   }

      //   // Function to handle the "Report" option
      //   function reportPost() {
      //     // Replace with your logic for reporting the post
      //     alert("Report post");
      //     dropdownContainer.classList.remove("show-dropdown");
      //   }

      //   // Function for custom option
      //   function customOption() {
      //     // Replace with your logic for the custom option
      //     alert("Custom option");
      //     dropdownContainer.classList.remove("show-dropdown");
      //   }
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
