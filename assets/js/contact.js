function submitData(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (name == "") {
    return alert("name harus diisi");
  } else if (email == "") {
    return alert("email harus diisi");
  } else if (phoneNumber == "") {
    return alert("phone number harus diisi");
  } else if (subject == "") {
    return alert("subject harus diisi");
  } else if (message == "") {
    return alert("message harus diisi");
  }
  console.log(`Name: ${name}`)
  console.log(`Email: ${email}`);
  console.log(`Phone Number: ${phoneNumber}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
}
