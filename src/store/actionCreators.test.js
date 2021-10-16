const actionCreators = require("./actionCreators")
// @ponicode
describe("actionCreators.getInputChangeAction", () => {
    test("0", () => {
        let callFunction = () => {
            actionCreators.getInputChangeAction("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            actionCreators.getInputChangeAction("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            actionCreators.getInputChangeAction("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            actionCreators.getInputChangeAction(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actionCreators.getAddItemAction", () => {
    test("0", () => {
        let callFunction = () => {
            actionCreators.getAddItemAction()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actionCreators.getDeleteItemAction", () => {
    test("0", () => {
        let callFunction = () => {
            actionCreators.getDeleteItemAction(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            actionCreators.getDeleteItemAction(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            actionCreators.getDeleteItemAction(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            actionCreators.getDeleteItemAction(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            actionCreators.getDeleteItemAction(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            actionCreators.getDeleteItemAction(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actionCreators.getInitTodoList", () => {
    test("0", () => {
        let callFunction = () => {
            actionCreators.getInitTodoList("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            actionCreators.getInitTodoList(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actionCreators.getTodoList", () => {
    test("0", () => {
        let callFunction = () => {
            actionCreators.getTodoList()
        }
    
        expect(callFunction).not.toThrow()
    })
})
