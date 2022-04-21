let checkItems = []
let checkFailItems = []

export function addCheckItem(item) {
    checkItems.push(item)
}

export function getCheckFailItems() {
    return checkFailItems
}


export function validate(val) {
    checkItems.forEach(item => {
        // if (typeof val[item] !== 'object') {
            if (String(val[item]) == '' && checkFailItems.indexOf(item) == -1) checkFailItems.push(item)
            else{
                let index= checkFailItems.indexOf(item)
                // if(index!==-1) checkFailItems.splice(index,1)
                console.log(index)
            }

        // } 
        // else {
        //     if (val[item] instanceof Array) {
        //         if (val[item].length === 0 && checkFailItems.indexOf(item) == -1) checkFailItems.push(item)
        //     }
        //     if (val[item] instanceof Object) {
        //         if (Object.keys(val[item]) === 0 && checkFailItems.indexOf(item) == -1) checkFailItems.push(item)
        //     }
        // }
    })
    return checkFailItems.length === 0
}