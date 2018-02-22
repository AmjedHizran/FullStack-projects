 class Box{

     private boolEmpty: boolean;
     private strXorO: string;

    //isCellSign  get & set
    public set isCellSign(strXorO: string) {
        this.strXorO = strXorO;
    }
    public get isCellSign(): string {
        return this.strXorO;
    }

    //isEmptyCell  get & set
    public set isEmptyCell(boolEmpty: boolean) {
        this.boolEmpty = boolEmpty;
    }
    public get isEmptyCell(): boolean {
        return this.boolEmpty;
    }
}
