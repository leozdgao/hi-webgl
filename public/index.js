const canvas = document.getElementById('canvas')
const context = canvas.getContext('webgl')
const triangleVertexPositionBuffer = context.createBuffer()
const squareVertexPositionBuffer = context.createBuffer()

const triangleVertices = [
  0.0,  1.0,  0.0,
 -1.0, -1.0,  0.0,
  1.0, -1.0,  0.0
]
const squareVertices = [
  1.0,  1.0,  0.0,
 -1.0,  1.0,  0.0,
  1.0, -1.0,  0.0,
 -1.0, -1.0,  0.0
]

context.bindBuffer(context.ARRAY_BUFFER, triangleVertexPositionBuffer)
context.bufferData(context.ARRAY_BUFFER, new Float32Array(vertices), context.STATIC_DRAW)

triangleVertexPositionBuffer.itemSize = 3
triangleVertexPositionBuffer.numItems = 3

context.bindBuffer(context.ARRAY_BUFFER, squareVertexPositionBuffer);
vertices = [
     1.0,  1.0,  0.0,
    -1.0,  1.0,  0.0,
     1.0, -1.0,  0.0,
    -1.0, -1.0,  0.0
];
context.bufferData(context.ARRAY_BUFFER, new Float32Array(vertices), context.STATIC_DRAW);
squareVertexPositionBuffer.itemSize = 3;
squareVertexPositionBuffer.numItems = 4;

// draw scene
context.viewport(0, 0, context.viewportWidth, context.viewportHeight)
context.clear(context.COLOR_BUFFER_BIT | context.DEPTH_BUFFER_BIT)


