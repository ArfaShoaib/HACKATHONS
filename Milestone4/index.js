document.addEventListener("DOMContentLoaded", function () {
    var educationSection = document.getElementById("education-section");
    var experienceSection = document.getElementById("experience-section");
    var skillsSection = document.getElementById("skills-section");
    var createDeleteButton = function () {
        var deleteButton = document.createElement("button");
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
            var parent = this.parentElement;
            parent.remove();
        });
        return deleteButton;
    };
    var addEducationFields = function () {
        var newEducationGroup = document.createElement("div");
        newEducationGroup.classList.add("education-group");
        newEducationGroup.innerHTML = "\n            <label for=\"degree\">Degree:</label>\n            <input type=\"text\" class=\"degree\" name=\"degree\" required>\n\n            <label for=\"institution\">Institution:</label>\n            <input type=\"text\" class=\"institution\" name=\"institution\" required>\n\n            <label for=\"start-date\">Start Date:</label>\n            <input type=\"date\" class=\"start-date\" name=\"start-date\" required>\n\n            <label for=\"end-date\">End Date:</label>\n            <input type=\"date\" class=\"end-date\" name=\"end-date\" required>\n        ";
        newEducationGroup.appendChild(createDeleteButton());
        educationSection.appendChild(newEducationGroup);
    };
    var addExperienceFields = function () {
        var newExperienceGroup = document.createElement("div");
        newExperienceGroup.classList.add("experience-group");
        newExperienceGroup.innerHTML = "\n            <label for=\"job-title\">Job Title:</label>\n            <input type=\"text\" class=\"job-title\" name=\"job-title\" required>\n\n            <label for=\"company\">Company:</label>\n            <input type=\"text\" class=\"company\" name=\"company\" required>\n\n            <label for=\"start-date\">Start Date:</label>\n            <input type=\"date\" class=\"start-date\" name=\"start-date\" required>\n\n            <label for=\"end-date\">End Date:</label>\n            <input type=\"date\" class=\"end-date\" name=\"end-date\" required>\n        ";
        newExperienceGroup.appendChild(createDeleteButton());
        experienceSection.appendChild(newExperienceGroup);
    };
    document.getElementById("add-skill").addEventListener("click", function () {
        var newSkillGroup = document.createElement("div");
        newSkillGroup.classList.add("skills-group");
        newSkillGroup.innerHTML = "\n            <label for=\"skills\">Skill:</label>\n            <input type=\"text\" class=\"skills\" name=\"skills\" required>\n        ";
        newSkillGroup.appendChild(createDeleteButton());
        skillsSection.insertBefore(newSkillGroup, document.getElementById("add-skill"));
    });
    // Add button listeners
    document.getElementById("add-education").addEventListener("click", function () {
        addEducationFields();
    });
    document.getElementById("add-experience").addEventListener("click", function () {
        addExperienceFields();
    });
    document.getElementById("resume-form").addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var degrees = Array.prototype.slice.call(document.getElementsByClassName("degree"))
            .map(function (input) { return input.value; });
        var institutions = Array.prototype.slice.call(document.getElementsByClassName("institution"))
            .map(function (input) { return input.value; });
        var eduStartDates = Array.prototype.slice.call(document.getElementsByClassName("start-date"))
            .map(function (input) { return input.value; });
        var eduEndDates = Array.prototype.slice.call(document.getElementsByClassName("end-date"))
            .map(function (input) { return input.value; });
        var jobTitles = Array.prototype.slice.call(document.getElementsByClassName("job-title"))
            .map(function (input) { return input.value; });
        var companies = Array.prototype.slice.call(document.getElementsByClassName("company"))
            .map(function (input) { return input.value; });
        var expStartDates = Array.prototype.slice.call(document.getElementsByClassName("start-date"))
            .map(function (input) { return input.value; });
        var expEndDates = Array.prototype.slice.call(document.getElementsByClassName("end-date"))
            .map(function (input) { return input.value; });
        var skills = Array.prototype.slice.call(document.getElementsByClassName("skills"))
            .map(function (input) { return input.value; });
        var resumeContent = "\n            <h3>Name: <span contenteditable=\"true\">".concat(name, "</span></h3>\n            <h3>Email: <span contenteditable=\"true\">").concat(email, "</span></h3>\n\n            <h4>Education</h4>\n            ").concat(degrees.map(function (degree, index) { return "\n                <p><span contenteditable=\"true\">".concat(degree, "</span> from <span contenteditable=\"true\">").concat(institutions[index], "</span> \n                (Start: <span contenteditable=\"true\">").concat(eduStartDates[index], "</span> - End: <span contenteditable=\"true\">").concat(eduEndDates[index], "</span>)</p>\n            "); }).join(''), "\n\n            <h4>Work Experience</h4>\n            ").concat(jobTitles.map(function (job, index) { return "\n                <p><span contenteditable=\"true\">".concat(job, "</span> at <span contenteditable=\"true\">").concat(companies[index], "</span> \n                (Start: <span contenteditable=\"true\">").concat(expStartDates[index], "</span> - End: <span contenteditable=\"true\">").concat(expEndDates[index], "</span>)</p>\n            "); }).join(''), "\n\n            <h4>Skills</h4>\n            <ul>").concat(skills.map(function (skill) { return "<li><span contenteditable=\"true\">".concat(skill, "</span></li>"); }).join(''), "</ul>\n        ");
        var resumeDiv = document.getElementById("resume-content");
        resumeDiv.innerHTML = resumeContent;
    });
});
