import { HamsterObject } from "../../TS-models/models";

export const searchFunction = (
    hamstersArray: HamsterObject[], searchString: string): HamsterObject[] => {
    return hamstersArray.filter((hamster) => {
    if (searchString === "") {
        return true;
    } else {
        const name = hamster.name.toLowerCase();
        const search = searchString.toLowerCase();
        return name.includes(search);
        }
    });
};