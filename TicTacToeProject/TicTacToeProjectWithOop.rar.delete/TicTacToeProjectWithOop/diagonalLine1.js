var DiagonalLine1 = (function () {
    function DiagonalLine1() {
        this.countprotect = 0;
        this.countAttack = 0;
        this.arrLine = new Array(3);
        for (var i = 0; i < this.arrLine.length; i++) {
            this.arrLine[i] = new Box();
            this.arrLine[i].isEmptyCell = true;
        }
    }
    Object.defineProperty(DiagonalLine1.prototype, "protectCounter", {
        ////////////get and set
        get: function () {
            return this.countprotect;
        },
        set: function (countprotect) {
            this.countprotect++;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiagonalLine1.prototype, "attackCounter", {
        get: function () {
            return this.countAttack;
        },
        set: function (countAttack) {
            this.countAttack++;
        },
        enumerable: true,
        configurable: true
    });
    ////////realization of Interface functions
    DiagonalLine1.prototype.protect = function () {
        if (this.countprotect == 2) {
            if ((this.arrLine[0].isCellSign == "X") && (this.arrLine[1].isCellSign == "X")) {
                if (this.arrLine[2].isEmptyCell)
                    return 9;
                else
                    return 0;
            }
            else if ((this.arrLine[0].isCellSign == "X") && (this.arrLine[2].isCellSign == "X")) {
                if (this.arrLine[1].isEmptyCell)
                    return 5;
                else
                    return 0;
            }
            else if ((this.arrLine[1].isCellSign == "X") && (this.arrLine[2].isCellSign == "X")) {
                if (this.arrLine[0].isEmptyCell)
                    return 1;
                else
                    return 0;
            }
        }
        else
            return 0;
    };
    DiagonalLine1.prototype.attack = function () {
        if (this.countAttack == 2) {
            if ((this.arrLine[0].isCellSign == "O") && (this.arrLine[1].isCellSign == "O")) {
                if (this.arrLine[2].isEmptyCell)
                    return 9;
                else
                    return 0;
            }
            else if ((this.arrLine[0].isCellSign == "O") && (this.arrLine[2].isCellSign == "O")) {
                if (this.arrLine[1].isEmptyCell)
                    return 5;
                else
                    return 0;
            }
            else if ((this.arrLine[1].isCellSign == "O") && (this.arrLine[2].isCellSign == "O")) {
                if (this.arrLine[0].isEmptyCell)
                    return 1;
                else
                    return 0;
            }
        }
        else
            return 0;
    };
    return DiagonalLine1;
}());
//# sourceMappingURL=diagonalLine1.js.map