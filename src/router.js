import { createMemoryHistory, createRouter } from 'vue-router'

import PageA from './components/PageA.vue'
import PageB from './components/PageB.vue'

const routes = [
  { path: '/', component: PageA },
  { path: '/pageb', component: PageB },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router