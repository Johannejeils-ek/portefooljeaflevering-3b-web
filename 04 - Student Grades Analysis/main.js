/*-----------------------------------
     04 - Student Grades Analysis
 -----------------------------------

 Objective: In this exercise, students will create a program that analyzes student grades, determines the highest and lowest grades, and calculates the average grade

1. Create an array that holds 8 grades (integers between 0 and 100) representing the scores of different students - level 1: TJEK
2. Log out how many grades there are - level 1: TJEK
3. Classify and log each grade into one of the following categories - level 2: TJEK
4. Evaluate overall class performance - level 2
5. Optional - Determine - level 3
6. Output:
    The highest grade with its category.
    The lowest grade with its category.
    The average grade.
    A list of all grades with their corresponding categories.

 */

const grades = [10, 28, 42, 64, 74, 81, 90, 99]

console.log(`There are ${grades.length} grades in the class `);

for(let i = 0; i < grades.length; i++) {
    let letter;
    const grade = grades[i];

    if (grade >= 90) {
        letter = "A"
    } else if (grade >= 80) {
        letter = "B"
    } else if (grade >= 70) {
        letter = "C"
    } else if (grade >= 60) {
        letter = "D"
    } else {
        letter = "F"
    }

    console.log(`${grade}: ${letter}`)
}

let sum = grades.reduce((total, grade) => total + grade);
let averageGrade = sum / grades.length;

let gradePreformance;

if (averageGrade >= 90){
    gradePreformance = "Excellent"
} else if (averageGrade >= 80){
    gradePreformance = "Good"
} else if (averageGrade >= 70){
    gradePreformance = "Satisfactory"
} else {
    gradePreformance = "Needs Improvement"
}

console.log(`Overall Class Performance: ${gradePreformance}`)

let highest = Math.max(...grades);
let lowest = Math.min(...grades)
let avergesGrades = Math.floor(averageGrade); // For at få et helt tal

console.log(`Highest Grade: ${highest}`)
console.log(`Lowest Grade: ${lowest}`)
console.log(`Average Grade: ${avergesGrades}`)


/*There are 8 grades in the class

Grades:
10: F
28: f
42: F
64: D
74: C
81: B
90: A
99: A

Overall Class Performance: Needs Improvement

Highest Grade: 99 (A)
Lowest Grade: 10 (F)
Average Grade: 61

 */













