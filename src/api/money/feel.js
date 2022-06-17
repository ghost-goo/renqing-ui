import request from '@/utils/request'

// 查询人情单列表
export function listFeel(query) {
  return request({
    url: '/feel/list',
    method: 'get',
    params: query
  })
}

// 查询人情单详细
export function getFeel(id) {
  return request({
    url: '/feel/' + id,
    method: 'get'
  })
}

// 新增人情单
export function addFeel(data) {
  return request({
    url: '/feel',
    method: 'post',
    data: data
  })
}

// 修改人情单
export function updateFeel(data) {
  return request({
    url: '/feel',
    method: 'put',
    data: data
  })
}

// 删除人情单
export function delFeel(id) {
  return request({
    url: '/feel/' + id,
    method: 'delete'
  })
}
