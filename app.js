function SubmitEmail(input){
    let valRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(input.value.match(valRegex)){
        alert("Email is valid")
        document.form1.text1.focus()
        return true
    }
    else{
        alert("Invalid Email")
        document.form1.text1.focus();
        return false
    }
}