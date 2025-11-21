import { register } from '../types/type';
import { ReactNode } from 'react';

export abstract class Action2 implements register {
    id: string;
    title: string;
    content: string;

    constructor(props: register) {
        this.id = props.id;
        this.title = props.title;
        this.content = props.content;
    }
    // Puede devolver JSX para renderizarlo en un contenedor
    abstract run(): void | ReactNode | string;
}

const registry = new Map<string, Action2>();


export function registerAction(ActionClass: new () => Action2) {
    const instance = new ActionClass();
    registry.set(instance.id, instance);
    if (typeof instance.run === 'function') {
        instance.run();
    }

    const proto =
        Object.getPrototypeOf(instance);
    const methodNames = Object.getOwnPropertyNames(proto)
        .filter(name => typeof (instance as any)[name] === 'function' && name !== 'constructor' && name !== 'run');


    for (const name of methodNames) {
        (instance as any)[name](); // ejecuta el método
    }
    return instance;
}

export function getAllActions() {
    return Array.from(registry.values());
}

export function runAction(id: string) {
    const action = registry.get(id);
    if (!action) {
        alert(`⚠️ Acción no encontrada: ${id}`);
        return;
    }

    const result = action.run();

    // Si la acción devolvió algo, intentamos renderizarlo
    // if (result !== undefined && result !== null) {
    //     const container =
    //         document.getElementById('action-root') ||
    //         document.getElementById('caps');

    //     if (!container) {
    //         console.warn('No se encontró contenedor para renderizar la acción (action-root/caps).');
    //         return;
    //     }

    //     if (typeof result === 'string') {
    //         container.innerHTML = result;
    //     } else {
    //         const root = createRoot(container);
    //         root.render(result as React.ReactNode);
    //     }
    // }
}