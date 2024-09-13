// const submit = document.querySelector("button[type= 'submit")as HTMLButtonElement
// const display  = document.querySelector('#resume-display')as HTMLElement
// function resume() {
// const Name = (document.querySelector("#names")as HTMLInputElement).value
// const fatherName = (document.querySelector("#fname")as HTMLInputElement).value
// const age = (document.querySelector("#age")as HTMLInputElement).value
// const gender = (document.querySelector("#gender")as HTMLSelectElement).value
// const matric = (document.querySelector("#matric")as HTMLSelectElement).value
// const intermidiate = (document.querySelector("#intermidiate")as HTMLSelectElement).value
// const higher = (document.querySelector("#higher")as HTMLSelectElement).value
// const skills = (document.querySelector("#skills")as HTMLInputElement).value
//     if(!Name || !fatherName ||!age ||!gender ||!matric || !intermidiate ||!higher || !skills ){
//         alert('pleas fiil all field')
//         return null
//     }
//     return{
//         Name,
//         fatherName,
//         age,
//         gender,
//         matric,
//         intermidiate,
//         higher,
//         skills,
//     }
// };
// function output (res:any){
//     display.innerHTML=
//     `<h1>Name: ${res.Name}</h1>
//     <h1>FatherName: ${res.fatherName}</h1>
//     <p>Name: ${res.age}</p>
//     <p>Name: ${res.gender}</p>
//     <p>Name: ${res.matric}</p>
//     <p>Name: ${res.intermidiate}</p>
//     <p>Name: ${res.higher}</p>
//     <p>Name: ${res.skills}</p>`
// }
// function handler(event:Event){
//     event.preventDefault();
//     const data = resume();
//     if(data){
//         output(data)
//     } 
// };
// document.addEventListener('DOMContentLoaded', ()=>{
//     const form = document.querySelector('#resume-form')as HTMLElement;
//     form.addEventListener('submit',handler)
// })
// submit.addEventListener('click',()=>{
//    let dd = output(resume)
// })
// let form = document.querySelector('form') as HTMLElement
// form.onclick
// const submit = document.querySelector("button[type='submit']") as HTMLButtonElement;
var display = document.querySelector('#resume-display');
function resume() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var Name = (_a = document.querySelector("#names")) === null || _a === void 0 ? void 0 : _a.value;
    var fatherName = (_b = document.querySelector("#fname")) === null || _b === void 0 ? void 0 : _b.value;
    var age = (_c = document.querySelector("#age")) === null || _c === void 0 ? void 0 : _c.value;
    var gender = (_d = document.querySelector("#gender")) === null || _d === void 0 ? void 0 : _d.value;
    var matric = (_e = document.querySelector("#matric")) === null || _e === void 0 ? void 0 : _e.value;
    var intermidiate = (_f = document.querySelector("#intermidiate")) === null || _f === void 0 ? void 0 : _f.value;
    var higher = (_g = document.querySelector("#higher")) === null || _g === void 0 ? void 0 : _g.value;
    var skills = (_h = document.querySelector("#skills")) === null || _h === void 0 ? void 0 : _h.value;
    // Check if any field is empty
    if (!Name || !fatherName || !age || !gender || !matric || !skills) {
        alert('Please fill all required fields');
        return null;
    }
    return {
        Name: Name,
        fatherName: fatherName,
        age: age,
        gender: gender,
        matric: matric,
        intermidiate: intermidiate,
        higher: higher,
        skills: skills,
    };
}
function output(res) {
    display.innerHTML = "\n        <h1>Name: ".concat(res.Name, "</h1>\n        <h1>Father Name: ").concat(res.fatherName, "</h1>\n        <p>Age: ").concat(res.age, "</p>\n        <p>Gender: ").concat(res.gender, "</p>\n        <p>Matric: ").concat(res.matric, "</p>\n        <p>Intermediate: ").concat(res.intermidiate, "</p>\n        <p>Higher Education: ").concat(res.higher, "</p>\n        <p>Skills: ").concat(res.skills, "</p>\n        <button id=\"download-btn\">Download Resume</button>\n    ");
    var downloadButton = document.querySelector("#download-btn");
    downloadButton.addEventListener('click', function () { return downloadResume(res); });
}
function downloadResume(res) {
    var resumeText = "\n    Name: ".concat(res.Name, "\n    Father Name: ").concat(res.fatherName, "\n    Age: ").concat(res.age, "\n    Gender: ").concat(res.gender, "\n    Matric: ").concat(res.matric, "\n    Intermediate: ").concat(res.intermidiate || 'N/A', "\n    Higher Education: ").concat(res.higher || 'N/A', "\n    Skills: ").concat(res.skills, "\n    ");
    var blob = new Blob([resumeText], { type: 'text/plain' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "".concat(res.Name, "_Resume.txt");
    link.click();
}
function handler(event) {
    event.preventDefault();
    var data = resume();
    if (data) {
        output(data);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('#resume-form');
    form.addEventListener('submit', handler);
});
