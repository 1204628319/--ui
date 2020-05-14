import request from '@/utils/request'

export function serverSelectList(data) {
  return request({
    url: '/jhgx/server/selectList',
    method: 'post',
    data
  })
}

export function serverSelectPage(data) {
  return request({
    url: '/jhgx/server/selectPage',
    method: 'post',
    data
  })
}

export function serverGetInfo(data) {
  return request({
    url: '/jhgx/server/getInfo',
    method: 'post',
    data
  })
}

export function serverAdd(data) {
  return request({
    url: '/jhgx/server/add',
    method: 'post',
    data
  })
}

export function serverEdit(data) {
  return request({
    url: '/jhgx/server/edit',
    method: 'post',
    data
  })
}

export function serverDelete(data) {
  return request({
    url: '/jhgx/server/deleteBatch',
    method: 'post',
    data
  })
}
