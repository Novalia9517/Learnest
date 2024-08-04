document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.endsWith("class.html")) {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => {
        let classList = document.getElementById("class-list");
        data.classes.forEach((cls) => {
          let classCard = document.createElement("div");
          classCard.className = "col-lg-4 mb-4";
          classCard.innerHTML = `
            <div class="card h-100 shadow-lg" style="transform: rotate(${
              Math.random() * 4 - 2
            }deg);">
              <div class="card-body">
                <h5 class="card-title">${cls.name}</h5>
                <p class="card-text">Explore the various subjects in ${
                  cls.name
                }.</p>
                <a href="#" class="btn btn-primary" onclick="showSubjects('${
                  cls.name
                }')">List Materi</a>
              </div>
            </div>
          `;
          classList.appendChild(classCard);
        });
      });
  }
});

function showSubjects(className) {
  fetch("data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let selectedClass = data.classes.find((cls) => cls.name === className);
      let classList = document.getElementById("class-list");
      classList.innerHTML = "";
      selectedClass.subjects.forEach((subject) => {
        let subjectCard = document.createElement("div");
        subjectCard.className = "col-lg-4 mb-4";
        subjectCard.innerHTML = `
          <div class="card h-100 shadow-lg" style="transform: rotate(${
            Math.random() * 4 - 2
          }deg);">
            <div class="card-body">
              <h5 class="card-title">${subject.name}</h5>
              <p class="card-text">Learn about ${
                subject.name
              } in ${className}.</p>
              <a href="detail.html?class=${className}&subject=${
          subject.name
        }" class="btn btn-primary">Pelajari</a>
            </div>
          </div>
        `;
        classList.appendChild(subjectCard);
      });
    });
}

if (window.location.pathname.endsWith("detail.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const className = urlParams.get("class");
  const subjectName = urlParams.get("subject");

  fetch("data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let selectedClass = data.classes.find((cls) => cls.name === className);
      let selectedSubject = selectedClass.subjects.find(
        (sub) => sub.name === subjectName
      );
      document.getElementById("subject-title").innerText = selectedSubject.name;
      let subjectDetail = document.getElementById("subject-detail");
      subjectDetail.innerHTML = `
        <p>${selectedSubject.details}</p>
        <div class="d-flex justify-content-center align-items-center mb-5">
        <iframe width="560" height="315" src="${selectedSubject.video}" frameborder="0" allowfullscreen></iframe>
        </div>
      `;
      document.getElementById(
        "header-content"
      ).style.background = `url(${selectedSubject.image})`;
    });
}
