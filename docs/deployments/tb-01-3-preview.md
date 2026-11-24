# TB-01.3 — Storefront Preview Deployment

## Deployment information

- **Storefront:** Demo Candle Shop
- **Environment:** Noncommercial demonstration
- **Hosting provider:** GitHub Pages
- **Deployment URL:** https://ogrenecommercemanager-spec.github.io/storefront-starter/
- **Full Git commit SHA:** cad5c28da0b8f38710d622a337b6eae01311a22b
- **GitHub Actions run:** https://github.com/ogrenecommercemanager-spec/storefront-starter/actions/runs/45310156705
- **Deployment status:** Successful
- **Deployment date:** 11/23/2026

## Verification

- [x] Storefront loads over HTTPS.
- [x] Demo Candle Shop is displayed.
- [x] Static product information renders correctly.
- [x] GitHub Actions deployment completed successfully.
- [ ] Displayed commit SHA matches the deployed commit.
- [ ] No browser console errors or missing assets.

## Recovery procedure

If a deployment introduces a problem:

1. Identify the last known-good commit SHA from deployment history.
2. Restore that version on a new branch using a revert or other reviewed change.
3. Run the required automated checks.
4. Merge the recovery change and trigger a new deployment.
5. Verify the restored site and record the new deployment SHA.

To disable the demonstration, go to GitHub repository Settings → Pages and unpublish the site.

## Notes

This deployment is for infrastructure testing only. It does not support real customer purchases, payments, or merchant operations.
