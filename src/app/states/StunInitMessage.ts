// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 0.5.24
// 

import { Schema, type, ArraySchema, MapSchema, DataChange } from "@colyseus/schema";
import { GameMessage } from "./GameMessage"

export class StunInitMessage extends GameMessage {
    @type("string") public stunnerId: string;

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
