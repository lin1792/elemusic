import http from '@/utils/http'
import { SearchHotDetail, SearchSuggest } from '@/models/search'
import { SongUrl } from '@/models/SongUrl'
import { Song } from '@/models/Song'
// 调试接口
export async function useTiaoshi() {
  // const result1 = await http.get('/search/suggest?keywords=许嵩')
  const { result } = await http.get('/search/suggest?keywords=许嵩')
  const { songs } = await http.get('/song/detail?ids=347230')
  console.log(songs[0])
  // console.log(data[0].content)
}

// 热搜
export async function useHotsearch() {
  const { data } = await http.get<{ data: SearchHotDetail[] }>('/search/hot/detail')
  return data
}

export async function useSearchSuggest(keywords: string) {
  const { result } = await http.get<{ result: SearchSuggest }>('search/suggest', { keywords })
  return result
}

export async function useSongUrl(id: number) {
  const { data } = await http.get<{ data: SongUrl[] }>('/song/url', { id })
  return data[0]
}

export async function useDetail(id: number) {
  const { songs } = await http.get<{ songs: Song[] }>('/song/detail', { ids: id })
  return songs[0]
}
