# Common Pulse

## Project description

Common Pulse is a musical field notebook that helps people move from a short recording to an editable, participatory understanding of rhythm. A researcher, educator, or learner can record clapping, voice, or an isolated instrument; review detected sound events in a Time Unit Box System (TUBS) grid; edit the cycle and tempo; see equivalent unpitched Western rhythmic notation; and export MusicXML. They can attach time-linked observations, practice a part by tapping or clapping, and save the notebook locally.

The project treats automated transcription as a draft, not an authority. The recording stays available alongside the quantized grid, and the app makes clear what is measured, what a researcher has named, and what is an interpretation. It does not infer cultural origin or instrument identity from a rhythm.

With Astra connected, Common Pulse turns field notes into a research conversation. An ethnomusicologist can dictate a note, ask Astra to explain an edited pattern or make a bounded correction, and search for cited performance examples—including YouTube when available. Astra is instructed to distinguish documented sources from possible comparisons and to avoid unsupported cultural claims.

## Use of OpenAI products

Common Pulse uses the OpenAI Responses API with GPT-6 Astra as the research and teaching layer. Astra receives the researcher’s edited TUBS grid, tempo, onset measurements, and field notes—not raw music audio—and returns a structured, validated interpretation or a complete proposed rhythm update. This keeps musical decisions reviewable and prevents the model from claiming to hear, identify, or culturally classify a recording it did not receive.

The app also uses Astra’s web search tool to find cited performances and context. It asks Astra to prioritize performer, community, and institutional sources; surface actual YouTube performances or demonstrations when available; cite each result; and state when a comparison is speculative. Citations appear as clickable links and recognized YouTube URLs are embedded in the app.

For spoken field notes, Common Pulse sends a short recording to `gpt-transcribe` with a prompt to preserve multilingual musical terminology and instrument names. Audio onset detection, playback, TUBS editing, staff generation, MusicXML export, and practice scoring happen locally in the browser. Responses use `store: false`; recordings used for rhythm analysis stay on the device unless the user explicitly dictates a note.

## OpenAI product feedback

GPT-6 Astra is unusually well suited to this project because it can reason across a researcher’s observations, a constrained symbolic music representation, and web research without losing the distinction between them. Structured outputs made it practical to let Astra propose a whole rhythm update while validating that the cycle length and every part still align. Web search with citations was particularly valuable because the product needs traceable performance examples rather than unsupported recommendations.

The main limitation is modality: Astra does not take raw audio in this workflow, so the product needs a separate local onset-analysis layer and `gpt-transcribe` for spoken notes. That separation became a strength for the demo because it makes provenance explicit, but an integrated audio-to-structured-rhythm capability with controllable uncertainty and per-event confidence would make this much more powerful for real fieldwork. Reliable tools for returning source metadata and time-aligned citations from performance search would also improve the research workflow.

## One-minute demo script

0:00–0:06 — “Common Pulse turns a short recording into an editable musical field notebook—then lets you join the music with your hands.”

0:06–0:17 — On Field notebook, click **Try a practice sketch** and press **Listen to pattern**. “Every sound is visible as a TUBS grid. I can mute a part, add a sound, or rename a performer’s part without treating the computer’s draft as final.”

0:17–0:28 — Switch to **Staff notation**. “The same pattern becomes readable Western rhythm notation, and I can export MusicXML. The original timing remains the source; this is an editable representation.”

0:28–0:38 — In the note box, enter: “The bell begins each cycle; make the second part easier.” Click **Interpret with Astra**. “Astra reasons over my notes and grid, then gives a reviewable interpretation or a valid pattern update. It does not claim to identify a culture or instrument from the rhythm.”

0:38–0:49 — Go to **Discover**, search a specific performer, instrument, or tradition. “Astra searches for cited performance examples and context, with YouTube embeds when a source provides a video.”

0:49–1:00 — Go to **Practice**, select a part, click **Start a two-cycle practice**, and tap the pad. “Anyone can participate through clapping or tapping. Common Pulse connects fieldwork, music education, and performance while keeping the people and context with the music.”

## Recording checklist

1. Start a screen recording at 1440px wide or larger. Keep the browser zoom at 100%.
2. Use the synthetic sketch for the first 28 seconds so the demo is dependable without microphone permissions.
3. Add an API key before recording if you want to show live Astra interpretation and search. Otherwise state that these buttons call Astra and use a prepared screenshot or a short edit to show the result.
4. Record voiceover in one take and keep the screen recording under 60 seconds.
5. Upload the video to YouTube as unlisted, copy the watch URL into the submission form, and verify it plays in an incognito browser window.

## Public GitHub release checklist

1. Create a public GitHub repository named `common-pulse`.
2. Push this project directory to its `main` branch.
3. Add the repository URL and unlisted YouTube URL to the hackathon form.
4. Do not commit an OpenAI API key, recordings, or browser-local notebook data.
