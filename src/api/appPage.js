import request from '@/utils/request'

/**
 * 根据传入参数，查询应用页面
 * @param params
 */
export function get(params) {
  return request({
    url: 'api/singleapppage',
    method: 'get',
    params
  })
}

/**
 * 新增应用页面
 * @param data
 */
export function add(data) {
  return request({
    url: 'api/apppage',
    method: 'post',
    data
  })
}

/**
 *  根据id 删除应用页面
 * @param id
 */
export function del(id) {
  return request({
    url: 'api/apppage/' + id,
    method: 'delete'
  })
}

/**
 *  修改应用页面
 * @param data
 */
export function edit(data) {
  return request({
    url: 'api/apppage',
    method: 'put',
    data
  })
}
