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
    data.forEach((post) => {
      const postCard = document.createElement("div");
      postCard.classList.add("post-card");

      postCard.innerHTML = `
        <div class="my-4 width-75">
        <div class="">
        <img src="${post?.thumbnail ? post?.thumbnail : ""}" class="thumbnail">
        <div class="category px-2">${post.category}</div>
        <div class="px-2" id="title-three">
        <h3 >${post.title}</h3>
        <div class="dropdown">
        <img src="https://cdn-icons-png.flaticon.com/128/2311/2311523.png" class="threeDotIcon" >
        <div class="dropdown-content">
    <a href="#">Edit</a>
    <a href="#">Report</a>
    <a href="#">Option</a>
  </div>
        </div>
        </div>
        <p class="description px-2">${
          post?.description ? post?.description : ""
        }</p>
        </div>

        <div class="px-2 grid row">
              <p class="col">${post?.company ? post?.company : ""}</p>
              <p class="col">${post?.date ? post?.date : ""}</p>
              <p class="col">${post?.location ? post?.location : ""}</p>
            </div>


        <div class="author-additional px-2">
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
        </div>
      `;

      allPostElement.appendChild(postCard);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
