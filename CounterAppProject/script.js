let decrease = document.getElementById("decrease");
let para = document.querySelector("p");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");

let object = {
  count: 0,
  decrease() {
    return (this.count = this.count - 1);
  },
  reset() {
    return (this.count = 0);
  },
  increase() {
    return (this.count = this.count + 1);
  },
};

decrease.addEventListener("click", () => {
  para.innerHTML = object.decrease();
});
reset.addEventListener("click", () => {
  para.innerHTML = object.reset();
});
increase.addEventListener("click", () => {
  para.innerHTML = object.increase();
});
