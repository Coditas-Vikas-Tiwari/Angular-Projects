import { IStudent } from "src/app/app.types";

export const backendStudentList = async (): Promise<IStudent[]> => {
    return [
        { name: 'Akash', marks: 70 },
        { name: 'Saurabh', marks: 40 },
        { name: 'Sagar', marks: 20 },
        { name: 'Abhilash', marks: 60 }
    ];
}
