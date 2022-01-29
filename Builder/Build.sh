
clear

deno run            \
    --allow-read    \
    --allow-write   \
    --importmap=Builder/Imports.json \
    Builder/Build.js
