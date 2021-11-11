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
const toggleState = atom<boolean>({
    key: "toggle",
    default: false
});
const clickedHamsterAtom = atom<HamsterObject | null>({
    key: 'clickedHamster',
    default: null
});
const addBtnAtom = atom<boolean>({
    key: 'addBtnAtom',
    default: false
})


export { hamstersState, matchState, toggleState, clickedHamsterAtom, addBtnAtom }