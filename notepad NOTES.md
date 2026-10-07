# Notes

## Summary of Changes

I focused on the highest-value issues around task filtering, status validation, and pagination. I added validation for `page` and `pageSize`, improved status-filter handling, and ensured search, status, and pagination parameters are passed consistently between the React frontend and Spring Boot API. I also verified the behavior through direct API requests and the browser UI.

## What I Chose Not to Change

I intentionally avoided broad UI redesigns, large refactors, and unrelated code-quality changes. The exercise is time-boxed, so I prioritized correctness and API behavior over cosmetic improvements.

## Biggest Remaining Risk

The biggest remaining risk is the limited automated test coverage around combinations of search, status filtering, pagination boundaries, and invalid input. These cases should ideally be covered with backend integration tests and frontend tests.

## Tools / AI Used

I used ChatGPT to help inspect the code, reason about possible bugs, and validate implementation approaches. I reviewed the suggestions, tested the behavior locally, and made/verified the final code changes myself. I also used PowerShell, curl, Git, and the browser developer tools for debugging and verification.
