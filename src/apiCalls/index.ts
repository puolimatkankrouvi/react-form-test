import { ILoginInfo } from "../interfaces/loginInfo";

const delay = (milliseconds: number) => new Promise(handler => setTimeout(handler, milliseconds));

export const login = async (loginInfo: ILoginInfo): Promise<string | null> => {
    await delay(2000);
    const randomNumber = Math.floor((Math.random() * 100) + 1);

    if (randomNumber > 50) {
        return "Error";
    }

    return null;
}