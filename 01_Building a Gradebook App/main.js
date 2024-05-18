// Calculate the average score for the class. 
function getAverage(scores) {
    let total = 0;
    let length = scores.length;

    for(let i = 0; i < length; i++) {
        total += scores[i];
    }

    let result = total / length;
    return result;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));  // Expected output: 71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));  // Expected output: 85.4

// Converting the student score to a letter grade.
function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90 && score <= 99) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else if (score >= 0 && score <= 59) {
        return "F";
    } else {
        return "Invalid score";
    }
}

console.log(getGrade(96));
console.log(getGrade(100));
console.log(getGrade(82));
console.log(getGrade(56));

// Check if a student has a passing grade
function hasPassingGrade(score) {
    if (getGrade(score) !== "F"){
      return true
    }else{return false}
  }
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));

// Message the student with the results.
function studentMsg(totalScores, studentScore) {
    if (getGrade(studentScore) !== "F"){
    console.log(`Class average: ${getAverage(totalScores)} 
    Your grade: ${getGrade(studentScore)} 
    You passed the course.`)
    }else{ 
    console.log(`Class average: ${getAverage(totalScores)} 
    Your grade: ${getGrade(studentScore)} 
    You failed the course.`)
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

/* Valide : Class average: average-goes-here. 
Your grade: grade-goes-here. You passed the course.*/

/* Non-Valide : Class average: average-goes-here. 
Your grade: grade-goes-here. You failed the course.*/