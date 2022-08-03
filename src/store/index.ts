// import { tiaoshiStore } from './moudules/tiaoshi'
import { tiaoshi2Store } from './moudules/tiaoshi2'
import { useSeachStore } from '@/store/moudules/search'
import { usePlayerStore, userPlayerInit } from './moudules/player'
import { useActiveStore } from './moudules/left'
import { useVideoStore } from './video'
import { useLogin } from './moudules/login'
import { useSwiper } from './moudules/swiper'

export default function useStore() {
  return {
    tiaoshi2: tiaoshi2Store(),
    search: useSeachStore(),
    player: usePlayerStore(),
    playerInit: userPlayerInit(),
    leftActive: useActiveStore(),
    video: useVideoStore(),
    login: useLogin(),
    useswiper: useSwiper()
  }
}
