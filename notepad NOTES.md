# Patch Notes

## Summary of changes

I focused on correctness, request reliability, and defensive API handling.

- Fixed the task search SQL so archived records are excluded consistently and the status filter applies to both title and description matches.
- Removed an artificial Thread.sleep() from the request path that added unnecessary latency and blocked the request thread.
- Added validation for page, pageSize, and status so invalid client input returns HTTP 400 instead of causing incorrect results or server errors.
- Improved the frontend task hook so loading is cleared on both success and failure, previous errors are cleared, and stale requests cannot overwrite newer results.
- Reset pagination to page 1 whenever the search query or status filter changes.

## What I chose not to change

I did not redesign the UI or rewrite pagination because those changes were outside the highest-value fixes for this time-boxed exercise.

I also did not update npm dependencies or modify the Oracle reference artifact because they were not necessary for the core functional issues I prioritized.

## Biggest remaining risk

The backend loads all matching tasks into memory and then applies pagination. This could become inefficient with a much larger dataset. A database-level paginated query would be preferable in production.

## AI/tool usage

I used ChatGPT to inspect the code, reason about possible bugs, and suggest focused fixes. I reproduced the relevant behavior locally, reviewed the changes, and verified the corrected API and frontend behavior before keeping the changes.
