 document.getElementById('resumeform')?.addEventListener('submit', function(event)
 {
    event.preventDefault();
    const nameElement= document.getElementById('name') as HTMLInputElement;
    const emailElement= document.getElementById('e-mail') as HTMLInputElement;
    const contactElement= document.getElementById('contact') as HTMLInputElement;
    const educationElement= document.getElementById('education') as HTMLInputElement;
    const experienceElement= document.getElementById('experience') as HTMLInputElement;
    const skillsElement= document.getElementById('skills') as HTMLInputElement;
if (nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement){
const name = nameElement.value;
const email = emailElement.value;
const contact  = contactElement.value;
const education = educationElement.value;
const experience = experienceElement.value;
const skills = skillsElement.value;



    const resumeOutput = `
    <h3>Editable Resume </h3>
    <p><strong>Name:</strong><span contenteditable="true">${name}</span></p>
<p><strong>email:</strong><span contenteditable="true">${email}</span></p>
<p><strong>contact:</strong><span contenteditable="true">${contact}</span></p>
<h4>Education</h4>
<p contenteditable="true">${education} </p>
<h4>Experience</h4>
<p contenteditable="true"> ${experience}</p>
<h4>Skills</h4>
<p contenteditable="true"> ${skills}</p>
    `;
    const outputDiv = document.getElementById('resumeOutput');
    if (outputDiv) {
        outputDiv.innerHTML = resumeOutput;
    } else {
        console.error("resumeOutput div not found!");
    }

    
}
}
)




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