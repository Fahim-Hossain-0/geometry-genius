function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const value = parseFloat(inputText);
    return value; 
}
