import { useActionState } from "react";
import { login } from "../apiCalls";
import { ILoginInfo } from "../interfaces/loginInfo";

export default function LoginForm() {
    const [error, submitAction, isPending] = useActionState(
        async (previousState, formData: FormData) => {
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
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button disabled={isPending}>
            Login
          </button>
          {error && <p>{error}</p>}
      </form>
    );
}
