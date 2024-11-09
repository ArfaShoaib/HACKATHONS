function addmorefield() {
  const newField = document.createElement("textarea");
  newField.placeholder = "Enter Your Education";
  newField.rows = 4;
  newField.classList.add("form-control", "more-field");
  const container = document.getElementById("New-Fields-0");
  if (container) {
    container.appendChild(newField);
  }
}

function addNewField() {
  const newField = document.createElement("textarea");
  newField.placeholder = "Enter Your Work Experience";
  newField.rows = 4;
  newField.classList.add("form-control", "newSec");
  const container = document.getElementById("New-Fields");
  if (container) {
    container.appendChild(newField);
  }
}

function addmoreskills() {
  const newField = document.createElement("textarea");
  newField.placeholder = "Enter Your Skills";
  newField.rows = 4;
  newField.classList.add("form-control", "Skill-field");
  const container = document.getElementById("New-Fields-1");
  if (container) {
    container.appendChild(newField);
  }
}

function generateCV(event: Event) {
  event.preventDefault();
  const name = (document.getElementById("namefield") as HTMLInputElement).value;
  const profession = (document.getElementById("titlefield") as HTMLInputElement)
    .value;
  const contact = (document.getElementById("contactfield") as HTMLInputElement)
    .value;
  const email = (document.getElementById("emailfield") as HTMLInputElement)
    .value;
  const summary = (
    document.getElementById("summaryfield") as HTMLTextAreaElement
  ).value;
  const imgField = (document.getElementById("imgfield") as HTMLInputElement)
    .files;
  const summaryT = document.getElementById("summaryT");
  const linkdenT = document.getElementById("linkdenT");
  const githubT = document.getElementById("githubT");
  const contactT = document.getElementById("ContactT");
  const contactT2 = document.getElementById("ContactT2");
  const nameT = document.getElementById("nameT");
  const professionalT = document.getElementById("professionalT");
  const eduT = document.getElementById("eduT");
  const workT = document.getElementById("workT");
  const skillsT = document.getElementById("skillsT");

  // Set the values in the resume template
  if (nameT) nameT.textContent = name;
  if (professionalT) professionalT.textContent = profession;
  if (summaryT) summaryT.textContent = summary;
  if (contactT) contactT.textContent = contact;
  if (contactT2) contactT2.textContent = email;

  // Set the links
  const linkdenLink = (
    document.getElementById("linkdenlinkfield") as HTMLInputElement
  ).value;
  const githubLink = (
    document.getElementById("githublinkfield") as HTMLInputElement
  ).value;

  if (linkdenT) linkdenT.textContent = linkdenLink ? linkdenLink : "N/A";
  if (githubT) githubT.textContent = githubLink ? githubLink : "N/A";

  // Handle Education Section
  if (eduT) {
    eduT.innerHTML = ""; // Clear existing items
    const educationFields = document.querySelectorAll(".more-field");
    educationFields.forEach((field: any) => {
      if (field.value.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = field.value;
        eduT.appendChild(listItem);
      }
    });
  }

  // Handle Work Experience Section
  if (workT) {
    workT.innerHTML = ""; // Clear existing items
    const workExperienceFields = document.querySelectorAll(".newSec");
    workExperienceFields.forEach((field: any) => {
      if (field.value.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = field.value;
        workT.appendChild(listItem);
      }
    });
  }

  // Handle Skills Section
  if (skillsT) {
    skillsT.innerHTML = ""; // Clear existing items
    const skillFields = document.querySelectorAll(".Skill-field");
    skillFields.forEach((field: any) => {
      if (field.value.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = field.value;
        skillsT.appendChild(listItem);
      }
    });
  }

  // Handle Profile Image
  if (imgField && imgField[0]) {
    const imageUrl = URL.createObjectURL(imgField[0]);
    const imageElement = document.querySelector(".image") as HTMLImageElement;
    if (imageElement) {
      imageElement.src = imageUrl;
    }
  }
}
