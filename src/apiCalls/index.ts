
const delay = (milliseconds: number) => new Promise(handler => setTimeout(handler, milliseconds));

export const updateName = async (userName: string): Promise<string | null> => {
    await delay(2000);
    const randomNumber = Math.floor((Math.random() * 100) + 1);

    if (randomNumber > 50) {
        return "Error";
    }

    return null;
}