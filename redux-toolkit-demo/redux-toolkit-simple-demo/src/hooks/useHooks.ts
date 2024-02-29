import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../app/store";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();