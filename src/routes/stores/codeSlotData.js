import {writable} from "svelte/store";

export let codeSlotData = writable([]);

// Setup
let rows = 8;
let cols = 4;

// Save all the board items
function item(id, activeRow, col, row, answer) {
    this.id = id
    this.activeRow = activeRow;
    this.row = row;
    this.col = col;
    this.answer = answer;
}

let guesses = []
let myItem;
let id = 1;
for (let y=1; y<rows+1; y++) {
    for (let x=1; x<cols+1; x++) {
        // Make the first row active
        if (y === 1) {
            myItem = new item(id, true, x, y, 0);
            guesses.push(myItem);
            id+=1;
        } else {
            myItem = new item(id, false, x, y, 0);
            guesses.push(myItem);
            id+=1;
        }
    }
}

// Assign all the datapoints to a writable
codeSlotData.set(guesses)