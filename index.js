const canvas = new fabric.StaticCanvas("canvas2", { height: 720, width: 1280 });

const backgrounRect1 = new fabric.Rect({
  width: 1280,
  height: 720,
  left: 0,
  top: 0,
  fill: "IndianRed",
});
const backgrounRect2 = new fabric.Rect({
  width: 1280,
  height: 720,
  left: 0,
  top: 0,
  fill: "Gold",
});
const backgrounRect3 = new fabric.Rect({
  width: 1280,
  height: 720,
  left: 0,
  top: 0,
  fill: "DarkKhaki",
});
const backgrounRect4 = new fabric.Rect({
  width: 1280,
  height: 720,
  left: 0,
  top: 0,
  fill: "Violet",
});

const div1Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 100,
  fill: "aqua",
});
const div2Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 100,
  fill: "yellow",
});
const div3Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 400,
  fill: "green",
});
const div4Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 400,
  fill: "darkblue",
});
const div5Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 100,
  fill: "magenta",
});
const div6Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 100,
  fill: "maroon",
});
const div7Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 400,
  fill: "cyan",
});
const div8Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 400,
  fill: "lightgreen",
});
const div9Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 100,
  fill: "brown",
});
const div10Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 100,
  fill: "blue",
});
const div11Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 400,
  fill: "red",
});
const div12Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 400,
  fill: "pink",
});
const div13Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 100,
  fill: "darkgreen",
});
const div14Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 100,
  fill: "rose",
});
const div15Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 300,
  top: 400,
  fill: "grey",
});
const div16Object = new fabric.Rect({
  width: 300,
  height: 200,
  left: 700,
  top: 400,
  fill: "orange",
});

const group1 = new fabric.Group(
  [backgrounRect1, div1Object, div2Object, div3Object, div4Object],
  {
    width: 1280,
    height: 720,
    top: 0,
    left: 0,
  }
);

const group2 = new fabric.Group(
  [backgrounRect2, div5Object, div6Object, div7Object, div8Object],
  {
    width: 1280,
    height: 720,
    top: 0,
    left: 1280,
  }
);

const group3 = new fabric.Group(
  [backgrounRect3, div9Object, div10Object, div11Object, div12Object],
  {
    width: 1280,
    height: 720,
    top: 0,
    left: 0,
  }
);

const group4 = new fabric.Group(
  [backgrounRect4, div13Object, div14Object, div15Object, div16Object],
  {
    width: 1280,
    height: 720,
    top: 0,
    left: 0,
  }
);

canvas.add(group1);
canvas.add(group2);
// canvas.add(group3);
// canvas.add(group4);
canvas.renderAll();

const tl = anime.timeline({
  update: () => {
    canvas.renderAll();
  },
});

const slideInLeft = {
  keyframes: [
    {
      left: 1280,
      duration: 0,
    },
    {
      left: 0,
      duration: 1000,
    },
  ],
};
const slideOutLeft = {
  keyframes: [
    {
      left: 0,
      duration: 0,
    },
    {
      left: -1280,
      duration: 1000,
    },
  ],
};

const slideOutGroup1 = {
  ...slideOutLeft,
  targets: [group1],
  easing: "linear",
};

const slideInGroup2 = {
  ...slideInLeft,
  targets: [group2],
  easing: "linear",
};

tl.add(slideOutGroup1, 1000);
tl.add(slideInGroup2, 1000);
