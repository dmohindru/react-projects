export interface RandomService {
    updateValues: () => void
    getPerson: () => string
    getCar: () => string
    getNumber: () => number
    getColor: () => string
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

// setRandomServiceObj({
//     personName: faker.person.firstName("female"),
//     car: faker.vehicle.vehicle(),
//     randomNumber: faker.number.int(),
//     color: faker.color.human(),
// });