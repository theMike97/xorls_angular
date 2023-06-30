import { createFeatureSelector } from "@ngrx/store";
import { CacheState } from "./state";

const getCacheState = createFeatureSelector<CacheState>('app');