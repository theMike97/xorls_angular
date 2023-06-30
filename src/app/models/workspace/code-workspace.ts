import { Workspace } from "./workspace";

export class CodeWorkspace implements Workspace {
    public name: string;
    
    public constructor(name?: string) {
        if (name) this.name = name;
        else this.name = 'Untitled';
    }
}