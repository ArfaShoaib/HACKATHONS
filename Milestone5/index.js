"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const educationSection = document.getElementById("education-section");
    const experienceSection = document.getElementById("experience-section");
    const skillsSection = document.getElementById("skills-section");
    const resumePreview = document.getElementById("resume-content");
    const shareableLink = document.getElementById("shareable-link");
    const downloadPdf = document.getElementById("download-pdf");
    const createDeleteButton = () => {
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";
        deleteButton.classList.add("delete-button");
        deleteButton.style.backgroundColor = "#e74c3c";
        deleteButton.style.color = "#fff";
        deleteButton.style.border = "none";
        deleteButton.style.padding = "5px 10px";
        deleteButton.style.marginLeft = "10px";
        deleteButton.style.cursor = "pointer";
        deleteButton.addEventListener("click", function () {
            const parent = this.parentElement;
            parent.remove();
        });
        return deleteButton;
    };
    const addEducationFields = () => {
        const newEducationGroup = document.createElement("div");
        newEducationGroup.classList.add("education-group");
        newEducationGroup.innerHTML = `
      <label for="degree">Degree:</label>
      <input type="text" class="degree" name="degree" required>

      <label for="institution">Institution:</label>
      <input type="text" class="institution" name="institution" required>

      <label for="start-date">Start Date:</label>
      <input type="date" class="start-date" name="start-date" required>

      <label for="end-date">End Date:</label>
      <input type="date" class="end-date" name="end-date" required>
    `;
        newEducationGroup.appendChild(createDeleteButton());
        educationSection.appendChild(newEducationGroup);
    };
    const addExperienceFields = () => {
        const newExperienceGroup = document.createElement("div");
        newExperienceGroup.classList.add("experience-group");
        newExperienceGroup.innerHTML = `
      <label for="job-title">Job Title:</label>
      <input type="text" class="job-title" name="job-title" required>

      <label for="company">Company:</label>
      <input type="text" class="company" name="company" required>

      <label for="start-date">Start Date:</label>
      <input type="date" class="start-date" name="start-date" required>

      <label for="end-date">End Date:</label>
      <input type="date" class="end-date" name="end-date" required>
    `;
        newExperienceGroup.appendChild(createDeleteButton());
        experienceSection.appendChild(newExperienceGroup);
    };
    document.getElementById("add-skill").addEventListener("click", () => {
        const newSkillGroup = document.createElement("div");
        newSkillGroup.classList.add("skills-group");
        newSkillGroup.innerHTML = `
      <label for="skills">Skill:</label>
      <input type="text" class="skills" name="skills" required>
    `;
        newSkillGroup.appendChild(createDeleteButton());
        skillsSection.insertBefore(newSkillGroup, document.getElementById("add-skill"));
    });
    document.getElementById("add-education").addEventListener("click", addEducationFields);
    document.getElementById("add-experience").addEventListener("click", addExperienceFields);
    document.getElementById("resume-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const degrees = Array.from(document.getElementsByClassName("degree")).map((input) => input.value);
        const institutions = Array.from(document.getElementsByClassName("institution")).map((input) => input.value);
        const eduStartDates = Array.from(document.getElementsByClassName("start-date")).map((input) => input.value);
        const eduEndDates = Array.from(document.getElementsByClassName("end-date")).map((input) => input.value);
        const jobTitles = Array.from(document.getElementsByClassName("job-title")).map((input) => input.value);
        const companies = Array.from(document.getElementsByClassName("company")).map((input) => input.value);
        const expStartDates = Array.from(document.getElementsByClassName("start-date")).map((input) => input.value);
        const expEndDates = Array.from(document.getElementsByClassName("end-date")).map((input) => input.value);
        const skills = Array.from(document.getElementsByClassName("skills")).map((input) => input.value);
        // Generate resume content
        const resumeContent = `
      <h2>Resume of ${name}</h2>
      <h3>Email: <span contenteditable="true">${email}</span></h3>

      <h4>Education</h4>
      ${degrees
            .map((degree, index) => `
          <p><span contenteditable="true">${degree}</span> from <span contenteditable="true">${institutions[index]}</span> 
          (Start: <span contenteditable="true">${eduStartDates[index]}</span> - End: <span contenteditable="true">${eduEndDates[index]}</span>)</p>
      `)
            .join("")}

      <h4>Work Experience</h4>
      ${jobTitles
            .map((job, index) => `
          <p><span contenteditable="true">${job}</span> at <span contenteditable="true">${companies[index]}</span> 
          (Start: <span contenteditable="true">${expStartDates[index]}</span> - End: <span contenteditable="true">${expEndDates[index]}</span>)</p>
      `)
            .join("")}

      <h4>Skills</h4>
      <ul>${skills
            .map((skill) => `<li><span contenteditable="true">${skill}</span></li>`)
            .join("")}</ul> 
    `;
        resumePreview.innerHTML = resumeContent;
        // Generate and display shareable link
        const baseUrl = window.location.href.split('?')[0]; // Ensure base URL is correct
        const queryParams = new URLSearchParams({
            username,
            name,
            email,
            degree: degrees.join(','),
            institution: institutions.join(','),
            "start-date": eduStartDates.join(','),
            "end-date": eduEndDates.join(','),
            "job-title": jobTitles.join(','),
            company: companies.join(','),
            "exp-start-date": expStartDates.join(','),
            "exp-end-date": expEndDates.join(','),
            skills: skills.join(', ')
        });
        shareableLink.href = `${baseUrl}?${queryParams.toString()}`;
    });
    // Optional: Handle click event for shareable link
    shareableLink === null || shareableLink === void 0 ? void 0 : shareableLink.addEventListener("click", () => {
        console.log('Shareable link clicked!');
    });
    // Download PDF functionality
    downloadPdf === null || downloadPdf === void 0 ? void 0 : downloadPdf.addEventListener("click", () => {
        window.print();
    });
});
// Function to populate resume from URL parameters
const populateResumeFromURL = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const degrees = ((_a = urlParams.get('degree')) === null || _a === void 0 ? void 0 : _a.split(',')) || [];
    const institutions = ((_b = urlParams.get('institution')) === null || _b === void 0 ? void 0 : _b.split(',')) || [];
    const eduStartDates = ((_c = urlParams.get('start-date')) === null || _c === void 0 ? void 0 : _c.split(',')) || [];
    const eduEndDates = ((_d = urlParams.get('end-date')) === null || _d === void 0 ? void 0 : _d.split(',')) || [];
    const jobTitles = ((_e = urlParams.get('job-title')) === null || _e === void 0 ? void 0 : _e.split(',')) || [];
    const companies = ((_f = urlParams.get('company')) === null || _f === void 0 ? void 0 : _f.split(',')) || [];
    const expStartDates = ((_g = urlParams.get('exp-start-date')) === null || _g === void 0 ? void 0 : _g.split(',')) || [];
    const expEndDates = ((_h = urlParams.get('exp-end-date')) === null || _h === void 0 ? void 0 : _h.split(',')) || [];
    const skills = ((_j = urlParams.get('skills')) === null || _j === void 0 ? void 0 : _j.split(', ')) || [];
    if (name && email) {
        const resumeContent = `
      <h2>Resume of ${name}</h2>
      <h3>Email: <span contenteditable="true">${email}</span></h3>

      <h4>Education</h4>
      ${degrees
            .map((degree, index) => `
          <p><span contenteditable="true">${degree}</span> from <span contenteditable="true">${institutions[index]}</span> 
          (Start: <span contenteditable="true">${eduStartDates[index]}</span> - End: <span contenteditable="true">${eduEndDates[index]}</span>)</p>
      `)
            .join("")}

      <h4>Work Experience</h4>
      ${jobTitles
            .map((job, index) => `
          <p><span contenteditable="true">${job}</span> at <span contenteditable="true">${companies[index]}</span> 
          (Start: <span contenteditable="true">${expStartDates[index]}</span> - End: <span contenteditable="true">${expEndDates[index]}</span>)</p>
      `)
            .join("")}

      <h4>Skills</h4>
      <ul>${skills
            .map((skill) => `<li><span contenteditable="true">${skill}</span></li>`)
            .join("")}</ul> 
    `;
        document.getElementById("resume-content").innerHTML = resumeContent;
    }
};
// Call populateResumeFromURL on page load
document.addEventListener("DOMContentLoaded", populateResumeFromURL);
