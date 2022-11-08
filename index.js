const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        id: 0,
        liked: false,
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        id: 1,
        liked: false,
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        id: 2,
        liked: false,
    }
];

const main = document.querySelector('#main');

function renderPosts() {
  let postHtml = '';

  posts.forEach((post) => {
    postHtml += `
      <section class="post">
      <div class="post-header flex">
        <div class="post-avatar-container">
          <img class="avatar post-avatar" src="${post.avatar}" alt="">
        </div>
        <div class="post-user-details">
          <p class="post-user-name fw-bold">${post.name}</p>
          <p class="post-user-location fs-200">${post.location}</p>
        </div>
      </div>
      <div>
        <img id="img-${post.id}" class="post-image" src="./${post.post}" alt="post by ${post.name}" data-img="${post.id}">
      </div>
      <div class="post-body flex">
        <div class="icons-container flex">
          <span class="icon-container"><i id="${post.id}" class="heart-${post.id} icon fa-regular fa-heart"></i></span>
          <span class="icon-container"><img class="icon" src="./images/icon-comment.png" alt=""></span>
          <span class="icon-container"><img class="icon" src="./images/icon-dm.png" alt=""></span>
        </div>
        <p class="fw-bold"><span class="like-count post-${post.id}">${post.likes}</span> likes</p>
        <p class="post-title"><span class="username fw-bold">${post.username}</span id="comment"> ${post.comment}</p>
      </div>
    </section>
    `
  });

  main.innerHTML = postHtml; // add html to the DOM
  addEventListeners(); // add event listeners to post images and heart icons

}

function addEventListeners() {
  // get all the img elements
  document.querySelectorAll('.post-image').forEach(img => {
    img.addEventListener('dblclick', (e) => {
      const imgId = e.target.dataset.img; // get the dataset img ID
      likePost(imgId); // call likePost function
    })
  })
  // get all the heart icons
  document.querySelectorAll('.fa-heart').forEach(heart => {
    heart.addEventListener('click', (e) => {
      postId = e.target.id;
      likePost(postId); // call the likePost function
    })
  })
}

function likePost(postId) {
  const likeCount = document.querySelector(`.post-${postId}`);
  const heartIcon = document.querySelector(`.heart-${postId}`);

  if (!posts[postId].liked) { // if not liked, do this:
    posts[postId].likes += 1; // increment the post object's like property
    likeCount.textContent = posts[postId].likes; // get the updated like count, update DOM
    posts[postId].liked = true; // toggle liked prop to true
    heartIcon.classList.add('liked'); // add the liked class to color the heart icon
  } else if (posts[postId].liked === true) { // if you already liked it, do this:
    posts[postId].likes -= 1; // decrement the post object's like property
    likeCount.textContent = posts[postId].likes; // update the DOM
    posts[postId].liked = false; // toggle the liked prop to false
    heartIcon.classList.remove('liked'); // remove the liked class to remove the color
  }
  
}

renderPosts();
