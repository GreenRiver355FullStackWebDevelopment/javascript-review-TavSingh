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

// Selected the form and saved it as a const
const form = document.querySelector("form");

// Event listener that 'listens' when the form is submitted
form.addEventListener("submit", function(e) {
  // I needed to refresh on forms so I used W3Schools: https://www.w3schools.com/jsref/dom_obj_form.asp
  // Learned about .preventDefault(): https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  // I learned that it prevents the page from refreshing and the reviews disappearing
  e.preventDefault(); 

  // Saving the form input values
  const username = document.querySelector("#username");
  const image = document.querySelector("#image");
  const star = document.querySelector("#star");
  const review = document.querySelector("#review");

  // Created a new review object
  const newReview = {
    username: username.value,
    image: image.value,
    star: parseInt(star.value),
    review: review.value
  };

  // added the new review to the array
  reviews.push(newReview);

  // renders the new review
  renderReviews(newReview);

  //The form is reset to blank after submission
  form.reset();
});

// Render the reviews
function renderReviews(review) {
  // Creating and saving the container as a div element
  const container = document.createElement("div");
  container.classList.add("review_container");

  // Creating and saving the images
  const img = document.createElement("img");
  img.src = review.image;
  container.appendChild(img);

  // Inner div is created to hold the reviews and users
  const innerDivTag = document.createElement("div");
  // Creating and saving the user
  const usernamePTag = document.createElement("p");

  usernamePTag.textContent = review.username;
  innerDivTag.appendChild(usernamePTag);

  // Creating and adding the star rating using the p element
  const ratingPTag = document.createElement("p");
  // my source for the emoji: https://www.shecodes.io/athena/36937-how-to-add-emojis-in-javascript-code
  ratingPTag.textContent = "⭐".repeat(review.star);
  innerDivTag.appendChild(ratingPTag);

  // Creating and saving the actual review
  const reviewPTag = document.createElement("p");
  reviewPTag.textContent = review.review;
  innerDivTag.appendChild(reviewPTag);

  // Putting the innerDiv to the container and adding the container to the page
  container.appendChild(innerDivTag);
  document.body.appendChild(container);
}
//calling and rendering the reviews
reviews.forEach(renderReviews);