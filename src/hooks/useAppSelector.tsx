import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "src/redux/store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useAppSelector;
