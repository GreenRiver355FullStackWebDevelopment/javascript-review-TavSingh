//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  // I needed to refresh on forms so I used W3Schools: https://www.w3schools.com/jsref/dom_obj_form.asp
  // Learned about .preventDefault(): https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  e.preventDefault(); 

  const username = document.querySelector("#username");
  const image = document.querySelector("#image");
  const star = document.querySelector("#star");
  const review = document.querySelector("#review");

  const newReview = {
    username: username.value,
    image: image.value,
    star: parseInt(star.value),
    review: review.value
  };

  reviews.push(newReview);

  renderReviews(newReview);

  form.reset();
});

// Render the reviews
function renderReviews(review) {
  const container = document.createElement("div");
  container.classList.add("review_container");

  const img = document.createElement("img");
  img.src = review.image;
  container.appendChild(img);

  const innerDivTag = document.createElement("div");
  const usernamePTag = document.createElement("p");

  usernamePTag.textContent = review.username;
  innerDivTag.appendChild(usernamePTag);

  const ratingPTag = document.createElement("p");
  // my source for the emoji: https://www.shecodes.io/athena/36937-how-to-add-emojis-in-javascript-code
  ratingPTag.textContent = "⭐".repeat(review.star);
  innerDivTag.appendChild(ratingPTag);

  const reviewPTag = document.createElement("p");
  reviewPTag.textContent = review.review;
  innerDivTag.appendChild(reviewPTag);

  container.appendChild(innerDivTag);
  document.body.appendChild(container);
}

reviews.forEach(renderReviews);