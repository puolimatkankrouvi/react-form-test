import { useActionState, useOptimistic } from "react";
import { login } from "../apiCalls";
import { ILoginInfo } from "../interfaces/loginInfo";
import LoginButton from "./LoginButton";

export default function LoginForm() {
    const [loginText, setLoginText] = useOptimistic("Login");

    const [error, submitAction, ] = useActionState(
        async (_previousState: string | null, formData: FormData) => {
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
      </form>
    );
}
