function data() {
  const a = document.querySelector(".n1").value;
  const b = document.querySelector(".n2").value;
  const c = document.querySelector(".n3").value;
  const d = document.querySelector(".n4").value;

  if (a == "" || b == "" || c == "" || d == "") {
    alert("All fields are mendatory");
    return false;
  } else if (b.length < 10 || b.length > 10) {
    alert("Number should be 10 Digit ! please valid Numebr");
    return false;
  } else if (isNaN(b)) {
    alert("Only Number are Allowed");
    return false;
  } else if (c != d) {
    alert("Please Enter same password");
    return false;
  } else {
    true;
  }
}
