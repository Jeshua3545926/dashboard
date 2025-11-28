import { Action2 } from "./action2";


export class helloWorld extends Action2 {
    constructor() {
        super({
            id: 'helloWorld',
            title: 'Hola Mundo',
            content: '¡Hola Mundo!',
        })
    }
    run(): void {
        console.log('hola mundo');
    }
    fun(): void {
        console.log('fun');
    }
}

// export class media extends Action2 {
//     constructor() {
//         super({
//             id: 'helloWorld',
//             title: 'Hola Mundo',
//             content: '¡Hola Mundo!',
//         })
//     }
//     run(): void {
//         console.log('hola mundo');
//     }
// }