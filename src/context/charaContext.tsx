import { ICharacter } from "../interfaces";
import React from "react";

export const charaContext = React.createContext<ICharacter>({
    id: "dummy01",
    name: " ",
    flavor: " ",
    inventory: []
});