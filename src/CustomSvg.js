function GenerateLines() {
  const arr = new Array(Math.floor(Math.random() * 8)).fill(0);
  return arr.map((x, i) => {
    const opacity = Math.random();
    const x1 = Math.floor(Math.random() * 100);
    const x2 = Math.floor(Math.random() * 100);
    const y1 = Math.floor(Math.random() * 100);
    const y2 = Math.floor(Math.random() * 100);
    const color = intToRGB(hashCode(makeRandomStr(10)));

    return (
      <line
        key={i}
        stroke={"#" + color}
        strokeWidth="1"
        opacity={opacity}
        x1={x1}
        x2={x2}
        y1={y1}
        y2={y2}
      />
    );
  });
}

function GenerateCircles(props) {
  const arr = new Array(Math.floor(Math.random() * 10)).fill(0);
  return arr.map((x, i) => {
    const cx = Math.floor(Math.random() * 150);
    const cy = Math.floor(Math.random() * 150);
    const r = Math.floor(Math.random() * 30);
    const opacity = Math.random();
    const color = intToRGB(hashCode(makeRandomStr(10)));
    return (
      <circle
        key={i}
        cx={cx}
        cy={cy}
        r={r}
        opacity={opacity}
        fill={"#" + color}
      />
    );
  });
}

function GeneratePlygons(props) {
  const arr = new Array(Math.floor(Math.random() * 10)).fill(0);
  return arr.map((x, i) => {
    const color = intToRGB(hashCode(makeRandomStr(10)));
    const p1 = Math.floor(Math.random() * 150);
    const p2 = Math.floor(Math.random() * 150);
    const p21 = Math.floor(Math.random() * 150);
    const p3 = Math.floor(Math.random() * 150);
    const p4 = Math.floor(Math.random() * 150);
    const p41 = Math.floor(Math.random() * 150);
    const p5 = Math.floor(Math.random() * 150);
    const opacity = Math.random();
    return (
      <polygon
        key={i}
        fill={"#" + color}
        points={`${p1}, ${p2} ${p21}, ${p3},${p4} ${p41},${p5}`}
        opacity={opacity}
      />
    );
  });
}

function CustomSvg(props) {
  const color = intToRGB(hashCode(props.address));

  return (
    <div style={styles.shape}>
      <svg
        version="1.1"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ backgroundColor: color }}
      >
        <GenerateCircles />
        <GenerateLines />
        <GeneratePlygons />
      </svg>
    </div>
  );
}

function hashCode(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(i) {
  var c = (i & 0x00ffffff).toString(16).toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}

function makeRandomStr(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const styles = {
  shape: {
    width: "150px",
    height: "150px",
    borderRadius: "90px",
    overflow: "hidden",
  },
};

export default CustomSvg;
