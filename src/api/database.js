import request from '@/utils/request'

export function databaseSelectPage(data) {
  return request({
    url: '/jhgx/database/selectPage',
    method: 'post',
    data
  })
}

export function databaseGetInfo(data) {
  return request({
    url: '/jhgx/database/getInfo',
    method: 'post',
    data
  })
}

export function databaseAdd(data) {
  return request({
    url: '/jhgx/database/add',
    method: 'post',
    data
  })
}

export function databaseEdit(data) {
  return request({
    url: '/jhgx/database/edit',
    method: 'post',
    data
  })
}

export function databaseDelete(data) {
  return request({
    url: '/jhgx/database/deleteBatch',
    method: 'post',
    data
  })
}

export function databaseTestConnect(data) {
  return request({
    url: '/jhgx/database/testConnection',
    method: 'post',
    data
  })
}
