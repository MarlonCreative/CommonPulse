# Common Pulse

A working hackathon prototype for musical field recording, editable rhythmic transcription, contextual research, and participation. Built with React, Vinext, Web Audio, and the OpenAI Responses API using `gpt-6-astra`.

## Use it

- Record up to 60 seconds, upload an audio file up to 20 MB, or use the original synthetic practice sketch.
- Review the first cycle in TUBS, change cells, name parts, mute parts, and play the resulting pattern.
- Set cycle length and tempo. Three equal grid pulses correspond to one displayed BPM beat. Rebuild the detected part after a tempo change if desired; original onset timestamps are preserved.
- View equivalent rhythmic Western staff notation and export MusicXML.
- Inspect candidate section boundaries based on changes in signal energy.
- Type timestamped observations or connect an OpenAI API key and dictate a field note. Dictation uses `gpt-transcribe` for speech, not musical note transcription.
- Ask Astra to interpret measurements and field notes, explain a pattern, or apply a correction. A validated response can update the rhythm. Concurrent manual edits are preserved.
- Search the web with Astra for documented performances, with inline citations and embedded YouTube videos when cited video URLs are available. Videos that disallow embedding can still be opened using their source link. A direct YouTube search link works without an API key.
- Practice a part for two cycles using the tap pad or space bar, with one-to-one onset matching and extra-tap feedback.
- Save the current notebook and original recording to IndexedDB on this device. Export notebook JSON, MusicXML, and audio separately. There is one saved notebook slot; saving replaces it. Notebook JSON is an archival export, not an import format in this version.

## Run

`npm ci`, then `npm run dev`. Use the localhost URL printed by the development server. A secure context (HTTPS or localhost) is required for microphone access. The production build is `npm run build`.

No shared server API key is configured. Use **Connect Astra** in the app to provide your own OpenAI API key. It remains in memory for the current tab, is passed through the app's server to OpenAI per request, and is never written to browser storage or the saved notebook. Reloading clears it. The account needs access to `gpt-6-astra`, `gpt-transcribe`, and web search. Requests incur OpenAI API charges.

Recordings used for musical onset analysis stay on the device. Clicking **Speak a note** sends the spoken recording to OpenAI. Clicking **Interpret with Astra** sends notes, pattern data, and onset measurements; **Find with Astra** sends the search and researcher notes. Responses requests use `store:false`. Provider retention policies still apply.

## Scope and limitations

This is an onset-based rhythmic transcription prototype, not a complete automatic ethnomusicological transcription system. The detector works best with isolated transients such as clapping or a single percussive instrument. It does not estimate pitch, separate ensemble stems, identify instruments, infer meter or cultural origin, or transcribe full polyphonic scores. BPM is selected by the researcher. All staff notation is unpitched rhythm, and each grid cell is an eighth note or rest. TUBS quantization can simplify expressive timing; original onset timestamps and audio remain available. Structure labels represent energy-based candidate boundaries, not verified song form. Instrument names are supplied by the researcher or derived by Astra from their description, not classified from audio.

Microphone and playback behavior depends on browser/device permissions and latency. Practice feedback measures grid timing, not cultural or stylistic correctness. A microphone button never activates automatically. Web search candidates require scholarly review; similar rhythm is not evidence of cultural or historical relationship.

## Verification

`node --experimental-strip-types tests-music.mjs` checks synthetic transient detection, silence, quantization, cycle resizing, one-to-one practice scoring, and MusicXML escaping/event counts/tempo conversion.

`npx tsc --noEmit` checks types. `npm run build` produces the Sites-compatible Worker and assets. `node scripts/check-api.mjs` checks local API validation without sending paid requests.

Live OpenAI responses, physical microphone recording, and YouTube embed availability require an API key/browser interaction and were not verified during this build. Browser UI testing was not requested. The optional `read_musical_notebook` WebMCP tool is feature-detected and excludes audio and credentials. No permitted supported WebMCP context was available for runtime validation.
