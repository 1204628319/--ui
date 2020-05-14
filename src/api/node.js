import request from '@/utils/request'

export function nodeSelectPage(data) {
  return request({
    url: '/jhgx/node/selectPage',
    method: 'post',
    data
  })
}

export function nodeGetInfo(data) {
  return request({
    url: '/jhgx/node/getInfo',
    method: 'post',
    data
  })
}

export function nodeAdd(data) {
  return request({
    url: '/jhgx/node/add',
    method: 'post',
    data
  })
}

export function nodeEdit(data) {
  return request({
    url: '/jhgx/node/edit',
    method: 'post',
    data
  })
}

export function nodeDelete(data) {
  return request({
    url: '/jhgx/node/deleteBatch',
    method: 'post',
    data
  })
}

export function nodeGetTree(data) {
  return request({
    url: '/jhgx/node/selectTreeExceptSelf',
    method: 'post',
    data
  })
}
