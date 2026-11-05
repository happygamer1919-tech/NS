#!/usr/bin/env bash
# Vercel Ignored Build Step. Exit 1 = build, exit 0 = skip.
# Builds only production and preview/* branches to save build minutes.
BRANCH="${VERCEL_GIT_COMMIT_REF:-}"
if [[ "$VERCEL_ENV" == "production" || "$BRANCH" == "main" || "$BRANCH" == preview/* ]]; then
  echo "Build: $BRANCH ($VERCEL_ENV)"
  exit 1
fi
echo "Skip: $BRANCH is not production or preview/*"
exit 0
