#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${S3_BUCKET:-}" ]]; then
  echo "S3_BUCKET is required" >&2
  exit 1
fi

if [[ -z "${AWS_REGION:-}" ]]; then
  export AWS_REGION="us-east-1"
fi

if [[ ! -d "dist" ]]; then
  npm run build
fi

aws s3 sync dist "s3://${S3_BUCKET}" \
  --region "${AWS_REGION}" \
  --delete \
  --cache-control "public,max-age=300"

aws s3 cp "dist/assets" "s3://${S3_BUCKET}/assets" \
  --recursive \
  --region "${AWS_REGION}" \
  --cache-control "public,max-age=31536000,immutable" \
  --metadata-directive REPLACE || true

if [[ -n "${CLOUDFRONT_DISTRIBUTION_ID:-}" ]]; then
  aws cloudfront create-invalidation \
    --distribution-id "${CLOUDFRONT_DISTRIBUTION_ID}" \
    --paths "/*"
fi

echo "Deployment complete"

