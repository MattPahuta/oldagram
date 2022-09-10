const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.querySelector('#main');

const likeIcons = document.querySelectorAll('.like-icon');

// const like = document.querySelector('#like')
// const name = document.querySelector('#name');
// const username = document.querySelector('#username');
// const location = document.querySelector('#location');
// const avatar = document.querySelector('#avatar');
// const post = document.querySelector('#post');
// const likeCount = document.querySelector("#like-count");
// const comment = document.querySelector('#comment');

function renderPosts() {
    let postHtml = '';

    posts.forEach(post => {
        postHtml += `
        <section class="post">
        <!-- individual post header -->
        <div class="post-header flex">
          <div class="post-avatar-container">
            <img class="avatar post-avatar" src="${post.avatar}" alt="">
          </div>
          <div class="post-user-details">
            <p class="post-user-name fw-bold">${post.name}</p>
            <p class="post-user-location fs-200">${post.location}</p>
          </div>
        </div>
        <!-- post image -->
        <div class="post-image">
          <img src="./${post.post}" alt="post by ${post.name}">
        </div>

        <div class="post-body flex">
          <!-- post interaction icons -->
          <div class="icon-container flex">
            <img class="icon like-icon" src="./images/icon-heart.png" alt="">
            <img class="icon" src="./images/icon-comment.png" alt="">
            <img class="icon" src="./images/icon-dm.png" alt="">
          </div>
          <!-- like count -->
          <p class="like-count fw-bold"><span>${post.likes}</span> likes</p>
          <!-- post comments -->
          <p class="post-title"><span class="username fw-bold">${post.username}</span id="comment"> ${post.comment}</p>
        </div>
      </section>
       `
    })

    main.innerHTML = postHtml;
}

// Todo - add event listeners to like icon for rendered posts, link to associated post
function addLikeListeners() {

}

// fix this - get click listeners applied to like icons, dbl-click on posts
likeIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    console.log('Added anotha like!')
  })
})

renderPosts();