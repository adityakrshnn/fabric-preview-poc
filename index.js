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
const backgrounRect5 = new fabric.Rect({
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
const div5Object = new fabric.Circle({
  width: 300,
  height: 200,
  left: 300,
  top: 100,
  fill: "magenta",
  radius: 150,
});
const div6Object = new fabric.Circle({
  width: 300,
  height: 200,
  left: 700,
  top: 100,
  fill: "maroon",
  radius: 150,
});
const div7Object = new fabric.Circle({
  width: 300,
  height: 200,
  left: 300,
  top: 400,
  fill: "cyan",
  radius: 150,
});
const div8Object = new fabric.Circle({
  width: 300,
  height: 200,
  left: 700,
  top: 400,
  fill: "lightgreen",
  radius: 150,
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
  radius: 150,
});
const div13Object = new fabric.Circle({
  width: 300,
  height: 200,
  left: 300,
  top: 100,
  fill: "darkgreen",
  radius: 150,
});
const div14Object = new fabric.Circle({
  width: 300,
  height: 200,
  left: 700,
  top: 100,
  fill: "rose",
  radius: 150,
});
const div15Object = new fabric.Circle({
  width: 300,
  height: 200,
  left: 300,
  top: 400,
  fill: "grey",
  radius: 150,
});
const div16Object = new fabric.Circle({
  width: 300,
  height: 200,
  left: 700,
  top: 400,
  fill: "teal",
});
const div17Object = new fabric.Rect({
    width: 300,
    height: 200,
    left: 300,
    top: 100,
    fill: "aqua",
  });
  const div18Object = new fabric.Rect({
    width: 300,
    height: 200,
    left: 700,
    top: 100,
    fill: "yellow",
  });
  const div19Object = new fabric.Rect({
    width: 300,
    height: 200,
    left: 300,
    top: 400,
    fill: "green",
  });
  const div20Object = new fabric.Rect({
    width: 300,
    height: 200,
    left: 700,
    top: 400,
    fill: "darkblue",
  });
//   const div5Object = new fabric.Circle({
//     width: 300,
//     height: 200,
//     left: 300,
//     top: 100,
//     fill: "magenta",
//     radius: 150,
//   });
//   const div6Object = new fabric.Circle({
//     width: 300,
//     height: 200,
//     left: 700,
//     top: 100,
//     fill: "maroon",
//     radius: 150,
//   });
//   const div7Object = new fabric.Circle({
//     width: 300,
//     height: 200,
//     left: 300,
//     top: 400,
//     fill: "cyan",
//     radius: 150,
//   });
//   const div8Object = new fabric.Circle({
//     width: 300,
//     height: 200,
//     left: 700,
//     top: 400,
//     fill: "lightgreen",
//     radius: 150,
//   });
//   const div9Object = new fabric.Rect({
//     width: 300,
//     height: 200,
//     left: 300,
//     top: 100,
//     fill: "brown",
//   });
//   const div10Object = new fabric.Rect({
//     width: 300,
//     height: 200,
//     left: 700,
//     top: 100,
//     fill: "blue",
//   });
//   const div11Object = new fabric.Rect({
//     width: 300,
//     height: 200,
//     left: 300,
//     top: 400,
//     fill: "red",
//   });
//   const div12Object = new fabric.Rect({
//     width: 300,
//     height: 200,
//     left: 700,
//     top: 400,
//     fill: "pink",
//     radius: 150,
//   });
//   const div13Object = new fabric.Circle({
//     width: 300,
//     height: 200,
//     left: 300,
//     top: 100,
//     fill: "darkgreen",
//     radius: 150,
//   });
//   const div14Object = new fabric.Circle({
//     width: 300,
//     height: 200,
//     left: 700,
//     top: 100,
//     fill: "rose",
//     radius: 150,
//   });
//   const div15Object = new fabric.Circle({
//     width: 300,
//     height: 200,
//     left: 300,
//     top: 400,
//     fill: "grey",
//     radius: 150,
//   });
//   const div16Object = new fabric.Circle({
//     width: 300,
//     height: 200,
//     left: 700,
//     top: 400,
//     fill: "orange",
//   });

const group1 = new fabric.Group(
  [backgrounRect1, div1Object, div2Object, div3Object, div4Object],
  {
    width: 1280,
    height: 720,
    top: 360,
    left: 640,
    visible: false,
    originX: "center",
    originY: "center",
  }
);

const group2 = new fabric.Group(
  [backgrounRect2, div5Object, div6Object, div7Object, div8Object],
  {
    width: 1280,
    height: 720,
    top: 360,
    left: 640,
    visible: false,
    originX: "center",
    originY: "center",
  }
);

const group3 = new fabric.Group(
  [backgrounRect3, div9Object, div10Object, div11Object, div12Object],
  {
    width: 1280,
    height: 720,
    top: 360,
    left: 640,
    visible: false,
    originX: "center",
    originY: "center",
  }
);

const group4 = new fabric.Group(
  [backgrounRect4, div13Object, div14Object, div15Object, div16Object],
  {
    width: 1280,
    height: 720,
    top: 360,
    left: 640,
    visible: false,
    originX: "center",
    originY: "center",
  }
);

const group5 = new fabric.Group(
  [backgrounRect5, div17Object, div18Object, div19Object, div20Object],
  {
    width: 1280,
    height: 720,
    top: 360,
    left: 640,
    visible: false,
    originX: "center",
    originY: "center",
    clipPath: new fabric.Rect({
      width: 1280,
      height: 720,
      left: 0,
      top: 0,
    }),
  }
);

// const group6 = new fabric.Group(
//   [backgrounRect2, div5Object, div6Object, div7Object, div8Object],
//   {
//     width: 1280,
//     height: 720,
//     top: 360,
//     left: 640,
//     visible: false,
//     originX: "center",
//     originY: "center",
//   }
// );

// const group7 = new fabric.Group(
//   [backgrounRect3, div9Object, div10Object, div11Object, div12Object],
//   {
//     width: 1280,
//     height: 720,
//     top: 360,
//     left: 640,
//     visible: false,
//     originX: "center",
//     originY: "center",
//   }
// );

// const group8 = new fabric.Group(
//   [backgrounRect4, div13Object, div14Object, div15Object, div16Object],
//   {
//     width: 1280,
//     height: 720,
//     top: 360,
//     left: 640,
//     visible: false,
//     originX: "center",
//     originY: "center",
//   }
// );

// canvas.add(group8);
// canvas.add(group7);
// canvas.add(group6);
canvas.add(group5);
canvas.add(group4);
canvas.add(group3);
canvas.add(group2);
canvas.add(group1);
canvas.renderAll();

const show = (group) => {
  return {
    targets: [group],
    keyframes: [
      {
        opacity: 1,
        duration: 0,
      },
      {
        opacity: 1,
        duration: 1,
      },
    ],
    begin: () => {
      group.set("visible", true);
    },
  };
};

const hide = (group) => {
  return {
    targets: [group],
    keyframes: [
      {
        opacity: 1,
        duration: 0,
      },
      {
        opacity: 1,
        duration: 1,
      },
    ],
    begin: () => {
      group.set("visible", false);
    },
  };
};

const tl = anime.timeline({
  update: () => {
    canvas.renderAll();
  },
});

const slideInLeft = {
  keyframes: [
    {
      left: 1920,
      duration: 0,
    },
    {
      left: 640,
      duration: 1000,
    },
  ],
};
const slideOutLeft = {
  keyframes: [
    {
      left: 640,
      duration: 0,
    },
    {
      left: -640,
      duration: 1000,
    },
  ],
};

const fadeIn = {
  keyframes: [
    {
      opacity: 0,
      duration: 0,
    },
    {
      opacity: 1,
      duration: 1000,
    },
  ],
};

const fadeOut = {
  keyframes: [
    {
      opacity: 1,
      duration: 0,
    },
    {
      opacity: 0,
      duration: 1000,
    },
  ],
};

const zoomIn = {
  keyframes: [
    {
      scaleX: 5,
      scaleY: 5,
      duration: 0,
    },
    {
      scaleX: 1,
      scaleY: 1,
      duration: 1000,
    },
  ],
};

const zoomOutFade = {
  keyframes: [
    {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      duration: 0,
    },
    {
      scaleX: 5,
      scaleY: 5,
      opacity: 0,
      duration: 1000,
    },
  ],
};

const wipeIn = {
  keyframes: [
    {
      left: -1280,
      duration: 0,
    },
    {
      left: 0,
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

const fadeOutGroup2 = {
  ...fadeOut,
  targets: [group2],
  easing: "linear",
};

const fadeInGroup3 = {
  ...fadeIn,
  targets: [group3],
  easing: "linear",
};

const zoomOutFadeGroup3 = {
  ...zoomOutFade,
  targets: [group3],
  easing: "linear",
};

const wipeInGroup5 = {
  ...wipeIn,
  targets: [group5.clipPath],
  easing: "linear",
  update: () => {
    group5.set("dirty", true);
    group5.clipPath.set("dirty", true);
  }
};

tl.add(show(group1), 0);
tl.add(show(group2), 1000);
tl.add(show(group3), 3000);
tl.add(hide(group2), 4000);
tl.add(show(group4), 5000);
tl.add(hide(group3), 6000);
// tl.add(show(group5), 7000);
// tl.add(hide(group4), 8000);

tl.add(slideOutGroup1, 1000);
tl.add(slideInGroup2, 1000);
tl.add(fadeInGroup3, 1000);
tl.add(fadeOutGroup2, 3000);
tl.add(fadeInGroup3, 3000);
tl.add(zoomOutFadeGroup3, 5000);
// tl.add(wipeInGroup5, 7000);
