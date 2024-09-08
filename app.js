// For Personal Information
const addInfo = document.getElementById("addInfo");
addInfo.addEventListener("click", personalInfo);
let fullName = document.getElementById("fullname");
let designationElem = document.getElementById("designationEl");
let phonenoEl = document.getElementById("phonenoEl");
let emailEl = document.getElementById("emailEl");
let addressEl = document.getElementById("addressEl");
// console.log(  fullName,designationElem,phonenoEl,emailEl,addressEl);
window.addEventListener("load", () => {
    const storedUserData = JSON.parse(localStorage.getItem('user'));
    if (storedUserData) {
        const { firstName, lastName, email, designation, address, phoneNo } = storedUserData;
        console.log(firstName, lastName, email, designation, address, phoneNo);
        fullName.innerHTML = firstName + " " + lastName;
        designationElem.innerHTML = designation;
        emailEl.innerHTML = email;
        phonenoEl.innerHTML = phoneNo;
        addressEl.innerHTML = address;
    }
});
function personalInfo() {
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let email = document.getElementById("email").value;
    let designation = document.getElementById("designation").value;
    let address = document.getElementById("address").value;
    let phoneNo = document.getElementById("phoneno").value;
    if (!firstName || !lastName ||
        !email || !designation ||
        !address || !phoneNo) {
        return alert("Please fill all the fields");
    }
    fullName.innerHTML = firstName + " " + lastName;
    emailEl.innerHTML = email;
    designationElem.innerHTML = designation;
    addressEl.innerHTML = address;
    phonenoEl.innerHTML = phoneNo;
    const userData = {
        firstName,
        lastName,
        email,
        designation,
        address,
        phoneNo
    };
    localStorage.setItem('user', JSON.stringify(userData));
}
// For Skill Section
const skillBtn = document.getElementById("skillBtn");
skillBtn.addEventListener("click", addSkill);
let skillEl = document.getElementById("skillsEl");
console.log("skillsEl", skillEl);
window.addEventListener("load", () => {
    const storedSkillData = localStorage.getItem('skillData');
    if (storedSkillData) {
        skillEl.innerHTML = storedSkillData;
    }
});
function addSkill() {
    let skillVal = document.getElementById("skill").value;
    if (!skillVal) {
        return alert("Please fill all the fields");
    }
    skillEl.innerHTML = skillVal;
    localStorage.setItem('skillData', skillVal);
}
// achieveTitle
// achieveDescription
const achieveBtn = document.getElementById("achieveBtn");
achieveBtn.addEventListener("click", addAchievement);
let achievementsDspElem = document.getElementById("achievements_dsp_elem");
window.addEventListener("load", () => {
    const achieveData = JSON.parse(localStorage.getItem('achieveData'));
    if (achieveData) {
        const { achieveTitle, achieveDescription } = achieveData;
        console.log(achieveTitle, achieveDescription);
        achievementsDspElem.innerHTML = ` <div class="preview-item">
                                <span class="preview-item-val">${achieveTitle}</span>
                                <span class="preview-item-val">${achieveDescription}</span>
                            </div>
                        </div>`;
    }
});
function addAchievement() {
    let achieveTitle = document.getElementById("achieveTitle").value;
    let achieveDescription = document.getElementById("achieveDescription").value;
    if (!achieveTitle || !achieveDescription) {
        return alert("Please fill all the fields");
    }
    console.log(achieveDescription, achieveTitle);
    achievementsDspElem.innerHTML = ` <div class="preview-item">
                                <span class="preview-item-val">${achieveTitle}</span>
                                <span class="preview-item-val">${achieveDescription}</span>
                            </div>
                        </div>`;
    const achieveObj = {
        achieveTitle,
        achieveDescription
    };
    // set in local Storage
    localStorage.setItem('achieveData', JSON.stringify(achieveObj));
}
// add project section
const projectBtn = document.getElementById("projectBtn");
projectBtn.addEventListener("click", addProject);
let projectsDsp = document.getElementById("projectsDsp");
console.log(projectsDsp);
window.addEventListener("load", () => {
    const projectData = JSON.parse(localStorage.getItem('projectData'));
    if (projectData) {
        const { projTitle, projLink, projDescription } = projectData;
        console.log(achieveTitle, achieveDescription);
        projectsDsp.innerHTML = ` <div class="preview-item">
        <span class="preview-item-val">${projTitle}</span>
        <span class="preview-item-val">${projLink}</span>
        <span class="preview-item-val">${projDescription}</span>
    </div>
</div>`;
    }
});
function addProject(e) {
    e.preventDefault();
    let projTitle = document.getElementById("projTitle").value;
    let projLink = document.getElementById("projLink").value;
    let projDescription = document.getElementById("projDescription").value;
    if (!projTitle || !projLink || !projDescription) {
        return alert("Please fill all the fields");
    }
    projectsDsp.innerHTML = ` <div class="preview-item">
                                <span class="preview-item-val">${projTitle}</span>
                                <span class="preview-item-val">${projLink}</span>
                                <span class="preview-item-val">${projDescription}</span>
                            </div>
                        </div>`;
    const projectObj = {
        projTitle,
        projLink,
        projDescription
    };
    // set in local Storage
    localStorage.setItem('projectData', JSON.stringify(projectObj));
}
// add education section
const eduBtn = document.getElementById("eduBtn");
eduBtn.addEventListener("click", addEducation);
let educationsDsp = document.getElementById("educationsDsp");
console.log(educationsDsp);
window.addEventListener("load", () => {
    const educationData = JSON.parse(localStorage.getItem('educationData'));
    if (educationData) {
        const { eduSchool, eduDegree, eduCity, eduStartDate, eduGraduationDate, eduDescription, } = educationData;
        educationsDsp.innerHTML = `<div class="preview-item">
        <span class="preview-item-val">${eduSchool}</span>
        <span class="preview-item-val">${eduDegree}</span>
        <span class="preview-item-val">${eduCity}</span>
        <span class="preview-item-val">${eduStartDate}</span>
        <span class="preview-item-val">${eduGraduationDate}</span>
        <span class="preview-item-val">${eduDescription}</span>
    </div>
`;
    }
});
function addEducation(e) {
    e.preventDefault();
    let eduSchool = document.getElementById("eduSchool").value;
    let eduDegree = document.getElementById("eduDegree").value;
    let eduCity = document.getElementById("eduCity").value;
    let eduStartDate = document.getElementById("eduStartDate").value;
    let eduGraduationDate = document.getElementById("eduGraduationDate").value;
    let eduDescription = document.getElementById("eduDescription").value;
    if (!eduSchool ||
        !eduDegree ||
        !eduCity ||
        !eduStartDate ||
        !eduGraduationDate ||
        !eduDescription) {
        return alert("Please fill all the fields");
    }
    educationsDsp.innerHTML = `<div class="preview-item">
                                    <span class="preview-item-val">${eduSchool}</span>
                                    <span class="preview-item-val">${eduDegree}</span>
                                    <span class="preview-item-val">${eduCity}</span>
                                    <span class="preview-item-val">${eduStartDate}</span>
                                    <span class="preview-item-val">${eduGraduationDate}</span>
                                    <span class="preview-item-val">${eduDescription}</span>
                                </div>
    `;
    const eduObj = {
        eduSchool,
        eduDegree,
        eduCity,
        eduStartDate,
        eduGraduationDate,
        eduDescription
    };
    // set in local Storage
    localStorage.setItem('educationData', JSON.stringify(eduObj));
}
// add experience section
const expBtn = document.getElementById("expBtn");
expBtn.addEventListener("click", addExperience);
let experiencesDsp = document.getElementById("experiencesDsp");
// console.log( experiencesDsp);
window.addEventListener("load", () => {
    const experienceData = JSON.parse(localStorage.getItem('experienceData'));
    if (experienceData) {
        const { expTitle, expOrganization, expLocation, expStartDate, expEndDate, expDescription, } = experienceData;
        experiencesDsp.innerHTML = `<div class="preview-item">
        <span class="preview-item-val">${expTitle}</span>
        <span class="preview-item-val">${expOrganization}</span>
        <span class="preview-item-val">${expLocation}</span>
        <span class="preview-item-val">${expStartDate}</span>
        <span class="preview-item-val">${expEndDate}</span>
        <span class="preview-item-val">${expDescription}</span>
    </div>
`;
    }
});
function addExperience(e) {
    e.preventDefault();
    let expTitle = document.getElementById("expTitle").value;
    let expOrganization = document.getElementById("expOrganization").value;
    let expLocation = document.getElementById("expLocation").value;
    let expStartDate = document.getElementById("eduStartDate").value;
    let expEndDate = document.getElementById("eduGraduationDate").value;
    let expDescription = document.getElementById("eduDescription").value;
    
    console.log(expTitle, expOrganization, expLocation, expStartDate, expEndDate, expDescription);
    experiencesDsp.innerHTML = `<div class="preview-item">
                                    <span class="preview-item-val">${expTitle}</span>
                                    <span class="preview-item-val">${expOrganization}</span>
                                    <span class="preview-item-val">${expLocation}</span>
                                    <span class="preview-item-val">${expStartDate}</span>
                                    <span class="preview-item-val">${expEndDate}</span>
                                    <span class="preview-item-val">${expDescription}</span>
                                </div>
    `;
    const expObj = {
        expTitle,
        expOrganization,
        expLocation,
        expStartDate,
        expEndDate,
        expDescription
    };
    // set in local Storage
    localStorage.setItem('experienceData', JSON.stringify(expObj));
}
// print CV
function printCV() {
    window.print();
}
