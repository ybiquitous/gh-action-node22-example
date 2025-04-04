import process from "node:process";

import { add } from "./add.js";

console.log("Hello, World!");

console.log("Node version:", process.versions.node);

console.log("1 + 2 = %d", add(1, 2));
