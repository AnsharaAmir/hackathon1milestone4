var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('e-mail');
    var contactElement = document.getElementById('contact');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeOutput = "\n    <h3>Editable Resume </h3>\n    <p><strong>Name:</strong><span contenteditable=\"true\">".concat(name_1, "</span></p>\n<p><strong>email:</strong><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><strong>contact:</strong><span contenteditable=\"true\">").concat(contact, "</span></p>\n<h4>Education</h4>\n<p contenteditable=\"true\">").concat(education, " </p>\n<h4>Experience</h4>\n<p contenteditable=\"true\"> ").concat(experience, "</p>\n<h4>Skills</h4>\n<p contenteditable=\"true\"> ").concat(skills, "</p>\n    ");
        var outputDiv = document.getElementById('resumeOutput');
        if (outputDiv) {
            outputDiv.innerHTML = resumeOutput;
        }
        else {
            console.error("resumeOutput div not found!");
        }
    }
});
/*document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('toggleskills')?.addEventListener('click', function () {
        console.log("Generate Resume button clicked!"); // Debugging

        // Getting input elements
        const nameElement = document.getElementById('name') as HTMLInputElement;
        const emailElement = document.getElementById('email') as HTMLInputElement;
        const contactElement = document.getElementById('contact') as HTMLInputElement;
        const educationElement = document.getElementById('education') as HTMLTextAreaElement;
        const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
        const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

        // Ensuring all elements exist before proceeding
        if (!nameElement || !emailElement || !contactElement || !educationElement || !experienceElement || !skillsElement) {
            console.error("Some form elements are missing!");
            return;
        }

        // Getting values
        const name = nameElement.value.trim();
        const email = emailElement.value.trim();
        const contact = contactElement.value.trim();
        const education = educationElement.value.trim();
        const experience = experienceElement.value.trim();
        const skills = skillsElement.value.trim();

        console.log("Captured Data:", { name, email, contact, education, experience, skills });

        // Generating resume output
        const resumeOutput = `
            <h3>Resume</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <h4>Education</h4>
            <p>${education}</p>
            <h4>Experience</h4>
            <p>${experience}</p>
            <h4>Skills</h4>
            <p>${skills}</p>
        `;

        // Inserting resume into the output div
        const outputDiv = document.getElementById('resumeOutput');
        if (outputDiv) {
            outputDiv.innerHTML = resumeOutput;
        } else {
            console.error("resumeOutput div not found!");
        }
    });
});
*/ 
