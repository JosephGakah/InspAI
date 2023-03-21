import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt){
    var randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    var randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);
    return randomPrompt;
}