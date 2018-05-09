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

export const D$ = new DDocument()