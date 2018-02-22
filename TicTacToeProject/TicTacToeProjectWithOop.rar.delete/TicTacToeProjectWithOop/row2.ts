class Row2 implements IGame {

    public arrLine: Array<Box>;
    private countprotect: number = 0;
    private countAttack: number = 0;

    public constructor() {
        this.arrLine = new Array<Box>(3);
        for (let i: number = 0; i < this.arrLine.length; i++) {
            this.arrLine[i] = new Box();
            this.arrLine[i].isEmptyCell = true;

        }
    }

    ////////////get and set
    public get protectCounter(): number {
        return this.countprotect;
    }
    public set protectCounter(countprotect: number) {
        this.countprotect++;
    }
    public get attackCounter(): number {
        return this.countAttack;
    }
    public set attackCounter(countAttack: number) {
        this.countAttack++;
    }

 ////////realization of Interface functions
    public protect(): number {

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
    }
    public attack(): number {
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
    }
}