function calculateRectangleArea(){
    const rectangleWidthInput = document.getElementById("triangle-width")
    const rectangleWidthText = rectangleWidthInput.value
    const width = parseFloat(rectangleWidthText)
    console.log(width)
    const rectangleLenghtInput = document.getElementById("triangle-lenght")
    const rectangleLenghtText = rectangleLenghtInput.value
    const lenght = parseFloat(rectangleLenghtText)
    console.log(lenght)
    const area = width*lenght
    console.log(area);
}