import request from '@/utils/request'

export function getDict(data) {
  return request({
    url: '/jhgx/dict/getDict',
    method: 'post',
    data
  })
}
