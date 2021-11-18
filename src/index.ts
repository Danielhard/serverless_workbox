
import router from './routes'
import { getData } from './mock'


addEventListener('fetch', (event: any) => {
  event.respondWith(router.handle((event.request)))
})

addEventListener('scheduled', (event: any) => {
  event.waitUntil(getData())
})
