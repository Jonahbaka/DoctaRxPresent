#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${S3_BUCKET:-}" ]]; then
  echo "S3_BUCKET is required" >&2
  exit 1
fi

if [[ -z "${AWS_REGION:-}" ]]; then
  export AWS_REGION="us-east-1"
fi

S3_PREFIX="${S3_PREFIX:-ng-presentation}"
S3_DEST="s3://${S3_BUCKET}"
INVALIDATION_PATH="/*"
DEFAULT_BASE_PATH="/"

if [[ -n "${S3_PREFIX}" ]]; then
  S3_PREFIX="${S3_PREFIX#/}"
  S3_PREFIX="${S3_PREFIX%/}"
  S3_DEST="s3://${S3_BUCKET}/${S3_PREFIX}"
  INVALIDATION_PATH="/${S3_PREFIX}/*"
  DEFAULT_BASE_PATH="/${S3_PREFIX}/"
fi

VITE_BASE_PATH="${VITE_BASE_PATH:-${DEFAULT_BASE_PATH}}" npm run build

aws s3 sync dist "${S3_DEST}" \
  --region "${AWS_REGION}" \
  --delete \
  --cache-control "public,max-age=300"

aws s3 cp "dist/assets" "${S3_DEST}/assets" \
  --recursive \
  --region "${AWS_REGION}" \
  --cache-control "public,max-age=31536000,immutable" \
  --metadata-directive REPLACE || true

if [[ -n "${CLOUDFRONT_DISTRIBUTION_ID:-}" ]]; then
aws cloudfront create-invalidation \
    --distribution-id "${CLOUDFRONT_DISTRIBUTION_ID}" \
    --paths "${INVALIDATION_PATH}"
fi

echo "Deployment complete: ${S3_DEST}"
