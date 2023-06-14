import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.sass'
import components from './components/UI'
import VTitle from './directives/VTitle '

const app = createApp(App);
app.directive('title',VTitle)

components.forEach(component => {
   app.component(component.__name,component)
})
app.mount('#app')
