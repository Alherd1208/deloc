# Custom Domain Setup for delog.online

This document provides instructions for setting up the custom domain `delog.online` with GitHub Pages.

## GitHub Pages Configuration

1. Go to your repository settings on GitHub
2. Navigate to "Pages" section
3. Under "Custom domain", enter: `delog.online`
4. Check "Enforce HTTPS" (recommended)

## GoDaddy DNS Configuration

Configure the following DNS records in your GoDaddy domain settings:

### A Records (IPv4)
```
@    A    185.199.108.153
@    A    185.199.109.153
@    A    185.199.110.153
@    A    185.199.111.153
```

### CNAME Record
```
www    CNAME    alherd1208.github.io
```

## Alternative: Using CNAME for Root Domain

If GoDaddy doesn't support CNAME for root domain (@), use these A records:

```
@    A    185.199.108.153
@    A    185.199.109.153
@    A    185.199.110.153
@    A    185.199.111.153
www   CNAME    alherd1208.github.io
```

## Verification

After DNS propagation (can take up to 24 hours):

1. Visit `https://delog.online` - should show your website
2. Visit `https://www.delog.online` - should redirect to delog.online
3. Check that all images and assets load correctly

## Troubleshooting

- If the site doesn't load immediately, wait for DNS propagation
- Check GitHub Pages settings show "Custom domain: delog.online"
- Verify HTTPS is enabled in GitHub Pages settings
- Clear browser cache if needed

## Current Configuration

- Repository: `Alherd1208/deloc`
- Custom Domain: `delog.online`
- GitHub Pages URL: `https://alherd1208.github.io/deloc/` (will redirect to custom domain)
