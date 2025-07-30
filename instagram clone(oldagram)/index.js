const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

let isLiked = false;
const section = document.getElementById("section1");

for (let i = 0; i < posts.length; i++) {
  section.innerHTML += `<div class="container">
         
          <div class="img">
            <img
              class="avatar"
              src=${posts[i].avatar}
              alt="posters avatar" />
            <div class="div">
              <p class="bold mb">${posts[i].name}</p>
              <p class="mt">${posts[i].location}</p>
            </div>
          </div>
        </div>
        <div class="img-post">
          <img src=${posts[i].post} alt="" srcset="" />
          <div class="comment-container">
          <div class="icons">
            <img src="images/icon-heart.png" alt="" srcset="" class="like-icon"/>
            
            <img src="images/icon-comment.png" alt="" srcset="" />
            
            <img src="images/icon-dm.png" alt="" srcset="" />
          </div>
          <p class="bold likes" id="like">${posts[i].likes} likes</p>
          <p class="bold username">
            ${posts[i].username} <span class="light">${posts[i].comment}</span>
          </p>
        </div>
       `;
  toggleLikes();
}

function toggleLikes() {
  const likeIcon = document.querySelectorAll(".like-icon");
  const like = document.querySelectorAll(".likes");

  for (let j = 0; j < likeIcon.length; j++) {
    likeIcon[j].addEventListener("click", function () {
      isLiked = !isLiked;
      if (isLiked) {
        likeIcon[j].src = "images/heart-icon-active.png";
        like[j].innerText = posts[j].likes + 1 + " likes";
      } else {
        likeIcon[j].src = "images/icon-heart.png";
        like[j].innerText = posts[j].likes + " likes";
      }
    });
  }
}
