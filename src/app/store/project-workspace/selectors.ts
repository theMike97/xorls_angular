import { createFeatureSelector } from "@ngrx/store";
import { ProjectWorkspaceState } from "./state";

const getProjectWorkspaceState = createFeatureSelector<ProjectWorkspaceState>('app');