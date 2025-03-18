import { Hono } from "hono";

const app = new Hono();

const user = {
    name: "Anna",
    age: 25,
    hobbies: ["Lesen", "Schwimmen", "Musik hören"],
};

// Endpoint für die Benutzerdaten
app.get("/user", (c) => {
    return c.json(user);
});

// Statische Dateien (index.html) servieren
app.get("*", (c) => {
    return c.text("Lade die index.html im Browser!");
});

Deno.serve(app.fetch);
