import FileSaver from 'file-saver'
import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt){
    var randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    var randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);
    return randomPrompt;
}

export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}