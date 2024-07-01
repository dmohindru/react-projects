import React, {createContext, ReactNode, useCallback, useState} from "react";
import { RandomService, repeatedRandomValueService} from "../service/RandomService";
import {RandomServiceContextProps} from "./RandomServiceContext";

const defaultRandomService = repeatedRandomValueService()
export const RandomRepeatedServiceContext = createContext<RandomServiceContextProps>({
    person: defaultRandomService.getPerson(),
    car: defaultRandomService.getCar(),
    number: defaultRandomService.getNumber(),
    color: defaultRandomService.getColor(),
    updateValues: defaultRandomService.updateValues,
})

export const RandomRepeatedServiceProvider: React.FC<{ children: ReactNode}> = ({ children }) => {
    const [randomService] = useState<RandomService>(repeatedRandomValueService())
    const [person, setPerson] = useState(randomService.getPerson());
    const [car, setCar] = useState(randomService.getCar());
    const [number, setNumber] = useState(randomService.getNumber());
    const [color, setColor] = useState(randomService.getColor());

    const updateValues = useCallback(() => {
        randomService.updateValues();
        setPerson(randomService.getPerson());
        setCar(randomService.getCar());
        setNumber(randomService.getNumber());
        setColor(randomService.getColor());
    }, [randomService]);

    return (
        <RandomRepeatedServiceContext.Provider value={{ person, car, number, color, updateValues }}>
            {children}
        </RandomRepeatedServiceContext.Provider>
    )
}