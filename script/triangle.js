function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById("triangle-base")
    const triangleBaseText = triangleBaseInput.value
    const base = parseFloat(triangleBaseText)
    console.log(base)

    const triangleHightInput = document.getElementById("triangle-hight")
    const triangleHightText = triangleHightInput.value;
    const hight = parseFloat(triangleHightText)
    console.log(hight)
    const area = 0.5 * base * hight 
    console.log(area)
}