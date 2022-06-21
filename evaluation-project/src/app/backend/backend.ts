
import { ILogin } from "src/app/app.types";
export const backendStudentList = async (): Promise<ILogin[]> => {
    return [
        { email: 'vikas123@gmail.com', password: 12345 },
        {email: 'sagar123@gmail.com', password: 123321  },
        {email: 'abhilash123@gmail.com', password: 345678  }
    ];
}
