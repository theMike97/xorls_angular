import { CodeModel } from '@ngstack/code-editor';
import { Workspace, WorkspaceType } from './workspace';

export class CodeWorkspace extends Workspace {
    public uri: string;
    public code: string;

    public constructor(name?: string) {
        super(name);
        this.uri = `${name}.vhdl`;
        this.code = '';
    }

    public is(type: WorkspaceType): boolean {
        return type === WorkspaceType.CODE;
    }
}
