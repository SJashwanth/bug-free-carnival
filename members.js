function skillsmembers() {
    var members = document.getElementById("members");
    var skills = document.getElementById("skills");
    var membersbutton = document.getElementById("membersbutton");
    var skillsbutton = document.getElementById("skillsbutton");
    members.style.display = "block";
    skills.style.display = "none";
    membersbutton.style.backgroundColor = "#f5f5f5";
    membersbutton.style.color = "#000000";
    skillsbutton.style.backgroundColor = "#000000";
    skillsbutton.style.color = "#ffffff";
}