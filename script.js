var form = document.getElementById("resume-form");
var resumeOutput = document.getElementById("resume-output");
var profilePicInput = document.getElementById('profile-pic');
var profilePicPreview = document.querySelector('.profile-picture img');
var skillsVisible = true;
profilePicInput.addEventListener('change', function () {
    var _a;
    var file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a, _b;
            console.log("File read successfully:", (_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
            profilePicPreview.src = (_b = e.target) === null || _b === void 0 ? void 0 : _b.result;
        };
        reader.readAsDataURL(file);
    }
});
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");
    if (!profilePicPreview) {
        console.error("Profile picture preview element not found.");
        return;
    }
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Profile Pic Source:", profilePicPreview.src);
    var resumeHTML = "\n        <div class=\"profile-picture\">\n            <img src=\"".concat(profilePicPreview.src, "\" alt=\"Profile Picture\">\n        </div>\n        <h3>").concat(name, "</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Education:</strong></p>\n        <p>").concat(education, "</p>\n        <p id=\"skills-section\"><strong>Skills:</strong></p>\n        <ul id=\"skills-list\">").concat(skills.split(",").map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n        <p><strong>Experience:</strong></p>\n        <p>").concat(experience, "</p>\n    ");
    resumeOutput.innerHTML = resumeHTML;
    form.reset();
    profilePicPreview.src = "";
});
