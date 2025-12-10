# 🚀 DEPLOYMENT GUIDE - Go Live in Minutes

Your portfolio is ready to deploy. Choose your favorite platform and follow the steps below.

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've done these:

- [ ] Updated project links in `projects.json` with real URLs
- [ ] Added real project images to `images/` folder
- [ ] Set up Formspree and updated form action in `index.html` (see `FORMSPREE_SETUP.md`)
- [ ] Tested locally at `http://localhost:8000` and everything looks good
- [ ] Committed all changes to Git

---

## 🔧 Setup: Git & GitHub

### Install Git (if you haven't already)

**Windows:**

- Download from **[git-scm.com](https://git-scm.com)**
- Run the installer and follow prompts
- Open PowerShell and verify: `git --version`

### Create GitHub Repository

1. Go to **[GitHub.com](https://github.com)** and sign in (create account if needed)
2. Click **+** → **New repository**
3. Name: `webmatrix-portfolio`
4. Description: `Professional portfolio website - Full Stack Web Developer`
5. Set to **Public** (required for GitHub Pages free hosting)
6. **Create repository**
7. Copy the repository URL (looks like: `https://github.com/YOUR_USERNAME/webmatrix-portfolio.git`)

---

## 📦 Option A: Deploy to GitHub Pages (Fastest & Free)

GitHub Pages hosts your site directly from your repo—no additional setup needed.

### Step 1: Initialize Git Locally

```powershell
cd 'C:\Users\Teest\OneDrive\Desktop\webmatrix-portfolio'
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git init
git add .
git commit -m "Initial portfolio commit - professional design"
```

### Step 2: Connect to GitHub

```powershell
git remote add origin https://github.com/YOUR_USERNAME/webmatrix-portfolio.git
git branch -M main
git push -u origin main
```

*(Replace `YOUR_USERNAME` with your actual GitHub username)*

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Branch**, select `main` and folder `/(root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment

### Your Site is Live

Your portfolio is now at:

```text
https://YOUR_USERNAME.github.io/webmatrix-portfolio
```

**Example:** If your username is `john-dev`, your site is at:

```text
https://john-dev.github.io/webmatrix-portfolio
```

### Update After Changes

Every time you make changes:

```powershell
cd 'C:\Users\Teest\OneDrive\Desktop\webmatrix-portfolio'
git add .
git commit -m "Update project links and images"
git push
```

GitHub Pages automatically redeploys within 1-2 minutes.

---

## 🚀 Option B: Deploy to Netlify (Recommended)

Netlify offers better performance, custom domains, and automatic HTTPS.

### Step 1: Push to GitHub (Same as Option A)

```powershell
cd 'C:\Users\Teest\OneDrive\Desktop\webmatrix-portfolio'
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git init
git add .
git commit -m "Initial portfolio commit - professional design"
git remote add origin https://github.com/YOUR_USERNAME/webmatrix-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify

1. Go to **[Netlify.com](https://netlify.com)**
2. Click **Sign up** → Connect with GitHub
3. Authorize Netlify to access your repositories
4. Click **New site from Git**
5. Select your `webmatrix-portfolio` repository
6. Build settings:
   - **Build command**: Leave empty (static site)
   - **Publish directory**: `.` (root folder)
7. Click **Deploy site**
8. Wait 1-2 minutes while Netlify deploys

### Your Site is Live (Netlify)

Netlify assigns a random subdomain like:

```text
https://your-site-abc123.netlify.app
```

You can change this to something memorable (e.g., `webmatrix-portfolio.netlify.app`):

1. Go to Site settings → **Domain management**
2. Click **Options** → **Edit site name**
3. Enter your preferred name

### Custom Domain (Optional)

To use your own domain (e.g., `webmatrix.dev`):

1. Buy a domain from **GoDaddy**, **Namecheap**, or similar
2. In Netlify → Site settings → **Domain management**
3. Click **Add custom domain** and follow instructions
4. Update DNS records at your domain registrar
5. Netlify automatically provides free HTTPS

---

## ⚡ Option C: Deploy to Vercel (Also Excellent)

Vercel is made by the creators of Next.js and offers similar features to Netlify.

### Step 1: Push to GitHub for Vercel (Same as Option A)

```powershell
cd 'C:\Users\Teest\OneDrive\Desktop\webmatrix-portfolio'
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git init
git add .
git commit -m "Initial portfolio commit - professional design"
git remote add origin https://github.com/YOUR_USERNAME/webmatrix-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to **[Vercel.com](https://vercel.com)**
2. Click **Sign up** → Connect with GitHub
3. Authorize Vercel to access your repositories
4. Click **Import Project**
5. Select your `webmatrix-portfolio` repository
6. Framework preset: Select **Other** (static site)
7. Root directory: Leave as `.`
8. Click **Deploy**
9. Wait 1-2 minutes while Vercel deploys

### Your Site is Live (Vercel)

Vercel assigns a URL like:

```text
https://webmatrix-portfolio.vercel.app
```

### Custom Domain (Optional for Vercel)

1. Buy a domain from any registrar
2. In Vercel → Project settings → **Domains**
3. Add your custom domain
4. Update DNS records as instructed
5. Automatic HTTPS provided

---

## 🔄 Comparison: GitHub Pages vs Netlify vs Vercel

| Feature | GitHub Pages | Netlify | Vercel |
|---------|---|---|---|
| **Cost** | Free | Free ($0-99+) | Free ($0-20+) |
| **Setup Time** | 5 min | 10 min | 10 min |
| **Custom Domain** | Yes (paid) | Yes (free + paid) | Yes (free + paid) |
| **Performance** | Good | Excellent | Excellent |
| **Analytics** | No | Yes | Yes |
| **Slack Alerts** | No | Yes | Yes |
| **Best For** | Quick projects | Professional sites | Production apps |

**Recommendation:** Start with **Netlify** or **Vercel** for professional portfolios. They offer better performance and features.

---

## Test Your Live Site

1. Visit your deployed URL
2. Test all sections (scroll, buttons, links)
3. Fill out contact form and verify you get an email
4. Check mobile responsiveness on phone/tablet
5. Verify all project links work

---

## Next Steps

### After Going Live

1. **Update project links** with real URLs to your deployed projects
2. **Add real images** to `images/` folder
3. **Test form** - make sure you receive emails
4. **Monitor performance** - use Lighthouse in Chrome DevTools
5. **Add Google Analytics** (optional) - track visitor stats

### Consider Adding

- [ ] Custom domain name (webmatrix.dev, yourname.dev, etc.)
- [ ] Google Analytics for visitor tracking
- [ ] Meta tags for social media sharing
- [ ] Sitemap and robots.txt for SEO
- [ ] Blog section for technical articles
- [ ] Client testimonials/case studies section

---

## 🚨 Troubleshooting Deployment

### Site shows blank page

- Check that all files are committed: `git status`
- Verify form action URL is correct in `index.html`
- Clear browser cache (Ctrl+Shift+Delete) and reload

### Projects not loading

- Check that `projects.json` is in root folder
- Verify image paths in `projects.json` are correct
- Test locally first: `http://localhost:8000`

### Form not working on live site

- Verify Formspree form ID is in `index.html`
- Make sure form action is `https://formspree.io/f_YOUR_ID` (not placeholder)
- Test at formspree.io dashboard directly

### Custom domain not working

- DNS changes take 5-48 hours to propagate
- Wait and check again later
- Verify DNS records are correct at your registrar

---

## Congratulations

Your professional portfolio is now live and accessible worldwide!

### Share your site

- LinkedIn: Add link to portfolio
- GitHub: Link in bio
- Resume: Include portfolio URL
- Twitter/Social: Share your new site

**You're officially online!** 🌐

---
**Questions?** Refer to:

- **Formspree Issues** → See `FORMSPREE_SETUP.md`
- **General Help** → See `README.md`
- **Deployment Issues** → Check your host's documentation
- **Deployment Issues** → Check your host's documentation
