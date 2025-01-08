// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];
const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

function totalSalary(employees){
    let totalSalary = 0;
    for(let employee of employees){
        let currentsalary = employee.starting + (employee.experience * employee.increment);
        totalSalary = totalSalary + currentsalary;
    }
    return totalSalary
}

let salary = totalSalary(employees);
console.log('Total Salary:',salary);


// let totalMonthlySalary = 0;
// for (let i = 0; i < employees.length; i++) {
//     const { experience, starting, increment } = employees[i];
//     const currentSalary = starting + (experience * increment);
//     totalMonthlySalary += currentSalary;
// }

// console.log(`Total salary to be provided by the company in a month: ${totalMonthlySalary}`);