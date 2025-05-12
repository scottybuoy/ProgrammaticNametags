let dataTarget = document.getElementById("dataTarget").children;
let students = [];

for (let row of dataTarget) {
    let studentName = row.children[0].textContent;
    let studentClass = row.children[1].textContent.split("(")[0];
    let nametagInfo = {
        studentName,
        studentClass
    }
    students.push(nametagInfo);
}

console.log(students);

const createNameTags = () => {
    // CREATE NEW WINDOW
    const nameTagWindow = window.open('', '_blank');

    // STYLING
    const style = `body {
    font-family: sans-serif;
}

#app-cont {
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
}

.nametag-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 250px;
    border: 1px black solid;
}

.camper-name {
    width: 100%;
    text-align: center;
    font-size: 27px;
    font-weight: 900;
    margin-top: -5px;
    margin-bottom: 0px;
}

.camp-name {
    width: 100%;
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
    color: rgb(19, 97, 199)
}

#page-break-target {
    break-after: page;
}
`;

nameTagWindow.document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Programmatic Name Tags</title>
         <style>${style}</style>
    </head>
    <body>
        <div id="app-cont"></div>
    </body>
    </html>`);

const writeNameTags = (students) => {
    let nametagNum = 1;
    for (let student of students) {
        let nameTagCont = document.createElement('div');
        nameTagCont.setAttribute('class', 'nametag-cont');
        let nameEl = document.createElement('p');
        nameEl.setAttribute('class', 'camper-name');
        nameEl.textContent = student.studentName;
        let classEl = document.createElement('p');
        classEl.setAttribute('class', 'camp-name');
        classEl.textContent = student.studentClass;
        nameTagCont.append(nameEl, classEl);
        nameTagWindow.document.getElementById('app-cont').append(nameTagCont);

        // add page-break if nametag is last that fits on page
        if (nametagNum===8) {
            nameTagCont.setAttribute('id', 'page-break-target');
            nametagNum = 0;
        }
        nametagNum++;
    }
};

writeNameTags(students);

};

createNameTags();
