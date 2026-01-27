# Deployment Guide for bertrammedd.com

Once your content is ready and the site looks good locally, here's how to publish it online.

## Option 1: Netlify (Recommended - Easiest)

Netlify is free and the easiest way to deploy.

### Steps:

1. **Build your site:**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with your website.

2. **Go to Netlify:**
   - Visit https://www.netlify.com
   - Sign up for free (use GitHub, GitLab, or email)

3. **Deploy:**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your `dist` folder
   - Done! Your site is live at a random URL like `random-name-12345.netlify.app`

4. **Custom Domain (bertrammedd.com):**
   - In Netlify dashboard, click "Domain settings"
   - Click "Add custom domain"
   - Enter `bertrammedd.com`
   - Follow instructions to update your domain's DNS settings

### DNS Settings for bertrammedd.com:
You'll need to add these records at your domain registrar:
- Type: `A` Record → Value: `75.2.60.5`
- Type: `CNAME` → Name: `www` → Value: `[your-site-name].netlify.app`

---

## Option 2: Vercel (Also Easy)

Similar to Netlify, also free.

1. Build: `npm run build`
2. Visit https://vercel.com
3. Sign up and connect your project
4. Deploy the `dist` folder
5. Add custom domain in settings

---

## Option 3: GitHub Pages

If you're using GitHub:

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   {
     "homepage": "https://yourusername.github.io/bertrammeddweb",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

For custom domain with GitHub Pages, add a `CNAME` file in the `public` folder with `bertrammedd.com` as content.

---

## Before Deploying Checklist

✅ All videos and images are added
✅ `content.json` is updated with all your projects
✅ Site title and subtitle are correct
✅ Test site locally (`npm run dev`)
✅ Build works (`npm run build`)
✅ No errors in browser console

---

## Updating Your Site

After initial deployment:

1. Make changes locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. For Netlify/Vercel: Drag and drop new `dist` folder
5. For GitHub Pages: `npm run deploy`

---

## Domain Setup (bertrammedd.com)

You'll need to purchase the domain first from:
- Namecheap
- Google Domains
- GoDaddy
- etc.

Then follow the DNS instructions from your hosting provider (Netlify, Vercel, etc.).

---

## Cost

- **Hosting:** FREE (Netlify, Vercel, GitHub Pages all have free tiers)
- **Domain:** ~$10-15/year for bertrammedd.com
- **Total:** Just the domain cost!

---

## Need Help?

If you run into issues:
1. Check the browser console for errors (F12 → Console)
2. Make sure all file paths in `content.json` are correct
3. Verify all referenced files exist in the `public/content/` folders
4. Check that the build completes without errors

Most common issues:
- Wrong file paths (missing `/` at the start)
- Typos in file names
- Missing files referenced in content.json
- Video format not supported (use MP4 H.264)
