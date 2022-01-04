declare const __dirname: string;

import { classes } from './classes';
import { file, load } from '@grakkit/stdlib';

const source = file(__dirname, 'JDA-4.3.0_277-withDependencies.jar');

export function type<X extends keyof classes> (name: X): classes[X] {
   return load(source, name);
}
