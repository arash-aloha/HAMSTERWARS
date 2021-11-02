import { atom } from "recoil";
import { HamsterObject, Match } from "../TS-models/models";

const hamstersState = atom<null | HamsterObject[]>({
    key: 'hamstersArray',
    default: []
});
const matchState = atom<null | Match[]>({
    key: 'matchResults',
    default: []
});

export { hamstersState, matchState }