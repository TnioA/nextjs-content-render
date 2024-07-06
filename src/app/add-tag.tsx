'use client'

import { FormEvent, useState } from "react";

export function AddTag() {
    const [slug, setSlug] = useState('');

    async function handleCreateTag(event: FormEvent) {
        event.preventDefault();

        if (!slug)
            return;

        const response = await fetch("http://127.0.0.1:5000/tags", {
            headers: {'Content-Type': 'application/json'},
            method: "POST",
            body: JSON.stringify({ slug })
        });
    }

    return (
        <form onSubmit={handleCreateTag}>
            <input type="text" style={{color: 'black'}} name="slug" placeholder="Nome da tag" value={slug} onChange={x => setSlug(x.target.value)} />
            <button type="submit">Criar tag</button>
        </form>
    );
}