function foo(){
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;
    let gender=document.forms["studentform"]["gender"].value;
    let Course=document.forms["studentform"]["course"].value;
    let address=document.getElementById("address").value;
    if (name === "") {
        alert("Name cannot be empty.");
        return false;
        }
    if (age < 1 || age > 150) {
        alert("Age must be between 1 and 150.");
        return false;
          }
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
          return false;
          }
    if (phone.length !== 10 || isNaN(phone)) {
            alert("Phone number must be exactly 10 digits.");
            return false;
            }
    if (!gender) {
                alert("Please select your gender.");
                return false;
                }
    if(Course==""){
        alert("please select course");
        return false;
    }
    if(address==""){
        alert("Address must be filled out");
        return false;
    }
    
   return true;
}