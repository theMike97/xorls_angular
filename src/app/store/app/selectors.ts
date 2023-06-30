import { createFeatureSelector } from "@ngrx/store";
import { AppState } from "./state";

const getAppState = createFeatureSelector<AppState>('app');
