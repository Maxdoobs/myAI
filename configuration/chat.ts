import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant, I'd love to help you think of what to eat later!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `I'm currently cooking up something, try again later!`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `That's a lot of words, does not compute, I'm going to need a break.`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
