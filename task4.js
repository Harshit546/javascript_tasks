class University {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    addDepartment(deptName) {
        if (!this.departments.includes(deptName)) {
            this.departments.push(deptName);
            console.log(`Added ${deptName}`);
        }
        else {
            console.log(`${deptName} already exists`)
        }
    }

    removeDepartment(deptName) {
        const idx = this.departments.indexOf(deptName);

        if (idx !== -1) {
            this.departments.splice(idx, 1);
            console.log(`${deptName} is removed`)
        }
        else {
            console.log(`${deptName} does not exists`)
        }
    }

    showDepartments() {
        if (this.departments.length === 0) {
            console.log("No departments available.")
        }
        else {
            this.departments.forEach((dept, i) => {
                console.log(`${i+1}. ${dept}`);
            })
        }
    }
}

const obj = new University("CVMU");
obj.addDepartment("Computer Science");
obj.addDepartment("Information Technology");
obj.addDepartment("Automobile Engineering");
obj.addDepartment("Mechanical Engineering");

obj.removeDepartment("Automobile Engineering");
obj.addDepartment("Food Processing Technology");

obj.showDepartments();