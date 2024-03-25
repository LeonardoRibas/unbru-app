import { useDispatch } from "react-redux";
import type { AppDispatch } from "@modules/common/redux/store";

const useAppDispatch: () => AppDispatch = useDispatch;
export default useAppDispatch;
