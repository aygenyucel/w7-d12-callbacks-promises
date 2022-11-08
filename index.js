// import { createClient } from "pexels";

// const client = createClient(
//   "563492ad6f91700001000001e4fe95e220c744558e9a894e99134392"
// );

// fetch("https://api.pexels.com/v1/search", options)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

fetch("https://api.pexels.com/v1/search?query=people", {
  headers: {
    Authorization: "563492ad6f91700001000001e4fe95e220c744558e9a894e99134392",
  },
})
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data);

    let photosArray = data.photos;
    console.log(photosArray);

    const cardElements = document.querySelectorAll(".card");
    console.log(cardElements);
    for (let i = 0; i < cardElements.length; i++) {
      console.log(photosArray[i].url);
      cardElements[
        i
      ].innerHTML += `<img class="card-img-top" src="${photosArray[i].url}" alt="">`;
    }
  });

// const loadImages = function () {
//   const cardImgElements = document.querySelectorAll(".card-img-top");
//   let i = 0;
//   for (cardImg of cardImgElements) {
//     cardImg.src = `${photosArray[i][url]}`;
//     i++;
//   }
// };
