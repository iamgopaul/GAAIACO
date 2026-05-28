#!/usr/bin/env bash
#
# GAAIA — local dev launcher
#
#   ./run.sh          start the dev server (gaaia.co at http://localhost:3000)
#   ./run.sh build    production build of every app
#   ./run.sh lint     lint every package
#   ./run.sh start    serve the production build
#
set -euo pipefail

# Always run from the repo root, regardless of where the script is called from.
cd "$(dirname "$0")"

# Pick a pnpm: prefer one on PATH, fall back to the Homebrew install.
if command -v pnpm >/dev/null 2>&1; then
  PNPM="pnpm"
elif [ -x /opt/homebrew/bin/pnpm ]; then
  PNPM="/opt/homebrew/bin/pnpm"
else
  echo "error: pnpm is not installed. Install it with: npm install -g pnpm" >&2
  exit 1
fi

# Install dependencies on first run (or whenever node_modules is missing).
if [ ! -d node_modules ]; then
  echo "› Installing dependencies…"
  "$PNPM" install
fi

TASK="${1:-dev}"

case "$TASK" in
  dev)
    echo "› Starting GAAIA dev server → http://localhost:3000"
    exec "$PNPM" dev
    ;;
  build | lint | start)
    exec "$PNPM" "$TASK"
    ;;
  *)
    echo "Usage: ./run.sh [dev|build|lint|start]" >&2
    exit 1
    ;;
esac
