import http from '@/utils/http'
// 调试接口
export async function useDetail() {
  const song = await http.get('/top/artists')
  console.log(song)
  return song
}
