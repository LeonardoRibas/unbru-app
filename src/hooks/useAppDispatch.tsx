import { useDispatch } from "react-redux";
import type { AppDispatch } from "src/redux/store";

const useAppDispatch: () => AppDispatch = useDispatch;
export default useAppDispatch;
