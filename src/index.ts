
import { Router } from 'itty-router'
import { getData } from './mock'
const router =  Router();

addEventListener('fetch', (event: any) => {
  event.respondWith(router.handle((event.request)))
})

addEventListener('scheduled', (event: any) => {
  event.waitUntil(getData())
})
