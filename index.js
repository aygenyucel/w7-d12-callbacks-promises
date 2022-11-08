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

      const cardImgElements = document.querySelectorAll(".card-img-top");

      console.log("card svg elements: ", cardImgElements);
      for (let i = 0; i < cardImgElements.length; i++) {
        const newCardImgElement = document.createElement("img");
        cardImgElements[i].replaceWith(newCardImgElement);
        newCardImgElement.classList = "card-img-top w-100";
        newCardImgElement.style.height = "15vw";
        newCardImgElement.style.objectFit = "cover";
        newCardImgElement.src = `${photosArray[i].src.medium}`;
      }
    });
}

const loadSecondaryImages = function () {
  fetch("https://api.pexels.com/v1/search?query=book", {
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
      console.log("secondaryyyy ");

      const cardImgElements = document.querySelectorAll(".card-img-top");

      for (let i = 0; i < cardImgElements.length; i++) {
        const newCardImgElement = document.createElement("img");
        cardImgElements[i].replaceWith(newCardImgElement);
        newCardImgElement.classList = "card-img-top w-100";
        newCardImgElement.style.height = "15vw";
        newCardImgElement.style.objectFit = "cover";
        newCardImgElement.src = `${photosArray[i].src.original}`;
      }
    });
};
