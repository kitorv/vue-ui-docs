import KtButton from './components/kt-button.vue'

const components = [
  KtButton
]

export default function (Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};
