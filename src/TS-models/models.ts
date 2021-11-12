export interface HamsterObject {
    [x: string]: any;
    name: string;
    age: number;
    favFood: string;
    loves: string;
    imgName: string;
    wins: number;
    defeats: number;
    games: number;
    id: number;
};
export interface Match {
    wins: number;
    defeats: number;
    games: number;
};
export interface SearchProps {
    search: string;
    setSearch: (parameter:string)=>void;
}