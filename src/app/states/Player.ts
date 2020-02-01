// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 0.5.24
// 

import { Schema, type, ArraySchema, MapSchema, DataChange } from "@colyseus/schema";


export class Player extends Schema {
    @type("string") public name: string;
    @type("string") public status: string;
    @type("float32") public horizontal: number;
    @type("float32") public vertical: number;
    @type("float32") public currentX: number;
    @type("float32") public currentY: number;
    @type("float32") public facingX: number;
    @type("float32") public facingY: number;
    @type("int8") public speed: number;
    @type("string") public color: string;

    constructor () {
        super();

        // initialization logic here.
    }

    onChange (changes: DataChange[]) {
        // onChange logic here.
    }

    onAdd () {
        // onAdd logic here.
    }

    onRemove () {
        // onRemove logic here.
    }

}
