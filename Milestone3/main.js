function generateCV() {
    var name = document.getElementById('namefield').value;
    var profession = document.getElementById('titlefield').value;
    var contact = document.getElementById('contactfield').value;
    var email = document.getElementById('emailfield').value;
    var summary = document.getElementById('summaryfield').value;
    var imgField = document.getElementById('imgfield').files;
    var summaryT = document.getElementById('summaryT');
    var linkdenT = document.getElementById('linkdenT');
    var githubT = document.getElementById('githubT');
    var contactT = document.getElementById('ContactT');
    var contactT2 = document.getElementById('ContactT2');
    var nameT = document.getElementById('nameT');
    var professionalT = document.getElementById('professionalT');
    var eduT = document.getElementById('eduT');
    var workT = document.getElementById('workT');
    var skillsT = document.getElementById('skillsT');
    // Set the values in the resume template
    if (nameT)
        nameT.textContent = name;
    if (professionalT)
        professionalT.textContent = profession;
    if (summaryT)
        summaryT.textContent = summary;
    if (contactT)
        contactT.textContent = contact;
    if (contactT2)
        contactT2.textContent = email;
    // Set the links
    var linkdenLink = document.getElementById('linkdenlinkfield').value;
    var githubLink = document.getElementById('githublinkfield').value;
    if (linkdenT)
        linkdenT.textContent = linkdenLink ? linkdenLink : 'N/A';
    if (githubT)
        githubT.textContent = githubLink ? githubLink : 'N/A';
    // Handle Education Section
    if (eduT) {
        eduT.innerHTML = ''; // Clear existing items
        var educationFields = document.querySelectorAll('.more-field');
        educationFields.forEach(function (field) {
            if (field.value.trim() !== '') {
                var listItem = document.createElement('li');
                listItem.textContent = field.value;
                eduT.appendChild(listItem);
            }
        });
    }
    // Handle Work Experience Section
    if (workT) {
        workT.innerHTML = ''; // Clear existing items
        var workExperienceFields = document.querySelectorAll('.newSec');
        workExperienceFields.forEach(function (field) {
            if (field.value.trim() !== '') {
                var listItem = document.createElement('li');
                listItem.textContent = field.value;
                workT.appendChild(listItem);
            }
        });
    }
    // Handle Skills Section
    if (skillsT) {
        skillsT.innerHTML = ''; // Clear existing items
        var skillFields = document.querySelectorAll('.Skill-field');
        skillFields.forEach(function (field) {
            if (field.value.trim() !== '') {
                var listItem = document.createElement('li');
                listItem.textContent = field.value;
                skillsT.appendChild(listItem);
            }
        });
    }
    // Handle Profile Image
    if (imgField && imgField[0]) {
        var imageUrl = URL.createObjectURL(imgField[0]);
        var imageElement = document.querySelector('.image');
        if (imageElement) {
            imageElement.src = imageUrl;
        }
    }
}
