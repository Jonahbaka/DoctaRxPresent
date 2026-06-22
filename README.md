# DoctaRx Abuja Pilot Presentation

This repository contains the DoctaRx Abuja Pilot Program presentation microsite and pre-presentation video package.

The microsite is focused on the pilot program: a small, measurable, low-risk Abuja pilot connecting selected PHCs, one General Hospital referral pathway, participating doctors, pharmacy partners, and a Ministry/Department oversight dashboard.

## Local Run

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

The static output is generated in `dist/`.

## Key Files

- `src/App.tsx` - pilot-focused presentation microsite
- `src/data/mockDoctaRxData.ts` - fictional sample pilot data
- `public/media/DoctaRx_Pilot_PrePresentation_With_Live_Portal_Walkthrough.mp4` - final video
- `presentation-video/scripts/pre_presentation_video_script.md` - video script
- `presentation-video/scripts/pilot_program_story.md` - pilot story
- `presentation-video/scripts/narration_script_female_voice.md` - female narration script
- `presentation-video/json2video/pre_presentation_video.json` - JSON2Video plan
- `presentation-video/assets-prompts/character_prompts.md` - character prompts
- `presentation-video/assets-prompts/pilot_scene_prompts.md` - scene prompts
- `deploy/aws/README.md` - AWS hosting setup
- `deploy/aws/deploy-s3-cloudfront.sh` - local AWS deploy script
- `deploy/aws/github-actions-deploy.yml` - GitHub Actions deployment template

## Video Quality Notes

- Uses a calm female healthcare narrator.
- Uses actual DoctaRx Nigeria portal walkthrough footage.
- Uses demo accounts and synthetic sample data only.
- Does not show real PHI, real diagnosis claims, or real government data.
- The video hands over to Jonah Baka's live PowerPoint instead of pretending to present on his behalf.

## AWS Hosting

Preferred hosting is AWS S3 + CloudFront under:

```text
presentation.doctarx.com
```

AWS credentials were not committed and should never be stored in the repository.

See `deploy/aws/README.md` for the deployment checklist.

