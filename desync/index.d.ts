import { jiFile } from '@grakkit/types';
import { record } from '@grakkit/stdlib';
export declare function provide(handler: (data: any) => Promise<any>): Promise<void>;
export declare function request(path: string | record | jiFile, data: any): Promise<unknown>;
