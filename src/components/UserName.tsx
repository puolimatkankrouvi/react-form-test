import { useState, useTransition } from "react";
import { updateName } from "../apiCalls";

export default function UserName() {
    const [name, setName] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    const handleSubmit = () => {
        startTransition(async () => {
            const errorIfAny = await updateName(name);
            if (errorIfAny) {
                setError(errorIfAny);
                return;
            }
        })
    }

    return (
        <div>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <button onClick={handleSubmit} disabled={isPending}>
          Update
        </button>
        {error && <p>{error}</p>}
      </div>
    );
}
