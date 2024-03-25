import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "@modules/common/redux/store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useAppSelector;
