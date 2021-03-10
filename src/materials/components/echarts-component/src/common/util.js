import base from '@/materials/components/echarts-component/src/common/base.js'

import handle from '@/materials/components/echarts-component/src/common/handle.js'

function getSeriers({ name, type, data }) {
    var seriers = []
    var obj = {}
    switch (type) {
        case 'column':
            handle.handleColumnData()
            break
        default:
            break
    }
    seriers.push(obj)
    return seriers
}

function getOption({ optionExtend }) {
    var optionBase = base.optionBase
    // 浅拷贝
    var option = Object.assign(optionBase, optionExtend)
    return option
}
export default {
    getSeriers,
    getOption
}
