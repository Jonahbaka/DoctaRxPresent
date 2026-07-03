# AWS S3 + CloudFront Deployment

This presentation microsite is designed to be hosted as a static Vite build under the DoctaRx production domain path.

Preferred URL: `https://doctarx.com/ng-presentation`

## Required AWS Setup

Create or identify:

- An S3 bucket or origin path used by the DoctaRx CloudFront distribution
- A CloudFront behavior or routing rule that serves `/ng-presentation/*`
- An ACM certificate in `us-east-1` for `doctarx.com`
- A Route 53 DNS record for `doctarx.com`
- IAM credentials with permission to sync to the S3 bucket and invalidate CloudFront

## Local Deploy

Set environment variables:

```bash
export AWS_REGION=us-east-1
export S3_BUCKET=your-presentation-bucket
export S3_PREFIX=ng-presentation
export VITE_BASE_PATH=/ng-presentation/
export CLOUDFRONT_DISTRIBUTION_ID=E1234567890
```

Then run:

```bash
npm ci
bash deploy/aws/deploy-s3-cloudfront.sh
```

The deploy script builds with `VITE_BASE_PATH=/ng-presentation/`, syncs `dist/` to `s3://$S3_BUCKET/ng-presentation`, and invalidates `/ng-presentation/*`.

## GitHub Actions

Copy `deploy/aws/github-actions-deploy.yml` to `.github/workflows/deploy-aws.yml` or use the included workflow file already placed there.

Required repository secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET`
- `S3_PREFIX` (use `ng-presentation`)
- `VITE_BASE_PATH` (use `/ng-presentation/`)
- `CLOUDFRONT_DISTRIBUTION_ID`

No API keys for JSON2Video or ElevenLabs are required for deployment because the rendered MP4 is already included as a static asset.
