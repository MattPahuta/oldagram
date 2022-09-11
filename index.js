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
]

const main = document.querySelector('#main');

const renderPosts = () => {
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
      <div class="post-image">
        <img src="./${post.post}" alt="post by ${post.name}">
      </div>
      <div class="post-body flex">
        <div class="icons-container flex">
          <span class="icon-container"><i onclick="likePost(${post.id})" id="${post.id}" class="heart-${post.id} icon fa-regular fa-heart"></i></span>
          <span class="icon-container"><img class="icon" src="./images/icon-comment.png" alt=""></span>
          <span class="icon-container"><img class="icon" src="./images/icon-dm.png" alt=""></span>
        </div>
        <p class="fw-bold"><span class="like-count post-${post.id}">${post.likes}</span> likes</p>
        <p class="post-title"><span class="username fw-bold">${post.username}</span id="comment"> ${post.comment}</p>
      </div>
    </section>
    `
  });

  main.innerHTML = postHtml;

}

/* <img onclick="likePost(${post.id})" class="icon like-icon" id="${post.id}" src="./images/icon-heart.png" alt="">
*/

// Todo - add event listeners to like icon for rendered posts, link to associated post
// main.addEventListener('click', (e) => {
//   if (e.target.classList.contains('like-icon')) {
//     console.log('like icon clicked');

//   }
// })

function likePost(postId) {
  console.log(postId)
  // console.log(posts[postId])
  // posts[postId].likes += 1;
  // console.log(posts[postId])
  const likeCount = document.querySelector(`.post-${postId}`);
  const heartIcon = document.querySelector(`.heart-${postId}`);

  if (!posts[postId].liked) { // if not liked, do this:
    posts[postId].likes += 1; // increment the post object's like property
    likeCount.textContent = posts[postId].likes; // get the updated like count, update DOM
    posts[postId].liked = true; // toggle liked prop to true
    heartIcon.classList.add('liked'); // 
    console.log(posts[postId])
  } else if (posts[postId].liked === true) {
    console.log('liked is true')
    posts[postId].likes -= 1;
    likeCount.textContent = posts[postId].likes;
    posts[postId].liked = false;
    heartIcon.classList.remove('liked');
  }

  
}

renderPosts();
