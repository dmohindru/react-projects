import React, {createContext, ReactNode, useCallback, useEffect, useState} from "react";
import { RandomService, defaultRandomService} from "../service/RandomService";

export interface RandomServiceContextProps {
    person: string;
    car: string;
    number: number;
    color: string;
    updateValues: () => void;
}

// Create a context with initial values
const initialContext: RandomServiceContextProps = {
    person: '',
    car: '',
    number: 0,
    color: '',
    updateValues: () => {},
};
export const RandomRepeatedServiceContext = createContext<RandomServiceContextProps>(initialContext);

interface RandomServiceProviderProp {
    children: ReactNode;
    randomService?: RandomService
}

export const RandomRepeatedServiceProvider: React.FC<RandomServiceProviderProp> = ({
                                                                                       children,
                                                                                       randomService = defaultRandomService()
}) => {
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

    useEffect(() => {
        setPerson(randomService.getPerson);
        setCar(randomService.getCar());
        setNumber(randomService.getNumber());
        setColor(randomService.getColor());
    }, [randomService])

    return (
        <RandomRepeatedServiceContext.Provider value={{ person, car, number, color, updateValues }}>
            {children}
        </RandomRepeatedServiceContext.Provider>
    )
}