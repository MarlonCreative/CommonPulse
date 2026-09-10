# Hackathon form copy

## Project name

Common Pulse

## Category

Ethnomusicology

## Project description

Common Pulse is a musical field notebook that turns a short recording into an editable, participatory understanding of rhythm. A researcher, educator, or learner can record clapping, voice, or an isolated instrument; review detected sound events in a TUBS grid; edit the tempo and rhythmic cycle; see equivalent unpitched Western rhythmic notation; export MusicXML; and attach time-linked observations. The project frames automated transcription as a reviewable draft, preserving the original recording and avoiding unsupported claims about instruments, culture, or origin.

With Astra connected, users can dictate a field note, ask for a bounded interpretation or grid correction, and discover cited performance examples—including YouTube when available. They can then practice a part by tapping or clapping, turning documentation into participation.

## Describe your use of OpenAI products

Common Pulse uses GPT-6 Astra through the Responses API as a careful research and teaching layer. Astra receives the researcher’s edited grid, tempo, onset measurements, and field notes—not raw music audio—and returns a structured, validated interpretation or proposed rhythm update. The app uses Astra web search to find cited performance examples and context, prioritizing performer, community, and institutional sources. Clickable citations appear in the interface, and recognized YouTube sources are embedded when available.

Spoken field notes are transcribed with `gpt-transcribe`, preserving musical terms and multilingual language. Rhythm onset detection, audio playback, TUBS editing, staff generation, MusicXML export, and practice scoring run locally in the browser. Responses use `store: false`; recordings stay on the device unless a user explicitly dictates a note.

## Feedback from using OpenAI products

GPT-6 Astra works well here because it can reason across field notes, a constrained symbolic rhythm grid, and web research while keeping those sources distinct. Structured outputs made it practical to validate full rhythm updates before applying them, and web search with citations makes performance discovery traceable rather than speculative.

The main limitation is that Astra does not process raw music audio in this workflow, so Common Pulse pairs it with local onset analysis and `gpt-transcribe` for spoken notes. That separation makes provenance clear, but a future audio-to-structured-rhythm capability with event-level confidence and controllable uncertainty would make this much stronger for real fieldwork.

## Links to provide after publishing

- Public GitHub repository: `https://github.com/<your-account>/common-pulse`
- One-minute demo video: `https://youtube.com/watch?v=<your-video-id>`
- Live app: use the private Sites link if the form accepts it, or deploy a public preview from your preferred host.
