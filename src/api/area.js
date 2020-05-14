import request from '@/utils/request'

export function areaGetTree(data) {
  return request({
    url: '/jhgx/area/selectTreeExceptSelf',
    method: 'post',
    data
  })
}

export function areaGetFullTree(data) {
  return request({
    url: '/jhgx/area/selectFullTree',
    method: 'post',
    data
  })
}

export function areaGetInfo(data) {
  return request({
    url: '/jhgx/area/getInfo',
    method: 'post',
    data
  })
}

export function areaAdd(data) {
  return request({
    url: '/jhgx/area/add',
    method: 'post',
    data
  })
}

export function areaEdit(data) {
  return request({
    url: '/jhgx/area/edit',
    method: 'post',
    data
  })
}

export function areaDelete(data) {
  return request({
    url: '/jhgx/area/delete',
    method: 'post',
    data
  })
}
