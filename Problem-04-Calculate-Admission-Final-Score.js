function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  if (
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  if (obj.testScore > 50 || obj.schoolGrade > 30) {
    return "Invalid Input";
  }

  let finalScore = obj.testScore + obj.schoolGrade;

  if (obj.isFFamily === true) {
    finalScore += 20;
  }

  return finalScore >= 80;
}

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 50,
    schoolGrade: 25,
    isFFamily: true,
  })
); 


