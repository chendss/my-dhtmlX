class DDocument {
    constructor() {
        this.dict = {}
    }

    querySelector(id) {
        let result = this.dict[id]
        return result
    }

    injectionElement(id, element) {
        this.dict[id] = element
    }
}

const D$ = new DDocument()
module.exports = D$