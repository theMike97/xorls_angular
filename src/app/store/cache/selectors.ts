import { createFeatureSelector } from '@ngrx/store';
import { type CacheState } from './state';

const getCacheState = createFeatureSelector<CacheState>('app');
