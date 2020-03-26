const BOX_SIZE = 40;
var BOX_VEL = 2;

class Element {
    constructor(x, y, number) {
        this.x = x;
        this.y = y;
        this.number = number;
    }

    dispatch() {
        square(this.x, this.y, BOX_SIZE);
        textSize(32);
        text(this.number, this.x + 2, this.y + 6, 10);
    }

    move(velX, velY) {
        this.x += velX;
        this.y += velY;
    }
}

function pull2Box(element1, element2) {
    let done = true;
    if (element1.y < 40) {
        element1.move(0, BOX_VEL);
        done &= false;
    } else {
        done &= true;
    }
    if (element2.y < 80) {
        element2.move(0, BOX_VEL);
        done &= false;
    } else {
        done &= true;
    }

    return done;
}

function put2Box(element1, element2) {
    let done = true;
    if (element1.y > 0) {
        element1.move(0, -BOX_VEL);
        done &= false;
    } else {
        done &= true;
    }
    if (element2.y > 0) {
        element2.move(0, -BOX_VEL);
        done &= false;
    } else {
        done &= true;
    }

    return done;
}

var x1, x2;

function swapX(element1, element2) {
    let done = true;
    if (element1.x != x2) {
        element1.move(BOX_VEL, 0);
        done &= false;
    } else {
        done &= true;
    }
    if (element2.x != x1) {
        element2.move(-BOX_VEL, 0);
        done &= false;
    } else {
        done &= true;
    }

    return done;
}

var swapState = -1;

function swap(element1, element2) {
    switch (swapState) {
        case 0:
            if (pull2Box(element1, element2)) {
                x1 = element1.x;
                x2 = element2.x;
                swapState = 2;
            }
            break;
        case 1:
            if (put2Box(element1, element2)) {
                return true;
            }
            break;
        case 2:
            if (swapX(element1, element2)) {
                swapState = 1;
            }
            break;
    }
    return false;
}

var array = [];
var i;
var boxIdxToBeSwapped = -1;

function reset() {
    array = [];
    for (let i = 0; i < 10; ++i) {
        const randNumber = Math.floor(Math.random() * 89) + 10;
        array.push(new Element(i * BOX_SIZE, 0, randNumber.toString()));
    }
    i = array.length - 1;
    boxIdxToBeSwapped = -1;
}

function setup() {
    const canvas = createCanvas(500, 120);
    canvas.parent("fisher-yates-visualizer");

    for (let i = 0; i < 10; ++i) {
        const randNumber = Math.floor(Math.random() * 89) + 10;
        array.push(new Element(i * BOX_SIZE, 0, randNumber.toString()));
    }
    i = array.length - 1;

    const resetButton = createImg("/assets/misc/fisher-yates/reset.png");
    resetButton.size(120, 90);
    resetButton.position(400, 0);
    resetButton.mousePressed(reset);
    resetButton.parent("fisher-yates-visualizer");
}

function shuffleArray(array) {
    if (i <= 0) return;
    if (boxIdxToBeSwapped === -1) {
        swapState = 0;
        boxIdxToBeSwapped = Math.floor(Math.random() * (i - 1));
        if (array[boxIdxToBeSwapped].x > array[i].x) {
            [array[boxIdxToBeSwapped], array[i]] = [array[i], array[boxIdxToBeSwapped]];
        }
    }
    if (swap(array[boxIdxToBeSwapped], array[i])) {
        [array[boxIdxToBeSwapped], array[i]] = [array[i], array[boxIdxToBeSwapped]];
        --i;
        boxIdxToBeSwapped = -1;
    }
}

function draw() {
    background(220);
    array.forEach(element => element.dispatch());
    shuffleArray(array);

    textSize(20);
    text("Reset", 430, 90);
}