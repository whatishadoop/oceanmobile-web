import Mock from 'mockjs'
import dataSetApi from './opensrcinfo/datasetMock.js'

// 设置200-2000毫秒随机的延迟请求数据  ，模拟从后台获取数据延迟
Mock.setup({
  timeout: '1000-2000'
})

// 拦截的是 数据市场业务相关数据  内容表示正则表达式写法
// 1.获取所有监控方案接口 http://218.94.82.249:8089/osintelligence/dataset/getAllDataMonitorCase/
Mock.mock(/\/osintelligence\/dataset\/getAllDataMonitorCase\//, 'post', dataSetApi.getData01())
// 2.删除监控方案接口 http://218.94.82.249:8089/osintelligence/dataset/delMonitorCase/
Mock.mock(/\/osintelligence\/dataset\/delMonitorCase\//, 'post', dataSetApi.getData02())
// 3.保存监控方案接口 http://218.94.82.249:8089/osintelligence/dataset/saveMonitorCase/
Mock.mock(/\/osintelligence\/dataset\/saveMonitorCase\//, 'post', dataSetApi.getData03())
// 4.根据条件查询舆情列表接口 http://218.94.82.249:8089/osintelligence/dataset/getDataDetailByCondition/
Mock.mock(/\/osintelligence\/dataset\/getDataDetailByCondition\//, 'post', dataSetApi.getData04())
// 5.获取公司全名接口 http://218.94.82.249:8089/osintelligence/dataset/getCompanyFullName
Mock.mock(/\/osintelligence\/dataset\/getCompanyFullName/, 'post', dataSetApi.getData05())
// 6.根据公司名称获取公司信息人员与机构接口 http://218.94.82.249:8089/osintelligence/dataset/getCompanySimpleInfoWithName
Mock.mock(/\/osintelligence\/dataset\/getCompanySimpleInfoWithName/, 'post', dataSetApi.getData06())
// 7.根据公司id获取公司详细属性接口，用于图谱节点 http://218.94.82.249:8089/osintelligence/dataset/getCompanyInfoById
Mock.mock(/\/osintelligence\/dataset\/getCompanyInfoById/, 'post', dataSetApi.getData07())

// 根据图谱节点获取公司详情接口

// 获取报告接口
