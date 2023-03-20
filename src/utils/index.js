import surpriseMePrompts from '../constants';

export function getRandomPrompt(prompt){
    randomIndex = Math.floor(Math.random() * surpriseMePrompts.lenght);
    randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);
    return randomPrompt;
}