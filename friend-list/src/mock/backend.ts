import { IPeople } from "src/app/app.types";

export const PeopleList = async (): Promise<IPeople[]> => {
    return [
            { id: 1, name: 'Vikas', isFriend: true },
            { id: 2, name: 'Abhilash', isFriend: false },
            { id: 3, name: 'Pradnya', isFriend: false },
            { id: 4, name: 'Saurabh', isFriend: true },
            { id: 5, name: 'Akash', isFriend: false },
          ];
}
