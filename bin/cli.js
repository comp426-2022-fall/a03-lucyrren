#!/usr/bin/env node
import minimist from 'minimist';
import { roll } from "../lib/roll.js"

//parse arguments
let args = minimist(process.argv.slice(2));

//set default side, dice, roll values
let sides = 6;
let dice = 2;
let rolls = 1;

//sets side variable if passed one
if(args.sides && args.sides > 0){
    sides = args.sides;
}
//sets dice variable if passed one
if(args.dice && args.dice > 0){
    dice = args.dice;
}
//sets rolls variable if passed one
if(args.rolls && args.rolls > 0){
    rolls = args.rolls;
}

//return the JSON results
console.log(JSON.stringify(roll(sides, dice, rolls)));