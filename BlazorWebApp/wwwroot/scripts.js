import "../Other/Example.js";

/*export function getPromptInstance(): Prompt {
    return new Prompt();
}*/

export function showPrompt(message) {
    console.log("show prompt");
    return prompt(message, 'Type anything here');
}