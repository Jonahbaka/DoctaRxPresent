# AWS S3 + CloudFront Deployment

This presentation microsite is designed to be hosted separately from the main DoctaRx production app.

Preferred domain: `presentation.doctarx.com`

## Required AWS Setup

Create or identify:

- An S3 bucket for static hosting assets
- A CloudFront distribution pointed at the bucket
- An ACM certificate in `us-east-1` for `presentation.doctarx.com`
- A Route 53 DNS record for `presentation.doctarx.com`
- IAM credentials with permission to sync to the S3 bucket and invalidate CloudFront

## Local Deploy

Set environment variables:

```bash
export AWS_REGION=us-east-1
export S3_BUCKET=your-presentation-bucket
export CLOUDFRONT_DISTRIBUTION_ID=E1234567890
```

Then run:

```bash
npm ci
npm run build
bash deploy/aws/deploy-s3-cloudfront.sh
```

## GitHub Actions

Copy `deploy/aws/github-actions-deploy.yml` to `.github/workflows/deploy-aws.yml` or use the included workflow file already placed there.

Required repository secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET`
- `CLOUDFRONT_DISTRIBUTION_ID`

No API keys for JSON2Video or ElevenLabs are required for deployment because the rendered MP4 is already included as a static asset.

