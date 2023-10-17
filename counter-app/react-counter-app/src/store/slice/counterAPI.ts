import { ThunkData } from "../thunks/incrementAsync";
export const fetchCount = (thunkData: ThunkData) => {
    return new Promise<{data: number}>((resolve) => 
        setTimeout(() => resolve({data: thunkData.amount}), thunkData.delay)
    );
}