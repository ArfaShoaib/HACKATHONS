const ToggleSkillButton = document.getElementById("Toggle-skills") as HTMLButtonElement;
const Skillslists = document.getElementById("skills") as HTMLElement;

ToggleSkillButton.addEventListener("click" , () => {
 if(Skillslists.style.display === "none") {
    Skillslists.style.display = "block"
    ToggleSkillButton.textContent ="Hide Skills"
 }
 else {
    Skillslists.style.display = "none";
    ToggleSkillButton.textContent = "Show Skills"
 }
})
