
import {API_BASE} from '@/utils/const'

// apis/posts.ts
export function usePhongTroDetail(id: number) {
  return useFetch(`${API_BASE}/v1/phongtro/getPhongTroDetail`, {
    params: { id },
  })
}

export const updatePhongTroStatus = (
  phongTroId: number,
  status: number
) => {
  return $fetch(`${API_BASE}/v1/phongtro/updatePhongTroStatus`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      phongTroId,
      status
    }
  })
}
