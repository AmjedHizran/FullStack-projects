/////////////////////////////////////////////MAIN SECTION//////////////////////////////////////////////
let row1: Row1 = new Row1();
let row2: Row2 = new Row2();
let row3: Row3 = new Row3();
let column1: Column1 = new Column1();
let column2: Column2 = new Column2();
let column3: Column3 = new Column3();
let diagonalLine1: DiagonalLine1 = new DiagonalLine1();
let diagonalLine2: DiagonalLine2 = new DiagonalLine2();
let initMat: number = 1;
let playerInput: string;
let validationCount: number = 0;
let NumBlockLocation: string;
let NumAttackLocation: string;
let countVictory: string;
let matrix: Array<Array<string>>;
matrix = new Array<Array<string>>(3);

////////////אתחול כל תא במערך יכולת הצבעה למערך אחר 
for (let i: number = 0; i < matrix.length; i++) {
    matrix[i] = new Array<string>(3)
}

////////////אתחול המטריצה ב 1 עד 9
for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix.length; j++) {
        matrix[i][j] = (initMat.toString());
        initMat++
    }
}

////////////////////startgame
let interval = setInterval(function () {
    document.body.innerHTML = "";
    playGame();
}, 1000);

///////////////////////////////////////////FUNCTION SECTION/////////////////////////////

function playGame() {

    validationCount++;

    do {

        playerInput = prompt("Please enter your move: ");

    } while (!checkInput(playerInput))

    //////////////////למטריצה לפי המספר שהתקבך ע"י המשתמש X הכנסת
    insertPlayerInput(playerInput);

    ///////////////////"X" מבצע בדיקה אם המשתמש הצליח למלות מטריצה אחת בשלוש 
    countVictory = ifUserWon();
    if (countVictory == "3") {
        alert("you won the game")

        clearInterval(interval);
    }
    //////////////////startGame בודק אם המשחק נגמר לפי מספר הפעמים שהתבצע 
    if (validationCount == 5) {
        alert("The  game ended in a draw !");
        setTimeout(function () {
            clearInterval(interval);
        }, 5000);
    }

    document.body.innerHTML = "";

    /////////////מחזיר מספר התא שצריך לחסום במידה והיה
    NumBlockLocation = checkIfprotect();
    /////////////מחזיר מספר התא שצריך לתקוף כדי לנצח במידה והיה
    NumAttackLocation = checkIfAttack();
    ////////////////////בודק אם להגריל מספר או לחסום או לתקוף לפי הערך המוחזר
    if ((NumBlockLocation == "0") && (NumAttackLocation == "0")) {
        NumAttackLocation = insertRandomInput();
        insertCompInput(NumAttackLocation);
    }
    else
        if ((NumBlockLocation != "0") && (NumAttackLocation == "0")) {
            insertCompInput(NumBlockLocation);
        }
        else
            if ((NumBlockLocation != "0") && (NumAttackLocation != "0")) {
                insertCompInput(NumAttackLocation);
            }
            else
                if ((NumBlockLocation == "0") && (NumAttackLocation != "0")) {
                    insertCompInput(NumAttackLocation);
                }

    ///////////////////"O" מבצע בדיקה אם המחשב הצליח למלות מטריצה אחת בשלוש 
    countVictory = ifCompWon();
    if (countVictory == "3") {
        alert("## The computer won ##");
        clearInterval(interval);
    }


    setTimeout(function () {
        printBoard();
    }, 0);
}

/////////////פונקציה לבדיקת תקינות הקלט מהמשתמש
function checkInput(input: string): boolean {
    if (!IfBoxEmpty(input)) {
        alert("The cell selected is busy. \n Please Try again :");
        return false
    }
    else if (Number(input) * 0 == 0) {
        if ((Number(input) > 0) && (Number(input) < 10)) {
            return true;
        }
        else
            alert("Insert a number between 1 - 9 only.\n Please Try again :");
        return false
    }
    alert("Can not use characters , Insert only numbers between 1 - 9 \n Please Try again :");
    return false;
}

/////////////פונקציה שבודקת אם התא ריק
function IfBoxEmpty(input: string): boolean {
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix.length; j++) {
            if (matrix[i][j] == input)
                return true;
        }
    }
    return false;
}

/////////////לתא במטריצה לפי הקלט שהתקבל מהמשתמש "X" פונקציה המכניסה
function insertPlayerInput(input: string) {

    switch (Number(input)) {
        case 1:
            row1.arrLine[0].isCellSign = "X";
            column1.arrLine[0].isCellSign = "X";
            diagonalLine1.arrLine[0].isCellSign = "X";
            row1.arrLine[0].isEmptyCell = false;
            column1.arrLine[0].isEmptyCell = false;
            diagonalLine1.arrLine[0].isEmptyCell = false;
            row1.protectCounter++;
            column1.protectCounter++;
            diagonalLine1.protectCounter++;
            matrix[0][0] = "X"
            break;
        case 2:
            row1.arrLine[1].isCellSign = "X";
            column2.arrLine[0].isCellSign = "X";
            row1.arrLine[1].isEmptyCell = false;
            column2.arrLine[0].isEmptyCell = false;
            row1.protectCounter++;
            column2.protectCounter++;
            matrix[0][1] = "X"
            break;
        case 3:
            row1.arrLine[2].isCellSign = "X";
            column3.arrLine[0].isCellSign = "X";
            diagonalLine2.arrLine[0].isCellSign = "X";
            row1.arrLine[2].isEmptyCell = false;
            column3.arrLine[0].isEmptyCell = false;
            diagonalLine2.arrLine[0].isEmptyCell = false;
            row1.protectCounter++;
            column3.protectCounter++;
            diagonalLine2.protectCounter++;
            matrix[0][2] = "X"
            break;
        case 4:
            row2.arrLine[0].isCellSign = "X";
            column1.arrLine[1].isCellSign = "X";
            row2.arrLine[0].isEmptyCell = false;
            column1.arrLine[1].isEmptyCell = false;
            row2.protectCounter++;
            column1.protectCounter++;
            matrix[1][0] = "X"
            break;
        case 5:
            row2.arrLine[1].isCellSign = "X";
            column2.arrLine[1].isCellSign = "X";
            diagonalLine1.arrLine[1].isCellSign = "X";
            diagonalLine2.arrLine[1].isCellSign = "X";
            row2.arrLine[1].isEmptyCell = false;
            column2.arrLine[1].isEmptyCell = false;
            diagonalLine1.arrLine[1].isEmptyCell = false;
            diagonalLine2.arrLine[1].isEmptyCell = false;
            row2.protectCounter++;
            column2.protectCounter++;
            diagonalLine1.protectCounter++;
            diagonalLine2.protectCounter++;
            matrix[1][1] = "X"
            break;
        case 6:
            row2.arrLine[2].isCellSign = "X";
            column3.arrLine[1].isCellSign = "X";
            row2.arrLine[2].isEmptyCell = false;
            column3.arrLine[1].isEmptyCell = false;
            row2.protectCounter++;
            column3.protectCounter++;
            matrix[1][2] = "X"
            break;
        case 7:
            row3.arrLine[0].isCellSign = "X";
            column1.arrLine[2].isCellSign = "X";
            diagonalLine2.arrLine[2].isCellSign = "X";
            row3.arrLine[0].isEmptyCell = false;
            column1.arrLine[2].isEmptyCell = false;
            diagonalLine2.arrLine[2].isEmptyCell = false;
            row3.protectCounter++;
            column1.protectCounter++;
            diagonalLine2.protectCounter++;
            matrix[2][0] = "X"
            break;
        case 8:
            row3.arrLine[1].isCellSign = "X";
            column2.arrLine[2].isCellSign = "X";
            row3.arrLine[1].isEmptyCell = false;
            column2.arrLine[2].isEmptyCell = false;
            row3.protectCounter++;
            column2.protectCounter++;
            matrix[2][1] = "X"
            break;
        case 9:
            row3.arrLine[2].isCellSign = "X";
            column3.arrLine[2].isCellSign = "X";
            diagonalLine1.arrLine[2].isCellSign = "X";
            row3.arrLine[2].isEmptyCell = false;
            column3.arrLine[2].isEmptyCell = false;
            diagonalLine1.arrLine[2].isEmptyCell = false;
            row3.protectCounter++;
            column3.protectCounter++;
            diagonalLine1.protectCounter++;
            matrix[2][2] = "X"
            break;
    }
}

/////////////פונקציה שמגרילה מספר בין 1 - 9 ומחזירה אותו
function insertRandomInput(): string {
    let random: number;
    do {
        random = Math.floor((Math.random()) * (10 - 1 + 1) + 1);

    } while (!IfBoxEmpty(random.toString()))

    return (random.toString())
}

/////////////לתא במטריצה לפי הוואלידאציות של המחשב "O" פונקציה המכניסה
function insertCompInput(input: string) {

    switch (Number(input)) {
        case 1:
            row1.arrLine[0].isCellSign = "O";
            column1.arrLine[0].isCellSign = "O";
            diagonalLine1.arrLine[0].isCellSign = "O";
            row1.arrLine[0].isEmptyCell = false;
            column1.arrLine[0].isEmptyCell = false;
            diagonalLine1.arrLine[0].isEmptyCell = false;
            row1.attackCounter++;
            column1.attackCounter++;
            diagonalLine1.attackCounter++;
            matrix[0][0] = "O"
            break;
        case 2:
            row1.arrLine[1].isCellSign = "O";
            column2.arrLine[0].isCellSign = "O";
            row1.arrLine[1].isEmptyCell = false;
            column2.arrLine[0].isEmptyCell = false;
            row1.attackCounter++;
            column2.attackCounter++;
            matrix[0][1] = "O"
            break;
        case 3:
            row1.arrLine[2].isCellSign = "O";
            column3.arrLine[0].isCellSign = "O";
            diagonalLine2.arrLine[0].isCellSign = "O";
            row1.arrLine[2].isEmptyCell = false;
            column3.arrLine[0].isEmptyCell = false;
            diagonalLine2.arrLine[0].isEmptyCell = false;
            row1.attackCounter++;
            column3.attackCounter++;
            diagonalLine2.attackCounter++;
            matrix[0][2] = "O"
            break;
        case 4:
            row2.arrLine[0].isCellSign = "O";
            column1.arrLine[1].isCellSign = "O";
            row2.arrLine[0].isEmptyCell = false;
            column1.arrLine[1].isEmptyCell = false;
            row2.attackCounter++;
            column1.attackCounter++;
            matrix[1][0] = "O"
            break;
        case 5:
            row2.arrLine[1].isCellSign = "O";
            column2.arrLine[1].isCellSign = "O";
            diagonalLine1.arrLine[1].isCellSign = "O";
            diagonalLine2.arrLine[1].isCellSign = "O";
            row2.arrLine[1].isEmptyCell = false;
            column2.arrLine[1].isEmptyCell = false;
            diagonalLine1.arrLine[1].isEmptyCell = false;
            diagonalLine2.arrLine[1].isEmptyCell = false;
            row2.attackCounter++;
            column2.attackCounter++;
            diagonalLine1.attackCounter++;
            diagonalLine2.attackCounter++;
            matrix[1][1] = "O"
            break;
        case 6:
            row2.arrLine[2].isCellSign = "O";
            column3.arrLine[1].isCellSign = "O";
            row2.arrLine[2].isEmptyCell = false;
            column3.arrLine[1].isEmptyCell = false;
            row2.attackCounter++;
            column3.attackCounter++;
            matrix[1][2] = "O"
            break;
        case 7:
            row3.arrLine[0].isCellSign = "O";
            column1.arrLine[2].isCellSign = "O";
            diagonalLine2.arrLine[2].isCellSign = "O";
            row3.arrLine[0].isEmptyCell = false;
            column1.arrLine[2].isEmptyCell = false;
            diagonalLine2.arrLine[2].isEmptyCell = false;
            row3.attackCounter++;
            column1.attackCounter++;
            diagonalLine2.attackCounter++;
            matrix[2][0] = "O"
            break;
        case 8:
            row3.arrLine[1].isCellSign = "X";
            column2.arrLine[2].isCellSign = "X";
            row3.arrLine[1].isEmptyCell = false;
            column2.arrLine[2].isEmptyCell = false;
            row3.attackCounter++;
            column2.attackCounter++;
            matrix[2][1] = "O"
            break;
        case 9:
            row3.arrLine[2].isCellSign = "O";
            column3.arrLine[2].isCellSign = "O";
            diagonalLine1.arrLine[2].isCellSign = "O";
            row3.arrLine[2].isEmptyCell = false;
            column3.arrLine[2].isEmptyCell = false;
            diagonalLine1.arrLine[2].isEmptyCell = false;
            row3.attackCounter++;
            column3.attackCounter++;
            diagonalLine1.attackCounter++;
            matrix[2][2] = "O"
            break;
    }
    // alert("insertCompInput" + input);
}

/////////////פונקציה שבודקת אם להגן ומחזירה מספר תא שצריך להגן במידה ויש
function checkIfprotect(): string {
    let defNumReturn: number = 0

    defNumReturn = row1.protect();
    if (defNumReturn != 0)
        return (defNumReturn.toString());

    defNumReturn = row2.protect();
    if (defNumReturn != 0)
        return (defNumReturn.toString());

    defNumReturn = row3.protect();
    if (defNumReturn != 0)
        return (defNumReturn.toString());

    defNumReturn = column1.protect();
    if (defNumReturn != 0)
        return (defNumReturn.toString());

    defNumReturn = column2.protect();
    if (defNumReturn != 0)
        return (defNumReturn.toString());

    defNumReturn = column3.protect();
    if (defNumReturn != 0)
        return (defNumReturn.toString());

    defNumReturn = diagonalLine1.protect();
    if (defNumReturn != 0)
        return (defNumReturn.toString());

    defNumReturn = diagonalLine2.protect();
    if (defNumReturn != 0)
        return (defNumReturn.toString());

    else
        return (defNumReturn.toString());
}

/////////////פונקציה שבודקת אם יש אפשרות לנצחון ומחזירה מספר תא במידה ויש  
function checkIfAttack(): string {
    let attNumReturn: number = 0

    attNumReturn = row1.attack();
    if (attNumReturn != 0)
        return (attNumReturn.toString());

    attNumReturn = row2.attack();
    if (attNumReturn != 0)
        return (attNumReturn.toString());

    attNumReturn = row3.attack();
    if (attNumReturn != 0)
        return (attNumReturn.toString());

    attNumReturn = column1.attack();
    if (attNumReturn != 0)
        return (attNumReturn.toString());

    attNumReturn = column2.attack();
    if (attNumReturn != 0)
        return (attNumReturn.toString());

    attNumReturn = column3.attack();
    if (attNumReturn != 0)
        return (attNumReturn.toString());

    attNumReturn = diagonalLine1.attack();
    if (attNumReturn != 0)
        return (attNumReturn.toString());

    attNumReturn = diagonalLine2.attack();
    if (attNumReturn != 0)
        return (attNumReturn.toString());

    else
        return (attNumReturn.toString())
}

///////////// "X" פונקציה שבודקת אם מערך אחד בפונקצייה התמלא ב 
function ifUserWon(): string {
    let boxFull: number = 0

    boxFull = row1.protectCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    boxFull = row2.protectCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    boxFull = row3.protectCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    boxFull = column1.protectCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    boxFull = column2.protectCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    boxFull = column3.protectCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    boxFull = diagonalLine1.protectCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    boxFull = diagonalLine2.protectCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    else
        return (boxFull.toString());
}

///////////// "O" פונקציה שבודקת אם מערך אחד בפונקצייה התמלא ב
function ifCompWon(): string {
    let boxFull: number = 0

    boxFull = row1.attackCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    boxFull = row2.attackCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    boxFull = row3.attackCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    boxFull = column1.attackCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    boxFull = column2.attackCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    boxFull = column3.attackCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    boxFull = diagonalLine1.attackCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    boxFull = diagonalLine2.attackCounter;
    if (boxFull == 3)
        return (boxFull.toString());

    else
        return (boxFull.toString());
}

/////////////פונקציה שמדפיסה את הלוח אחרי כל קלט
function printBoard() {
    for (let i: number = 0; i <= matrix.length; i++) {
        document.write("<br/>" + "&nbsp" + "&nbsp" + "&nbsp" + "--------------------<br/>")
        for (let j: number = 0; j < matrix.length; j++) {
            document.write("&nbsp" + "&nbsp" + " | " + "&nbsp" + "&nbsp" + matrix[i][j]);
        }
        document.write("&nbsp" + "&nbsp" + " | ")
    }
}











