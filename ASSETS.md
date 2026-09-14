# Portfolio assets

Images are committed as binary WebP files in `public/cases` and are copied by Vite into the build. Do not read or upload binary files as UTF-8 text.

Nine original PNG designs (45,054,752 bytes total) were converted to WebP at quality 86, maximum width 1920px, retaining the entire page. Full designs total 4,072,716 bytes (91% smaller). Each has a separate 900×650 top-aligned preview for the gallery. Full designs load only when the viewer opens. Nine working cover images were recovered from the existing deployment and optimized separately.

Original mapping:

| Source | Asset |
| --- | --- |
| signal_room.png / signal_room_2.png | signal-room-v1 / signal-room-v2 |
| auvorax.png | auvorax-v1 |
| quack.png | quack-v1 |
| livesec.png | livesec-v1 |
| gta_1.png / gta_2.png / gta_3.png | project-americas-v1 / v2 / v3 |
| stake.png | gaming-promo-funnel-v1 |

By request, Hermes AI, Kaifuy Team and Stremlenie are website-link projects at the end of the gallery, with no Visual section. Their existing URLs and recovered covers remain, with prominent visit-site actions. LiveSec has one supplied design. Gallery order: gaming promo (Stake), Project Americas (GTA), Quack, LiveSec, Signal Room, Auvorax, then the three website projects.

Run `npm ci`, `npm run lint`, and `npm run build`. The build first verifies referenced image files and binary headers. After adding a design, also add its `-preview.webp` and dimensions to `src/lib/imageMetadata.json`, and confirm that a browser decodes it successfully.
