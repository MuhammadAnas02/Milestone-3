const display = document.querySelector('#resume-display') as HTMLElement;

function resume() {
    const Name = (document.querySelector("#names") as HTMLInputElement)?.value;
    const fatherName = (document.querySelector("#fname") as HTMLInputElement)?.value;
    const age = (document.querySelector("#age") as HTMLInputElement)?.value;
    const gender = (document.querySelector("#gender") as HTMLSelectElement)?.value;
    const matric = (document.querySelector("#matric") as HTMLInputElement)?.value;
    const intermidiate = (document.querySelector("#intermidiate") as HTMLInputElement)?.value;
    const higher = (document.querySelector("#higher") as HTMLInputElement)?.value;
    const skills = (document.querySelector("#skills") as HTMLInputElement)?.value;

    // Check if any field is empty
    if (!Name || !fatherName || !age || !gender || !matric || !skills) {
        alert('Please fill all required fields');
        return null;
    }

    return {
        Name,
        fatherName,
        age,
        gender,
        matric,
        intermidiate,
        higher,
        skills,
    };
}

function output(res: any) {
    display.innerHTML = `
        <h1>Name: ${res.Name}</h1>
        <h1>Father Name: ${res.fatherName}</h1>
        <p>Age: ${res.age}</p>
        <p>Gender: ${res.gender}</p>
        <p>Matric: ${res.matric}</p>
        <p>Intermediate: ${res.intermidiate}</p>
        <p>Higher Education: ${res.higher}</p>
        <p>Skills: ${res.skills}</p>
        <button id="download-btn">Download Resume</button>
    `;
    
    const downloadButton = document.querySelector("#download-btn") as HTMLButtonElement;
    downloadButton.addEventListener('click', () => downloadResume(res));
}

function downloadResume(res: any) {
    const resumeText = `
    Name: ${res.Name}
    Father Name: ${res.fatherName}
    Age: ${res.age}
    Gender: ${res.gender}
    Matric: ${res.matric}
    Intermediate: ${res.intermidiate || 'N/A'}
    Higher Education: ${res.higher || 'N/A'}
    Skills: ${res.skills}
    `;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${res.Name}_Resume.txt`;
    link.click();
}

function handler(event: Event) {
    event.preventDefault();
    const data = resume();
    if (data) {
        output(data);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#resume-form') as HTMLElement;
    form.addEventListener('submit', handler);
});
