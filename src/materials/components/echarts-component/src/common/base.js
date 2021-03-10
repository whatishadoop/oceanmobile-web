import echarts from 'echarts'
// 初始化实例
function createInstance(dom) {
    var echartsInstance = echarts.init(dom)
    return echartsInstance
}
// 销毁实例
function destoryInstance(instance) {
    instance.dispose()
}

const optionBase = {}

export default {
    createInstance,
    destoryInstance,
    optionBase
}
