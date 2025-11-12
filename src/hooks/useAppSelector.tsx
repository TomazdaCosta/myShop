import { useSelector } from "react-redux";
import type { RootStateFunc } from "../interfaces/interfaces";

export const useAppSelector = useSelector.withTypes<RootStateFunc>()
