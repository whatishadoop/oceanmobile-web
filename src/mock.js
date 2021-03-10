import Mock from 'mockjs'

// 自定义mock数据接口及json路径
Mock.mock('/data/personelInfo', 'get', require('./materials/components/my-component/src/interface/mock/personelInfo'))
Mock.mock('/data/productList', 'get', require('./materials/components/my-component/src/interface/mock/productList'))

Mock.mock('/echarts/chartsData1', 'get', require('./materials/components/echarts-component/src/interface/mock/charts1'))
Mock.mock('/echarts/chartsDataLine1', 'get', require('./materials/components/echarts-component/src/interface/mock/line1'))
Mock.mock('/echarts/chartsDataBar1', 'get', require('./materials/components/echarts-component/src/interface/mock/bar1'))
Mock.mock('/echarts/chartsDataBar2', 'get', require('./materials/components/echarts-component/src/interface/mock/bar2'))
Mock.mock('/echarts/chartsDataBar3', 'get', require('./materials/components/echarts-component/src/interface/mock/bar3'))
Mock.mock('/echarts/chartsDataBar4', 'get', require('./materials/components/echarts-component/src/interface/mock/bar4'))
Mock.mock('/echarts/chartsDataPie1', 'get', require('./materials/components/echarts-component/src/interface/mock/pie1'))
Mock.mock('/echarts/chartsDataPie2', 'get', require('./materials/components/echarts-component/src/interface/mock/pie2'))
Mock.mock('/echarts/chartsDataArea1', 'get', require('./materials/components/echarts-component/src/interface/mock/area1'))
Mock.mock('/map/point', 'get', require('./materials/components/map-ol/src/interface/mock/point'))
