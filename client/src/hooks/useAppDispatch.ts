import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
