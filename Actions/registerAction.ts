import { Action2 } from "./action2";

export class helloWorld extends Action2 {
    id: string = 'helloWorld';
    title: string = 'Hola Mundo';
    content: string = '¡Hola Mundo!';
    run(): void {
        console.log(this.content);
    }
    fun(): void {
        console.log('fun');
    }
}