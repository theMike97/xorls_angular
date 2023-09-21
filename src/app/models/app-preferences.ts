import { GridStyle } from "./grid-style";

export interface ApplicationPreferences {
    generalSettings: {

    };
    diagramWorkspaceSettings: {
        gridStyle: GridStyle;
    };
    codeWorkspaceSettings: {
        indentSpaces: number;
    };
}