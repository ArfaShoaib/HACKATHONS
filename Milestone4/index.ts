document.addEventListener("DOMContentLoaded", () => {
    const educationSection = document.getElementById("education-section")!;
    const experienceSection = document.getElementById("experience-section")!;
    const skillsSection = document.getElementById("skills-section")!;

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
            const parent = this.parentElement!;
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

    document.getElementById("add-skill")!.addEventListener("click", () => {
        const newSkillGroup = document.createElement("div");
        newSkillGroup.classList.add("skills-group");
        newSkillGroup.innerHTML = `
            <label for="skills">Skill:</label>
            <input type="text" class="skills" name="skills" required>
        `;
        newSkillGroup.appendChild(createDeleteButton());
        skillsSection.insertBefore(newSkillGroup, document.getElementById("add-skill"));
    });

    // Add button listeners
    document.getElementById("add-education")!.addEventListener("click", () => {
        addEducationFields();
    });

    document.getElementById("add-experience")!.addEventListener("click", () => {
        addExperienceFields();
    });

    document.getElementById("resume-form")!.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;

        const degrees = Array.prototype.slice.call(document.getElementsByClassName("degree"))
            .map((input: HTMLInputElement) => input.value);

        const institutions = Array.prototype.slice.call(document.getElementsByClassName("institution"))
            .map((input: HTMLInputElement) => input.value);

        const eduStartDates = Array.prototype.slice.call(document.getElementsByClassName("start-date"))
            .map((input: HTMLInputElement) => input.value);

        const eduEndDates = Array.prototype.slice.call(document.getElementsByClassName("end-date"))
            .map((input: HTMLInputElement) => input.value);

        const jobTitles = Array.prototype.slice.call(document.getElementsByClassName("job-title"))
            .map((input: HTMLInputElement) => input.value);

        const companies = Array.prototype.slice.call(document.getElementsByClassName("company"))
            .map((input: HTMLInputElement) => input.value);

        const expStartDates = Array.prototype.slice.call(document.getElementsByClassName("start-date"))
            .map((input: HTMLInputElement) => input.value);

        const expEndDates = Array.prototype.slice.call(document.getElementsByClassName("end-date"))
            .map((input: HTMLInputElement) => input.value);

        const skills = Array.prototype.slice.call(document.getElementsByClassName("skills"))
            .map((input: HTMLInputElement) => input.value);

        let resumeContent = `
            <h3>Name: <span contenteditable="true">${name}</span></h3>
            <h3>Email: <span contenteditable="true">${email}</span></h3>

            <h4>Education</h4>
            ${degrees.map((degree, index) => `
                <p><span contenteditable="true">${degree}</span> from <span contenteditable="true">${institutions[index]}</span> 
                (Start: <span contenteditable="true">${eduStartDates[index]}</span> - End: <span contenteditable="true">${eduEndDates[index]}</span>)</p>
            `).join('')}

            <h4>Work Experience</h4>
            ${jobTitles.map((job, index) => `
                <p><span contenteditable="true">${job}</span> at <span contenteditable="true">${companies[index]}</span> 
                (Start: <span contenteditable="true">${expStartDates[index]}</span> - End: <span contenteditable="true">${expEndDates[index]}</span>)</p>
            `).join('')}

            <h4>Skills</h4>
            <ul>${skills.map(skill => `<li><span contenteditable="true">${skill}</span></li>`).join('')}</ul>
        `;

        const resumeDiv = document.getElementById("resume-content")!;
        resumeDiv.innerHTML = resumeContent;
    });
});