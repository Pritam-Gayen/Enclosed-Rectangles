

function getObj(objA, color) {
    var objAKeys = Object.keys(objA)
    var objectA = document.createElement("div")
    objectA.setAttribute("class", "rectangle")
    document.body.appendChild(objectA)
    objectA.style.backgroundColor = `${color}`
    
    for(let i=0; i<4; i++) {
        
        if(objAKeys[i] == "top")
            objectA.style.top = `${objA[objAKeys[i]]}`

        if(objAKeys[i] == "left")
            objectA.style.left = `${objA[objAKeys[i]]}`

        if(objAKeys[i] == "height")
        objectA.style.height = `${objA[objAKeys[i]]}`

        if(objAKeys[i] == "width")
        objectA.style.width = `${objA[objAKeys[i]]}`

        if(objAKeys[i] == "bottom")
        objectA.style.bottom = `${objA[objAKeys[i]]}`

        if(objAKeys[i] == "right")
        objectA.style.right = `${objA[objAKeys[i]]}`

    }    
}


function makeNewObj(a, b) {
    getObj(a, "red")
    getObj(b, "green")
    var rectangles = document.getElementsByClassName("rectangle")

    var rec1Height = rectangles[0].offsetHeight 
    var rec1Width = rectangles[0].offsetWidth
    var rec1Top = rectangles[0].offsetTop
    var rec1Left = rectangles[0].offsetLeft

    var rec2Height = rectangles[1].offsetHeight 
    var rec2Width = rectangles[1].offsetWidth
    var rec2Top = rectangles[1].offsetTop
    var rec2Left = rectangles[1].offsetLeft

    if(rec1Top <= rec2Top && rec1Top + rec1Height >= rec2Top) {
        // top line of b is inside a
        if(rec1Top + rec1Height >= rec2Top + rec2Height) {
            // bottom line of b is inside a 
            if(rec1Left <= rec2Left && rec1Left + rec1Width >= rec2Left) {
                // left line of b inside a
                if(rec1Left + rec1Width >= rec2Left + rec2Width) {
                    // right line of b is inside a
                    // b is inside a
                    var newObj = {
                        top: `${rec1Top}px`,
                        left: `${rec1Left}px`,
                        height: `${rec1Height}px`,
                        width: `${rec1Width}px`,
                        children: [{
                            top: `${rec2Top - rec1Top}px`,
                            left: `${rec2Left - rec1Left}px`,
                            height: `${rec2Height}px`,
                            width: `${rec2Width}px`,
                            children:[]
                        }]
                    }
                    return newObj
                }
            }
        }
    }
    return a
}

var a = {
    top:'20px',
    left:'20px',
    height:'40px',
    width:'60px',
    children:[]
}

var b = {
    top:'30px',
    left:'30px',
    height:'20px',
    width:'30px',
    children:[]
}

var result = makeNewObj(a, b)
