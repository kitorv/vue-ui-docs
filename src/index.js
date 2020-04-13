import Button from "./button/index.js";

const components = [Button];

const install = Vue => {
  components.forEach(component => {
    Vue.use(component);
  });
};

export default {
  install
};
