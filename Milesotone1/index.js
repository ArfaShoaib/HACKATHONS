var ToggleSkillButton = document.getElementById("Toggle-skills");
var Skillslists = document.getElementById("skills");
ToggleSkillButton.addEventListener("click", function () {
    if (Skillslists.style.display === "none") {
        Skillslists.style.display = "block";
        ToggleSkillButton.textContent = "Hide Skills";
    }
    else {
        Skillslists.style.display = "none";
        ToggleSkillButton.textContent = "Show Skill";
    }
});