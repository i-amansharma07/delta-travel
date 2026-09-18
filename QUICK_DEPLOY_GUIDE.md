# 🚀 Quick Deploy Guide (5 Minutes)

**Fastest way to deploy your site for free**

---

## Option 1: Vercel (Easiest - Recommended) ⭐

### Step 1: Push to GitHub
```bash
cd /home/aman-sharma/Desktop/delta-1

# Initialize git if not done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Delta Air Travel"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/delta-air-travel.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com
2. Click **Sign Up** → Sign up with GitHub
3. Click **Add New Project**
4. Select your `delta-air-travel` repository
5. Click **Deploy**
6. Wait 2-3 minutes
7. **Done!** Your site is live at `https://YOUR-PROJECT-NAME.vercel.app`

### Step 3: Add Custom Domain (Optional)
1. In Vercel dashboard, click **Settings** → **Domains**
2. Add your domain (e.g., deltaairtravel.com)
3. Follow DNS setup instructions

---

## Option 2: Netlify (Also Easy)

### Step 1: Push to GitHub (Same as above)

### Step 2: Deploy on Netlify
1. Go to https://netlify.com
2. Click **Sign Up** → GitHub
3. Click **Add new site** → **Import an existing project**
4. Select your repository
5. Leave settings as default
6. Click **Deploy site**
7. Wait 2-3 minutes
8. **Done!** Your site is live

---

## Option 3: GitHub Pages (Free Alternative)

### Step 1: Push to GitHub

### Step 2: Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Branch: Select **main**
4. Folder: Select **/(root)**
5. Click **Save**
6. Wait 2-3 minutes
7. **Done!** Site is live at `https://YOUR-USERNAME.github.io/delta-air-travel/`

---

## Before Deploying (1-Minute Checklist)

```bash
# Build locally to verify it works
npm run build

# Should see "✓ Completed in 718ms" and "8 page(s) built"
```

If build succeeds → Ready to deploy!

---

## That's It! 🎉

**Time needed:** ~5-10 minutes total

**What you get:**
- ✅ Live website
- ✅ Free SSL/HTTPS
- ✅ Automatic deployments (push to GitHub = auto-deploy)
- ✅ Free domain (or add your own)

---

## After Deployment

### First Thing to Do
Visit Google Search Console:
1. Go to https://search.google.com/search-console
2. Add your domain
3. Submit sitemap: `/sitemap.xml`

That's all you NEED to do to get traffic from Google!

---

## Make Changes & Redeploy

After deployment, to make changes:

```bash
# Make your changes in code
# Then:
git add .
git commit -m "Updated social icons"
git push origin main

# Vercel/Netlify automatically redeploys!
# Live in 1-2 minutes
```

---

## Troubleshooting

**Build fails?**
```bash
rm -rf dist/ node_modules/
npm install
npm run build
```

**Site shows 404?**
- Make sure you pushed to GitHub
- Wait 2-3 minutes for deployment
- Refresh browser (Ctrl+Shift+R)

**Domain not working?**
- Wait 24 hours for DNS to propagate
- Check DNS settings in registrar

---

**Choose Vercel or Netlify. You'll be live in 10 minutes!** 🚀
