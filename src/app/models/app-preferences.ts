import { type GridStyle } from './grid-style';

export interface ApplicationPreferences {
    /* eslint-disable */
    generalSettings: {

    };
    /* eslint-enable */
    diagramWorkspaceSettings: {
        gridStyle: GridStyle;
    };
    codeWorkspaceSettings: {
        indentSpaces: number;
    };
}
