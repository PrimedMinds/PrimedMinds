var blackstanding = new Image({
  url: "https://s23.postimg.org/7ui6oe9bv/Black_L.png",
  height: height / 5,
  width: width / 5,
  y: maxY - 60,
  x: 40
})
var blackl = new Image({
  url: "https://s23.postimg.org/7ui6oe9bv/Black_L.png",
  height: height / 5,
  width: width / 5,
  x: -40
})
var blackr = new Image({
  url: "https://s24.postimg.org/ejtx6krit/Black_R.png",
  height: height / 5,
  width: width / 5,
  x: 40
})
var bandwstanding = new Image({
  url: "https://s28.postimg.org/evuzw6r19/Band_WL.png",
  height: height / 5,
  width: width / 5,
  y: maxY - 60,
  x: -40
})
var bandwl = new Image({
  url: "https://s28.postimg.org/evuzw6r19/Band_WL.png",
  height: height / 5,
  width: width / 5,
  x: -40
})
var bandwr = new Image({
  url: "https://s23.postimg.org/6zs77d7gb/Band_WR.png",
  height: height / 5,
  width: width / 5,
  x: 40
})
var leftpedestal = new Image({
  url: "https://s27.postimg.org/46cpjfvk3/Empty_L.png",
  height: height / 5,
  width: width / 5,
  x: -40,
})
var rightpedestal = new Image({
  url: "https://s28.postimg.org/455nwxekt/Empty_R.png",
  height: height / 5,
  width: width / 5,
  x: 40
})
var dragto = (input1) => {
  input1.x = mouseX
  input1.y = mouseY
}
var drop = (input1, input2, input3) => {
  input1.hide()
  input2.hide()
  input3.show()
}
var dragfrom = (input1, input2, input3) => {
  input1.show()
  input1.x = mouseX
  input1.y = mouseY
  input2.show()
  input3.hide()
}
bandwl.hide()
bandwr.hide()
blackr.hide()
blackl.hide()
leftpedestal.sendToBack()
rightpedestal.sendToBack()
forever(() => {
  if (blackstanding.mouseOver && mouseDown) {
    dragto(blackstanding)
  }
  if (blackstanding.distanceTo(rightpedestal) < 40 && !mouseDown) {
    drop(blackstanding, rightpedestal, blackr)
  }
  if (blackstanding.distanceTo(leftpedestal) < 40 && !mouseDown) {
    drop(blackstanding, leftpedestal, blackl)
  }
  if (blackr.mouseOver && mouseDown) {
    dragfrom(blackstanding, rightpedestal, blackr)
  }
  if (blackl.mouseOver && mouseDown) {
    dragfrom(blackstanding, leftpedestal, blackl)
  }
  if (blackstanding.distanceTo(rightpedestal) > 40 && blackstanding.distanceTo(leftpedestal) > 40 && !mouseDown) {
    blackstanding.y = maxY - 60
    blackstanding.x = 40
  }
  if (bandwstanding.mouseOver && mouseDown) {
    dragto(bandwstanding)
  }
  if (bandwstanding.distanceTo(rightpedestal) < 40 && !mouseDown) {
    drop(bandwstanding, rightpedestal, bandwr)
  }
  if (bandwstanding.distanceTo(leftpedestal) < 40 && !mouseDown) {
    drop(bandwstanding, leftpedestal, bandwl)
  }
  if (bandwr.mouseOver && mouseDown) {
    dragfrom(bandwstanding, rightpedestal, bandwr)
  }
  if (bandwl.mouseOver && mouseDown) {
    dragfrom(bandwstanding, leftpedestal, bandwl)
  }
  if (bandwstanding.distanceTo(rightpedestal) > 40 && blackstanding.distanceTo(leftpedestal) > 40 && !mouseDown) {
    bandwstanding.y = maxY - 60
    bandwstanding.x = -40
  }
})