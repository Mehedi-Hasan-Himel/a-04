function sendNotification(email) {
  if (email.indexOf("@") < 0) {
    return "Invalid Email";
  }
  let splitEmail = email.split("@");
  let name = splitEmail[0];
  let domain = splitEmail[1];

  let Output = `${name} sent you an email from ${domain}`;
  return Output;
}

