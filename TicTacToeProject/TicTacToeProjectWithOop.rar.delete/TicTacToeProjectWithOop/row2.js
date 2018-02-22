var Row2 = (function () {
    function Row2() {
        this.countprotect = 0;
        this.countAttack = 0;
        this.arrLine = new Array(3);
        for (var i = 0; i < this.arrLine.length; i++) {
            this.arrLine[i] = new Box();
            this.arrLine[i].isEmptyCell = true;
        }
    }
    Object.defineProperty(Row2.prototype, "protectCounter", {
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
    Object.defineProperty(Row2.prototype, "attackCounter", {
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
    Row2.prototype.protect = function () {
        if (this.countprotect == 2) {
            if ((this.arrLine[0].isCellSign == "X") && (this.arrLine[1].isCellSign == "X")) {
                if (this.arrLine[2].isEmptyCell)
                    return 6;
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
                    return 4;
                else
                    return 0;
            }
        }
        else
            return 0;
    };
    Row2.prototype.attack = function () {
        if (this.countAttack == 2) {
            if ((this.arrLine[0].isCellSign == "O") && (this.arrLine[1].isCellSign == "O")) {
                if (this.arrLine[2].isEmptyCell)
                    return 6;
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
                    return 4;
                else
                    return 0;
            }
        }
        else
            return 0;
    };
    return Row2;
}());
//# sourceMappingURL=row2.js.map