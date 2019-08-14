import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/student/list',
    method: 'get',
    params
  })
}

export function del(data) {
    return request({
      url: '/student/del',
      method: 'post',
      data
    })
  }