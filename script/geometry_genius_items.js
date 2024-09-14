// TriangleArea
function calculateTriangleArea(){
    const triangleBase = getInputValueById("triangle-base")
    const triangleHight = getInputValueById("triangle-hight")
    console.log(triangleBase,triangleHight,(0.5*triangleBase*triangleHight))
}
// RectangleArea
function calculateRectangleArea(){
    const rectangleWidth = getInputValueById("rectangle-width")
    const rectangleLenght = getInputValueById("rectangle-lenght")
    console.log(rectangleWidth,rectangleLenght,rectangleWidth*rectangleLenght)
}

// ParallelogramArea
function calculateParallelogramArea(){
    const parallelogramBase = getInputValueById("parallelogram-base")
    const parallelogramHight = getInputValueById("parallelogram-hight")
    const area = parallelogramBase * parallelogramHight
    console.log(parallelogramBase,parallelogramHight,area)
}