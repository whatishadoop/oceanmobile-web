import request from '@/utils/request'

// 1.获取所有监控方案接口
export function getAllMonitorCase(data) {
  return request({
    url: 'osintelligence/dataset/getAllDataMonitorCase/',
    method: 'post',
    data
  })
}

// 2.删除监控方案接口
export function delMonitorCase(data) {
  return request({
    url: 'osintelligence/dataset/delMonitorCase/',
    method: 'post',
    data
  })
}

// 3.保存监控方案接口
export function saveMonitorCase(data) {
  return request({
    url: 'osintelligence/dataset/delMonitorCase/',
    method: 'post',
    data
  })
}

// 4.根据条件查询舆情列表接口
export function getDataDetailByCondition(data) {
  return request({
    url: 'osintelligence/dataset/getDataDetailByCondition/',
    method: 'post',
    data
  })
}

// 5.获取公司全名接口
export function getCompanyFullName(data) {
  return request({
    url: 'osintelligence/dataset/getCompanyFullName',
    method: 'post',
    data
  })
}

// 6.根据公司名称获取公司信息人员与机构接口
export function getCompanySimpleInfoWithName(data) {
  return request({
    url: 'osintelligence/dataset/getCompanySimpleInfoWithName',
    method: 'post',
    data
  })
}

// 7.根据公司id获取公司详细属性接口
export function getCompanyInfoById(data) {
  return request({
    url: 'osintelligence/dataset/getCompanyInfoById',
    method: 'post',
    data
  })
}
