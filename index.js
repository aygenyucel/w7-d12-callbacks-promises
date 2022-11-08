function loadImages() {
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

      const cardSvgElements = document.querySelectorAll(".card-img-top");

      console.log("card svg elements: ", cardSvgElements);
      for (let i = 0; i < cardSvgElements.length; i++) {
        const cardImgElement = document.createElement("img");
        cardImgElement.classList.add = "card-img-top w-100";
        cardImgElement.style.height = "15vw";
        cardImgElement.style.objectFit = "cover";
        cardImgElement.src = `${photosArray[i].src.medium}`;
        cardSvgElements[i].replaceWith(cardImgElement);
      }
    });
}
