const textArea = document.getElementById("text-area");
const result = document.getElementById("result"); // Select the result element
const radioBtn = document.querySelectorAll("input[name=text_type]");

const funkyAlphabet = {
  a: "@",
  b: "β",
  c: "¢",
  d: "Ð",
  e: "€",
  f: "ƒ",
  g: "9",
  h: "#",
  i: "!",
  j: "ʝ",
  k: "κ",
  l: "£",
  m: "₥",
  n: "η",
  o: "ø",
  p: "¶",
  q: "Ω",
  r: "®",
  s: "$",
  t: "†",
  u: "µ",
  v: "√",
  w: "ψ",
  x: "×",
  y: "¥",
  z: "ζ",
};

const filters = {
  sarcastic(data, idx) {
    if (idx % 2) {
      return data.toLowerCase();
    }
    return data.toUpperCase();
  },
  funky(data) {
    let tempText = data.toLowerCase();

    if (tempText != " ") {
      return funkyAlphabet[tempText];
    }

    return "  ";
  },
  unable(data) {
    const random = Math.floor(Math.random() * 3);

    if (data === " " && random === 2) {
      return "...";
    }

    return data;
  },
};

const handleAppendText = (text) => {

  const filter = Array.from(radioBtn).find(input => input.checked).value


  const mod = Array.from(text)?.map(filters[filter]);

  const res = mod.join("");

  result.textContent = res;
};

textArea.addEventListener("input", (e) => {
  handleAppendText(e.target.value);
});

radioBtn?.forEach(input => input.addEventListener("input", () => {
    handleAppendText(textArea.value)
}))
