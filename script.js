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
    name: "PHP",
    unit: "k",
    pop: 559
  },
  {
    name: "C++",
    unit: "k",
    pop: 413
  }
];
(() => {
  Pts.namespace(window);

  var space = new CanvasSpace("#chart");
  var form = space.getForm();
  console.log(Rectangle);

  space.add((time, ftime) => {
    let index = 0;
    form.stroke("#42e").line([new Pt(50, 295), new Pt(50, 30)]);
    form.stroke("#42e").line([new Pt(50, 295), new Pt(1320, 295)]);
    for (let i = 1; i < 26; i++) {
      (() => {
        if (i % 2 == 0) return;
        let size = new Pt(0, 0);
        form.fill("#09f");

        form.textBox(
          Rectangle.fromTopLeft(new Pt(35 + i * 50, 305), size.$max(50)),
          i + "00k"
        );
      })();
      form
        .stroke("#bdc3c7")
        .line([new Pt(50 + i * 50, 295), new Pt(50 + i * 50, 30)]);
    }

    for (let i of config) {
      let to = (i.unit == "M" ? i.pop * 1000 : i.pop) * 0.5;
      let from = 60 + index * 40;
      form.stroke("#bdc3c7", 0).line([new Pt(50, from), new Pt(1320, from)]);
      index++;
    }
    index = 0;
    for (let i of config) {
      let to = (i.unit == "M" ? i.pop * 1000 : i.pop) * 0.5 + 50;
      let from = 60 + index * 40;

      form.stroke("#e74c3c", 20).line([new Pt(50.5, from), new Pt(to, from)]);
      (() => {
        let size = new Pt(0, 0);
        form.fill("#2c3e50");
        form.font(16, "bold");
        form.textBox(
          Rectangle.fromTopLeft(new Pt(to + 10, from), size.$max(100)),
          i.name
        );
      })();
      index++;
    }

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
      pointer[1] =
        (pointer[1] - 60) % 40 > 20
          ? pointer[1] - ((pointer[1] - 60) % 40) + 40
          : pointer[1] - ((pointer[1] - 60) % 40);
      form.stroke("#09f", 0);
      form.fill("#09f").point(pointer, 5, "circle");
    })();
  });
  space
    .play()
    .bindMouse()
    .bindTouch();
})();
