function calculateTax(income, expenses) {
  if (income < 0) {
    return "Invalid Input";
  } else if (expenses < 0) {
    return "Invalid Input";
  }
  const Difference = income - expenses;
  const Tax = Difference * 0.2;

  return Tax;
}

