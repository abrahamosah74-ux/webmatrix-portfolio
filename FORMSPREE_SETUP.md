# 🚀 FORMSPREE SETUP — Complete Guide

## What is Formspree?

Formspree is a **free** form submission service that delivers messages directly to your email inbox. No backend server needed!

---

## Step 1: Create Formspree Account

1. Go to **[Formspree.io](https://formspree.io)**
2. Click **Get Started** → Sign up with email or GitHub
3. Verify your email (check your inbox)

---

## Step 2: Create Your Form

1. In your Formspree dashboard, click **New Form**
2. Give it a name: `WebMatrix Portfolio Contact`
3. Select your email where you want to receive submissions
4. **Copy your Form ID** (looks like: `f_a1b2c3d4`)

---

## Step 3: Update Your Website

Edit `index.html` and find this line:

```html
<form id="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
```

Replace `your-form-id` with your actual form ID from step 2:

```html
<form id="contact-form" action="https://formspree.io/f_a1b2c3d4" method="POST">
```

**Example:**

- Your Form ID: `f_k9x2m8p5`
- Updated form action: `https://formspree.io/f_k9x2m8p5`

---

## Step 4: Test Your Form

1. **Save** `index.html`
2. Go to your local site: `http://localhost:8000`
3. Fill out the contact form and **Submit**
4. Check your email inbox (also check **Spam** folder)

You should receive an email with:

- Sender name
- Sender email
- Service type
- Full message

---

## Step 5: Deploy & Go Live

Once Formspree is working locally:

1. **Update project links** in `projects.json` with real URLs
2. **Push to GitHub** (see deployment guide below)
3. **Deploy** to Netlify, Vercel, or GitHub Pages
4. **Test form again** on your live site

---

## Formspree Features

| Feature | Free Tier | Pro | Details |
|---------|-----------|-----|---------|
| Submissions | 50/month | Unlimited | Free tier is plenty for portfolios |
| Email Forwarding | ✓ | ✓ | Get emails in your inbox |
| Redirects | ✗ | ✓ | Redirect after form submit |
| Slack Integration | ✗ | ✓ | Get notified in Slack |
| File Uploads | ✗ | ✓ | Accept file submissions |
| reCAPTCHA | ✓ | ✓ | Spam protection (optional) |

---

## Troubleshooting

### Form not submitting

- Check that your Form ID is correct
- Make sure the form `action` URL is exactly right
- Refresh your browser and try again

### Emails not arriving

- Check your **Spam/Junk** folder
- Verify your email in Formspree settings
- Test in Formspree dashboard to confirm it's working

### CORS errors or 404

- Ensure your form `action` matches your Form ID exactly
- Make sure you're submitting via the correct method (`POST`)

### Form works locally but not live

- Deploy your site first
- Update the form action **before** deploying (or redeploy after updating)
- Wait 5 minutes for DNS to propagate

---

## Manual Email Fallback

If Formspree doesn't work, the JavaScript in `script.js` automatically creates a **mailto fallback**:

- User clicks submit → Opens their email client
- Form data is prefilled in the email
- They can edit and send manually

This is a safety net if:

- User's mail client isn't configured
- They prefer direct email
- Formspree is having issues

---

## Optional: Enhance Formspree

### Add reCAPTCHA (Anti-Spam)

1. In Formspree form settings, enable **reCAPTCHA**
2. No changes needed to your HTML
3. Users will see a "I'm not a robot" check before submitting

### Get Slack Notifications (Pro)

1. Upgrade to Formspree Pro ($25/month)
2. Connect Slack in form settings
3. Get notified instantly when someone submits

### Custom Thank You Page (Pro)

1. After form submit, redirect to custom page
2. Pro feature, but free alternative: add JavaScript redirect

---

## Quick Reference

| Step | Action |
|------|--------|
| 1 | Sign up at Formspree.io |
| 2 | Create form, copy Form ID |
| 3 | Update `index.html` form action |
| 4 | Test locally at `http://localhost:8000` |
| 5 | Deploy site to GitHub/Netlify/Vercel |
| 6 | Test form on live site |

---

## You're All Set! ✓

Your portfolio now has a working contact form. Clients can reach you directly without any complicated backend setup.

**Next**: Deploy your site to go live! See `DEPLOYMENT.md` for step-by-step instructions.
