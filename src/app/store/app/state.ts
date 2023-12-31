import { type ApplicationPreferences } from 'src/app/models/app-preferences';
import { type Dialog } from 'src/app/models/dialog';

export interface AppState {
    appPreferences: ApplicationPreferences;
    dialog: Dialog;
}
