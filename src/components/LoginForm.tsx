import { use, useActionState, useOptimistic } from "react";
import { login } from "../apiCalls";
import { ILoginInfo } from "../interfaces/loginInfo";
import LoginButton from "./LoginButton";
import { ThemeContext } from "../interfaces/ThemeContext";

export default function LoginForm() {
    const [loginText, setLoginText] = useOptimistic("Login");
    
    const theme = use(ThemeContext);

    const [error, submitAction, ] = useActionState(
        async (previousState, formData: FormData) => {
            setLoginText("Logging in");
            const loginInfo: ILoginInfo =
            {
              username: formData.get("username")?.toString(),
              password: formData.get("password")?.toString(),
            };

            const errorIfAny = await login(loginInfo);
            return errorIfAny;
        },
        null
    );

    return (
        <form action={submitAction}>
          {loginText}
          <input type="text" name="username" />
          <input type="password" name="password" />
          <LoginButton />
          {error && <p>{error}</p>}
          <p>Theme: {theme}</p>
      </form>
    );
}
