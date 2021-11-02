window.onload = () => {
  const htmlString = `<div class="card-wrapper">
    <div class="img-container"></div>
    <div class="card-title-wrapper">
      <div class="card-title"></div>
    </div>
    <div class="card-title-wrapper">
      <div class="card-title-2"></div>
    </div>
    <div>
      <div class="card-details">
        <div class="card-details-start"></div>
        <div class="card-details-end"></div>
      </div>
    </div>
  </div>`;

  const container = document.getElementById("main-card-container");
  for (let i = 0; i < 24; i++) {
    const element = document.createElement("div");
    element.innerHTML = htmlString;
    element.id = i;
    container.append(element);
  }

  setInterval(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        container.innerHTML = "";
        data.forEach((element, index) => {
          const mainString = `<div class="data-card-wrapper">
            <div class="data-img-container">
              <img src="${element.thumbnailUrl}" alt="" />
            </div>
            <div class="card-title-wrapper">
              <div class="data-card-title">
                ${element.title}
              </div>
            </div>
            <div class="card-title-wrapper">
              <div class="data-card-title-2">
                ${element.url}
              </div>
            </div>
          </div>`;
          const newelement = document.createElement("div");
          newelement.innerHTML = mainString;
          newelement.id = index;
          container.append(newelement);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, 3000);
};
