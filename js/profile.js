document.addEventListener("DOMContentLoaded", function () {
  const enrolledCourses = [
    {
      name: "Matematika",
      subject: "Aljabar",
      description: "Learn the basics of algebra, calculus, and more.",
    },
    {
      name: "Fisika",
      subject: "Jangka Sorong",
      description: "Understand the principles of motion, forces, and energy.",
    },
    {
      name: "Biologi",
      ubject: "Virus",
      description: "Explore the living world, from cells to ecosystems.",
    },
  ];

  let coursesList = document.getElementById("enrolled-courses");
  enrolledCourses.forEach((course) => {
    let courseCard = document.createElement("div");
    courseCard.className = "col-lg-4 mb-4";
    courseCard.innerHTML = `
      <div class="card h-100 shadow-lg">
        <div class="card-body">
          <h5 class="card-title">${course.subject}</h5>
          <a href="detail.html?class=${course.name}&subject=${course.subject}" class="btn btn-primary">View Course</a>
        </div>
      </div>
    `;
    coursesList.appendChild(courseCard);
  });
});
