let output = document.getElementById("output");

function generateRandomPassword() {
    let length = parseInt(document.getElementById("input").value);

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=<>?";
    const error = "Password length should be greater than 0";

    if (length <= 0) {
      output.innerText = error;
      return null;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    try {
      if (length > 20){
        throw new Error("Число має бути менше 20");
      } else{
        output.innerText = password;
      }
    } catch (error) {
      output.innerText = error.message;
    }
}
  