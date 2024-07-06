import { revalidateTag } from "next/cache";
import { AddTagButton } from "./add-tag-button";

export function AddTagOnServer() {
    async function handleCreateTag(form: FormData) {
        'use server'

        const slug = form.get('slug');
        if (!slug)
            return;

        // delay 3s
        await new Promise(resolve => setTimeout(resolve, 3000));

        const response = await fetch("http://127.0.0.1:5000/tags", {
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify({ slug })
        });

        revalidateTag('get-tags');
    }

    return (
        <form action={handleCreateTag} method="POST">
            <input type="text" style={{ color: 'black' }} name="slug" placeholder="Nome da tag" />
            <AddTagButton />
        </form>
    );
}