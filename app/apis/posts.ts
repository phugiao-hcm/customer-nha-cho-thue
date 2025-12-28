
import {API_BASE} from '@/utils/const'

export function usePhongTroList(query: Record<string, any> = {}) {
  return useFetch(`${API_BASE}/v1/phongtro/getPhongTroList`, {
    params: {
      page: 1,
      provinceId: 28,
      wardId: '',
      price: '',
      square: null,
      areaId: null,
      facility: '',
      limit: 10,
      keyword: '',
      roomType: null,
      ...query, // ghi đè params khi truyền vào
    },
  })
}

// apis/posts.ts
export function usePhongTroDetail(id: number) {
  return useFetch(`${API_BASE}/v1/phongtro/getPhongTroDetail`, {
    params: { id },
  })
}
