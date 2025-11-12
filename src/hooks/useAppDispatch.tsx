import { useDispatch } from "react-redux";
import type { AppDispatch } from "../interfaces/interfaces";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
