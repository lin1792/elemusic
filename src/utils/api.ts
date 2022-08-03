import http from '@/utils/http'
import { SearchHotDetail, SearchSuggest } from '@/models/search'
import { SongUrl } from '@/models/SongUrl'
import { Song } from '@/models/Song'
import { PersonalizedMv, Personalized, PersonalizedNewSong } from '@/models/personalized'
import type { MvUrl } from '@/models/mv'
import type { Banner } from '@/models/banner'
import { ArtistDetail } from '@/models/artistDetail'
import { PlayListDetail } from '@/models/playList'


// 用来调试接口
export async function useTiaoshi(phone: string, captcha: string, password: string) {
  const res = await http.get<{
    code: number,
    cookie: string,
    token: string,
  }>('login/cellphone?phone13599644583&captcha=880867&password=qwe', { phone, captcha, password })


  console.log(res)
  return res
  // console.log(data[0].content)
}

// 热搜
export async function useHotsearch() {
  const { data } = await http.get<{ data: SearchHotDetail[] }>('/search/hot/detail')
  return data
}
// 热搜建议
export async function useSearchSuggest(keywords: string) {
  const { result } = await http.get<{ result: SearchSuggest }>('search/suggest', { keywords })
  return result
}
// 歌曲地址
export async function useSongUrl(id: number) {
  const { data } = await http.get<{ data: SongUrl[] }>('/song/url', { id })
  return data[0]
}
// 歌曲详情
export async function useDetail(id: number) {
  const { songs } = await http.get<{ songs: Song[] }>('/song/detail', { ids: id })
  return songs[0]
}

// 推荐MV
export async function usePersonalizedMv() {
  const { result } = await http.get<{ result: PersonalizedMv[] }>('personalized/mv')
  return result
}

// MvUrl
export async function useMvUrl(id: number) {
  const { data } = await http.get<{ data: MvUrl }>('mv/url', { id })
  return data
}

// 推荐轮播图banner
export async function useBanner() {
  const { banners } = await http.get<{ banners: Banner[] }>('/banner')
  return banners
}

// 推荐歌单
export async function usePersonalized() {
  const { result } = await http.get<{ result: Personalized[] }>('/personalized?limit=10')
  console.log(result)

  return result
}

// 推荐新音乐
export async function usePersonalizedNewsong() {
  const { result } = await http.get<{ result: PersonalizedNewSong[] }>('/personalized/newsong')
  return result
}

// 歌手信息
export async function useArtistDetail(id: number) {
  const { data } = await http.get<{ data: ArtistDetail }>('artist/detail', { id })
  return data
}

// 获取歌单详情
export async function usePlaylistDetail(id: number) {
  const { playlist } = await http.get<{ playlist: PlayListDetail }>('/playlist/detail', { id })
  return playlist
}

// 获取歌单所有歌曲
export async function usePlaylistTrackAll(id: number) {
  const { songs } = await http.get<{ songs: Song[] }>('/playlist/track/all', { id })
  return songs
}
// 手机登录
export async function useLoginfunction(phone: string, captcha: string, password: string) {
  return await http.get<{
    code: number,
    cookie: string,
    token: string,
  }>('login/cellphone', { phone, captcha, password })
}

export async function useYanZhen(phone: string, captcha: string) {
  return await http.get('/captcha/verify', { phone, captcha })
}
export async function useLoginStatus() {
  return await http.get('login/status')
}
// 验证码登录获取验证码
export async function useYanZhenMa(phone: string) {
  await http.get(' /captcha/sent', { phone })
}
