function handleDataSet(datas) {
    var dataset = {}
    var source = []
    for (const item of datas) {
        const sourceItem = []
        for (const value of Object.values(item)) {
            sourceItem.push(value)
        }
        source.push(sourceItem)
    }
    dataset.source = source
    return dataset
}

export default {
    handleDataSet
}
