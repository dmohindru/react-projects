import {faker} from "@faker-js/faker";

export interface RandomService {
    updateValues: () => void
    getPerson: () => string
    getCar: () => string
    getNumber: () => number
    getColor: () => string
}

export const defaultRandomService = (): RandomService => {
    return {
        updateValues: () => {alert('not implemented')},
        getPerson: () => 'no-value',
        getCar: () => 'no-value',
        getColor: () => 'no-value',
        getNumber: () => -1
    }
}

export const repeatedRandomValueService = ():RandomService => {
    let index = 3
    const personNames = ['Dhruv', 'Poonam', 'Daksh', 'Parth']
    const carName = ['ford', 'toyota', 'honda', 'mazda']
    const numbers = [100, 200, 300, 400]
    const colors = ['red', 'blue', 'green', 'yellow']
    return {
        updateValues: () => {
            index++
            if (index >= personNames.length) {
                index = 0
            }
            console.log('index', index)
        },
        getPerson: () => personNames[index],
        getCar: () => carName[index],
        getNumber: () => numbers[index],
        getColor: () => colors[index]
    }
}
export const fakerRandomValueService = (): RandomService => {
    let personName = faker.person.firstName("female")
    let car = faker.vehicle.vehicle()
    let randomNumber = faker.number.int()
    let color = faker.color.human()
    return {
        updateValues: () => {
            personName = faker.person.firstName("female")
            car = faker.vehicle.vehicle()
            randomNumber = faker.number.int()
            color = faker.color.human()
        },
        getPerson: () => personName,
        getCar: () => car,
        getNumber: () => randomNumber,
        getColor: () => color
    }
}