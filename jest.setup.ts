import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
// Fix for server action test fails
import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextDecoder, TextEncoder });
