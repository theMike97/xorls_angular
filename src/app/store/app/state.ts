import { ApplicationPreferences } from "src/app/models/app-preferences";
import { Dialog } from "src/app/models/dialog";

export interface AppState {
    appPreferences: ApplicationPreferences;
    dialog: Dialog;
}