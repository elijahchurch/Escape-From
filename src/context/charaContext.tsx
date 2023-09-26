import { ICharacter } from "../interfaces";
import React from "react";

interface IcharaContextValue {
    gameCharacter: ICharacter;
    setgameCharacter: React.Dispatch<React.SetStateAction<ICharacter>>;
}

export const charaContext = React.createContext<IcharaContextValue | undefined>(undefined);