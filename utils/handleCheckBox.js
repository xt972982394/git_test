let globalCheckItems = []

export function getCheckItems(uid) {
    let checkItems = globalCheckItems.find(item => item.uid === uid)
    return checkItems
}

export function setCheckItems(uid) {
    globalCheckItems.push({ uid: uid, checkItems: [] })
}

export function changeCheckItems(uid, status, val) {
    let item = globalCheckItems.find(item => item.uid === uid)
    if (status) item.checkItems.push(val)
    else {
        let index = item.checkItems.findIndex(item => item === val)
        item.checkItems.splice(index,1)
    }
}