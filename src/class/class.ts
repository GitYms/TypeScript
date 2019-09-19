class Auto {
  state: number = 1;
  private state1: number = 2;
  protected state2: number = 3;
}

interface AutoInterface extends Auto{}

class SubAuto extends Auto implements AutoInterface{
  show() {
    console.log(this.state);
    console.log(this.state2);
  }
}

let subAuto = new SubAuto();
subAuto.show();
console.log(subAuto);