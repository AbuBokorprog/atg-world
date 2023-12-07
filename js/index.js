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
      const postCard = document.createElement("div");
      postCard.classList.add("post-card");

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
        </div>

        <div id="location-other-info">
              <p>${post?.company ? post?.company : ""}</p>
              <p>${post?.date ? post?.date : ""}</p>
              <p>${post?.location ? post?.location : ""}</p>
            </div>


        <div class="author-additional">
        <div class="author-info">
          <img src="${post?.author_img}" alt="Author Image" class="author-img">
          <div class="author-title">${post?.author_name}</div>
        </div>
        <div class="additional-info">
        <div class="views">${post.views}</div>
        <button class="share-button">
        <img src="https://cdn-icons-png.flaticon.com/128/929/929539.png" class="share">
        </button>
        </div>
        </div>
        </div>
      `;

      allPostElement.appendChild(postCard);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
