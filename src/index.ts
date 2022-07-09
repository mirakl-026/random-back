import {readFileSync} from 'fs';

function greeting(message:string) {
    console.log('system: started');
    console.log('greeting: ' + message);
}

greeting('from new world');
