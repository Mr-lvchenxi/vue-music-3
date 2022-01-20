import { createApp } from 'vue'
import Loading from './index.vue'

const loadingDirective = {
  mounted(el, binding) {
    const app = createApp(Loading)
    console.log('app-------->', app)
    const instance = app.mount(document.createElement('div'))
    console.log('instance--->', instance)
    el.instance = instance
    console.log('el-------->', el)
    if (binding.value) {
      appendChild(el)
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      binding.value ? appendChild(el) : removeChild(el)
    }
  }
}

function appendChild(el) {
    console.log('appendChild - el ----->', el.instance.$el)
  el.appendChild(el.instance.$el)
}

function removeChild(el) {
  el.removeChild(el.instance.$el)
}

export default loadingDirective
