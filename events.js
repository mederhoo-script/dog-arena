// ============================================================
// events.js — Dog Arena Upcoming Events Data
//
// Event object fields:
//   name        — event display name
//   date        — event date (YYYY-MM-DD)
//   description — short description shown on the event card
//   image       — relative path from /images/
//               ⚠ No event images exist on disk yet.
//               Set each image to "" to use the emoji fallback,
//               or add your files to images/events/ and update below.
// ============================================================

var events = [

    // ── Dog Show ───────────────────────────────────────────────
    {
        name: "Annual Dog Show",
        date: "2026-06-15",
        description: "Meet our top breeds and find your perfect companion 🐕",
        image: "events/dog_show.jpg"   // TODO: add images/events/dog_show.jpg
    },

    // ── Puppy Adoption Fair ────────────────────────────────────
    {
        name: "Puppy Adoption Fair",
        date: "2026-05-10",
        description: "Special selection of puppies available for adoption 🐾",
        image: "events/adoption_fair.jpg"   // TODO: add images/events/adoption_fair.jpg
    },

    // ── Breed Showcase ─────────────────────────────────────────
    {
        name: "Breed Showcase",
        date: "2026-04-20",
        description: "Discover rare and popular breeds up close 🦴",
        image: "events/breed_showcase.jpg"   // TODO: add images/events/breed_showcase.jpg
    }

];
