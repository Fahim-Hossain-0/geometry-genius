function calculateRectangleArea(){
    const rectangleWidthInput = document.getElementById("rectangle-width")
    const rectangleWidthText = rectangleWidthInput.value
    const width = parseFloat(rectangleWidthText)
    console.log(width)
    const rectangleLenghtInput = document.getElementById("rectangle-lenght")
    const rectangleLenghtText = rectangleLenghtInput.value
    const lenght = parseFloat(rectangleLenghtText)
    console.log(lenght)
    const area = width*lenght
    console.log(area);
}