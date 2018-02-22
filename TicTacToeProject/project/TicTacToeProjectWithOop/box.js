var Box = (function () {
    function Box() {
    }
    Object.defineProperty(Box.prototype, "isCellSign", {
        get: function () {
            return this.strXorO;
        },
        //isCellSign  get & set
        set: function (strXorO) {
            this.strXorO = strXorO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "isEmptyCell", {
        get: function () {
            return this.boolEmpty;
        },
        //isEmptyCell  get & set
        set: function (boolEmpty) {
            this.boolEmpty = boolEmpty;
        },
        enumerable: true,
        configurable: true
    });
    return Box;
}());
//# sourceMappingURL=box.js.map