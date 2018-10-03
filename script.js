const config = [
  {
    name: "Javascript",
    unit: "M",
    pop: 2.3
  },
  {
    name: "Python",
    unit: "M",
    pop: 1
  },
  {
    name: "Java",
    unit: "k",
    pop: 986
  },
  {
    name: "Ruby",
    unit: "k",
    pop: 870
  },
  {
    name: "php",
    unit: "k",
    pop: 559
  },
  {
    name: "c++",
    unit: "k",
    pop: 413
  }
];
(() => {
  Pts.namespace(window);

  var space = new CanvasSpace("#chart");
  var form = space.getForm();
  space.add((time, ftime) => {
    /*let radius = Num.cycle((time % 1000) / 1000) * 100;
    form.fill("#09f").point(space.pointer, radius, "circle");*/
    let index = 0;
    for (let i of config) {
      let to = (i.unit == "M" ? i.pop * 1000 : i.pop) * 0.5;
      let from = 35 + index * 50;
      form.stroke("#42e").line([new Pt(0, from), new Pt(to, from)]);
      index++;
    }
  });
  space
    .play()
    .bindMouse()
    .bindTouch();
})();
