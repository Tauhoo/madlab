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
    (() => {
      let pointer = space.pointer;
      if (
        pointer[0] <= 50 ||
        pointer[0] >= 1320 ||
        pointer[1] <= 50 ||
        pointer[1] >= 295
      )
        return;
      pointer[0] =
        pointer[0] % 50 > 25
          ? pointer[0] - (pointer[0] % 50) + 50
          : pointer[0] - (pointer[0] % 50);
      pointer[1] = pointer[1];
      form.fill("#09f").point(pointer, 10, "circle");
    })();
    let index = 0;
    form.stroke("#42e").line([new Pt(50, 295), new Pt(50, 30)]);
    form.stroke("#42e").line([new Pt(50, 295), new Pt(1320, 295)]);
    for (let i = 1; i < 26; i++) {
      form
        .stroke("#42e")
        .line([new Pt(50 + i * 50, 295), new Pt(50 + i * 50, 30)]);
    }

    for (let i of config) {
      let to = (i.unit == "M" ? i.pop * 1000 : i.pop) * 0.5;
      let from = 60 + index * 40;
      form.stroke("#42e", 0).line([new Pt(50, from), new Pt(1320, from)]);
      index++;
    }
    index = 0;
    for (let i of config) {
      let to = (i.unit == "M" ? i.pop * 1000 : i.pop) * 0.5;
      let from = 60 + index * 40;
      form.stroke("#e74c3c", 20).line([new Pt(50, from), new Pt(to, from)]);
      index++;
    }
  });
  space
    .play()
    .bindMouse()
    .bindTouch();
})();
