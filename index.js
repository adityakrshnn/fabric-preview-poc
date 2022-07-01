const canvas = new fabric.StaticCanvas("canvas2", { height: 720, width: 1280 });

const backgrounRect = new fabric.Rect({
  width: 1280,
  height: 720,
  left: 0,
  top: 0,
  fill: "IndianRed",
});

const div1Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 100,
});
const div2Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 100,
});
const div3Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 400,
});
const div4Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 400,
});
const div5Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 100,
});
const div6Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 100,
});
const div7Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 400,
});
const div8Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 400,
});
const div9Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 100,
});
const div10Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 100,
});
const div11Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 400,
});
const div12Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 400,
});
const div13Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 100,
});
const div14Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 100,
});
const div15Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 400,
});
const div16Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 400,
});

// canvas.add(div1Object);
// canvas.add(div2Object);
// canvas.add(div3Object);
// canvas.add(div4Object);
// canvas.add(div5Object);
// canvas.add(div6Object);
// canvas.add(div7Object);
// canvas.add(div8Object);
// canvas.add(div9Object);
// canvas.add(div10Object);
// canvas.add(div11Object);
// canvas.add(div12Object);
// canvas.add(div13Object);
// canvas.add(div14Object);
// canvas.add(div15Object);
// canvas.add(div16Object);

const group1 = new fabric.Group(
  [backgrounRect, div1Object, div2Object, div3Object, div4Object],
  {
    width: 1280,
    height: 720,
    fill: "#222",
    top: 0,
    left: 0,
  }
);

// div1Object.set('visible', true);
// div2Object.set('visible', true);
// div3Object.set('visible', true);
// div4Object.set('visible', true);
// div1Object.set('opacity', 1);
// div2Object.set('opacity', 1);
// div3Object.set('opacity', 1);
// div4Object.set('opacity', 1);
// group1.addWithUpdate();

canvas.add(group1);
canvas.renderAll();
