# 📋 Deployment Checklist

Before deploying your CV website, go through this checklist to ensure everything is ready!

## ✅ Pre-Deployment Checklist

### 1. Content Review
- [ ] Updated all personal information in `content.json`
- [ ] Verified email address is correct
- [ ] Updated LinkedIn URL (or removed if not using)
- [ ] Checked all job titles and dates
- [ ] Reviewed all responsibilities and descriptions
- [ ] Verified education details and GPAs
- [ ] Updated publications list
- [ ] Checked awards and honors
- [ ] Reviewed skills list
- [ ] Updated teaching experience

### 2. Profile Picture
- [ ] Added profile picture as `src/assets/images/profile.jpg`
- [ ] Image is square (recommended 400x400px)
- [ ] Image file size is under 500KB
- [ ] Image looks good when displayed

### 3. Contact Form Setup
- [ ] Created Formspree account at [formspree.io](https://formspree.io/)
- [ ] Created a new form in Formspree
- [ ] Copied form endpoint URL
- [ ] Updated `formspreeEndpoint` in `content.json`
- [ ] Tested form submission (send a test message)

### 4. Testing
- [ ] Run `npm run dev` and check all sections display correctly
- [ ] Test on mobile device or browser dev tools
- [ ] Check all links work (email, LinkedIn)
- [ ] Verify contact form works
- [ ] Test print layout (Ctrl/Cmd + P)
- [ ] Check for any console errors (F12)

### 5. Build & Optimize
- [ ] Run `npm run build` successfully
- [ ] Check `dist` folder was created
- [ ] No build errors or warnings

### 6. Privacy Check
- [ ] Removed or masked phone number if needed
- [ ] Verified no sensitive information is exposed
- [ ] Checked email address is one you want public
- [ ] LinkedIn profile is set to public (if linking)

## 🚀 Deployment Options

### Option A: Netlify (Recommended for Beginners)

**Steps:**
1. [ ] Go to [netlify.com](https://www.netlify.com/)
2. [ ] Sign up for free account
3. [ ] Click "Add new site" → "Deploy manually"
4. [ ] Drag and drop your `dist` folder
5. [ ] Wait for deployment to complete
6. [ ] Get your site URL (e.g., `random-name-123.netlify.app`)
7. [ ] (Optional) Set up custom domain

**Custom Domain on Netlify:**
1. [ ] Go to Site settings → Domain management
2. [ ] Click "Add custom domain"
3. [ ] Follow instructions to update DNS

---

### Option B: Vercel

**Steps:**
1. [ ] Install Vercel CLI: `npm install -g vercel`
2. [ ] Run: `vercel login`
3. [ ] Run: `vercel --prod`
4. [ ] Follow prompts
5. [ ] Get your deployment URL

**Custom Domain on Vercel:**
1. [ ] Go to project settings
2. [ ] Click "Domains"
3. [ ] Add your domain and follow DNS instructions

---

### Option C: GitHub Pages

**Prerequisites:**
- [ ] GitHub account created
- [ ] Git installed on your computer

**Steps:**
1. [ ] Create new repository on GitHub
2. [ ] Initialize git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. [ ] Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```
4. [ ] Install gh-pages: `npm install --save-dev gh-pages`
5. [ ] Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
6. [ ] Link to GitHub:
   ```bash
   git remote add origin https://github.com/username/repo-name.git
   git push -u origin main
   ```
7. [ ] Deploy: `npm run deploy`
8. [ ] Enable GitHub Pages in repo settings
9. [ ] Your site will be at: `https://username.github.io/repo-name/`

---

## 📝 Post-Deployment

### Immediate Checks
- [ ] Visit your deployed URL
- [ ] Check all sections load correctly
- [ ] Test contact form on live site
- [ ] Test on mobile device
- [ ] Check page load speed
- [ ] Verify all images load

### Share Your Site
- [ ] Add URL to LinkedIn profile
- [ ] Add to email signature
- [ ] Share on social media
- [ ] Add to business cards
- [ ] Include in job applications

### SEO & Discoverability
- [ ] Submit to Google Search Console
- [ ] Create sitemap (optional)
- [ ] Add meta description (in `index.html` if needed)
- [ ] Share URL with professional networks

## 🔄 Updating Your Site

When you need to make changes:

1. [ ] Edit `content.json` locally
2. [ ] Test changes: `npm run dev`
3. [ ] Build: `npm run build`
4. [ ] Redeploy:
   - **Netlify**: Drag & drop new `dist` folder
   - **Vercel**: Run `vercel --prod`
   - **GitHub Pages**: Run `npm run deploy`

## 🎯 Performance Optimization (Optional)

- [ ] Compress profile image further if needed
- [ ] Enable CDN on hosting platform
- [ ] Set up custom domain with SSL
- [ ] Add Google Analytics (if desired)
- [ ] Set up redirect from www to non-www (or vice versa)

## 🔒 Security

- [ ] Ensure HTTPS is enabled (most platforms do this automatically)
- [ ] Don't commit sensitive data to Git
- [ ] Keep dependencies updated: `npm update`
- [ ] Use environment variables for any API keys (if added later)

## 📊 Monitoring (Optional)

- [ ] Set up uptime monitoring (e.g., UptimeRobot)
- [ ] Add Google Analytics for visitor tracking
- [ ] Monitor Formspree submissions
- [ ] Check site speed with PageSpeed Insights

## 🆘 Troubleshooting

**Site not loading?**
- Check deployment status on hosting platform
- Verify DNS settings (if using custom domain)
- Clear browser cache
- Check browser console for errors

**Images not showing?**
- Verify image paths in `content.json`
- Check images are in `src/assets/images/`
- Rebuild and redeploy

**Contact form not working?**
- Verify Formspree endpoint is correct
- Check Formspree dashboard for submissions
- Test with different email addresses

**Styles look broken?**
- Clear browser cache
- Check build completed successfully
- Verify all CSS files are in `dist` folder

## ✨ Success!

Once all items are checked, your CV website is live and ready to share with the world! 🎉

---

**Quick Deploy Commands:**

```bash
# Build
npm run build

# Netlify (manual)
# → Drag dist folder to netlify.com

# Vercel
vercel --prod

# GitHub Pages
npm run deploy
```

---

**Need Help?** Refer to:
- [README.md](README.md) - Full documentation
- [QUICKSTART.md](QUICKSTART.md) - Getting started
- [CONTENT_GUIDE.md](CONTENT_GUIDE.md) - Editing content

