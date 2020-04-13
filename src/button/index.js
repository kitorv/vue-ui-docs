import Button from "./src/button";

Button.install = Vue => {
  Vue.component(Button.name, Button);
};

export default Button;
