import { ref } from "vue";

class Mouse {
  public x = ref(0);
  public y = ref(0);

  constructor() {}
  public update = (event: MouseEvent) => {
    console.log(this);
    console.log(event.pageX, event.pageY);
    this.x.value = event.pageX;
    this.y.value = event.pageY;
  };
}

export default new Mouse();
