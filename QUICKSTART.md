# 🚀 Quick Start Guide

Get your CV website up and running in 3 simple steps!

## Step 1: Install Dependencies

Open a terminal in this folder and run:

```bash
npm install
```

Wait for it to complete (this downloads all required packages).

## Step 2: Start Development Server

```bash
npm run dev
```

You'll see a message like:
```
  VITE v6.4.1  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## Step 3: Open in Browser

Click the link (usually `http://localhost:5173/`) or copy-paste it into your browser.

**🎉 That's it! Your website is now running!**

---

## 📝 Next Steps

### 1. Add Your Profile Picture
- Place your photo in: `src/assets/images/profile.jpg`
- Recommended: 400x400px square image

### 2. Edit Your Content
- Open: `src/data/content.json`
- Update your information
- Save the file
- Browser will auto-refresh!

📖 **Need help editing?** See [CONTENT_GUIDE.md](CONTENT_GUIDE.md)

### 3. Update Contact Form
- Go to [Formspree.io](https://formspree.io/)
- Create a free account
- Get your form endpoint
- Update it in `content.json` under `"contact"`

---

## 🏗️ Building for Production

When you're ready to publish:

```bash
npm run build
```

Your website files will be in the `dist` folder - ready to deploy!

---

## 🌐 Deploying Your Website

### Option 1: Netlify (Easiest)
1. Go to [netlify.com](https://www.netlify.com/)
2. Drag and drop your `dist` folder
3. Done! You get a free URL

### Option 2: Vercel
1. Install: `npm install -g vercel`
2. Run: `vercel --prod`
3. Follow the prompts

### Option 3: GitHub Pages
See the full README.md for detailed instructions.

---

## ❓ Troubleshooting

**Server won't start?**
- Make sure Node.js is installed: `node --version`
- Try: `rm -rf node_modules && npm install`

**Changes not showing?**
- Save your file
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Profile image not showing?**
- Check the file name is exactly `profile.jpg`
- Check it's in `src/assets/images/`

---

## 📚 Documentation

- **Full Documentation:** [README.md](README.md)
- **Content Editing Guide:** [CONTENT_GUIDE.md](CONTENT_GUIDE.md)

---

## 🎨 What You Get

✅ Modern, responsive design  
✅ Professional academic styling  
✅ Mobile-friendly  
✅ Contact form  
✅ Print-friendly  
✅ Easy to edit (no coding needed!)  
✅ Fast and optimized  

---

**Happy editing! 🎉**

