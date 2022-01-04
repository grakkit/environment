import { classes } from './classes';
export declare function type<X extends keyof classes>(name: X): classes[X];
