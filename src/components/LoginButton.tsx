import { useFormStatus } from "react-dom";

export default function LoginButton() {
    const { pending } = useFormStatus();

    return <button disabled={pending}>
        Login
    </button>;
}