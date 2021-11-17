
import { Router } from 'itty-router'
const router =  Router();

addEventListener('fetch', (event: any) => {
  event.respondWith(router.handle((event.request)))
})

addEventListener('scheduled', (event: any) => {
  event.waitUntil()
})
