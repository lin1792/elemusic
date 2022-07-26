// import { tiaoshiStore } from './moudules/tiaoshi'
import { tiaoshi2Store } from './moudules/tiaoshi2'

export default function useStore() {
  return {
    // tiaoshi: tiaoshiStore(),
    tiaoshi2: tiaoshi2Store()
  }
}
