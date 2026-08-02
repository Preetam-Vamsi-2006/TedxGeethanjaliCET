# Deployment Guide - TEDx Geethanjali College Website

## Pre-Deployment Checklist

### ✓ Environment Variables
- [ ] All `.env` and `.env.local` files are in `.gitignore`
- [ ] `.env.example` contains all required environment variable templates
- [ ] No sensitive data is committed to Git
- [ ] All `NEXT_PUBLIC_*` variables are properly configured

### ✓ Security
- [ ] `.gitignore` properly excludes:
  - `node_modules/`
  - `.env` files
  - `.next/` build directory
  - IDE/editor files
  - OS-specific files

### ✓ Code Quality
- [ ] No console.log statements in production code
- [ ] Error handling is implemented
- [ ] All forms validate input data

---

## Vercel Deployment Steps

### 1. **Connect Repository to Vercel**
   ```bash
   # Push your code to GitHub/GitLab/Bitbucket first
   git push origin main
   ```

### 2. **Import Project to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your repository
   - Vercel will auto-detect Next.js

### 3. **Configure Environment Variables**
   In Vercel Project Settings > Environment Variables, add:
   
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_GA_ID=your_ga_id (optional)
   ```

   **Important:** All variables must be added as:
   - **Available in:** Production, Preview, Development
   - **Encryption:** Enabled (automatic)

### 4. **Build Settings**
   Vercel auto-detects Next.js. Confirm:
   - **Framework:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

### 5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (usually 2-3 minutes)
   - Your site is live!

---

## Environment Variables for Vercel

### Required Variables
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

### Optional Variables
```
NEXT_PUBLIC_GA_ID          # Google Analytics
NEXT_PUBLIC_API_URL        # Custom API endpoint
NEXT_PUBLIC_EVENT_DATE     # Event date (format: YYYY-MM-DD)
NEXT_PUBLIC_EVENT_THEME    # Event theme name
```

---

## Getting Required API Keys

### EmailJS Setup
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new email service
4. Create an email template
5. Get your:
   - Service ID
   - Template ID
   - Public Key

### Google Analytics (Optional)
1. Go to [analytics.google.com](https://analytics.google.com/)
2. Create a new property
3. Get your Measurement ID (format: G-XXXXXXXXXX)

---

## Post-Deployment

### ✓ Verify Deployment
- [ ] Visit your Vercel URL
- [ ] Test contact form
- [ ] Check all navigation links
- [ ] Test on mobile devices
- [ ] Verify no console errors

### ✓ Custom Domain (Optional)
1. In Vercel Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-24 hours)

### ✓ SSL/HTTPS
- Automatically configured by Vercel
- Force HTTPS in Project Settings

---

## Continuous Deployment

### Automatic Deployments
- Every push to `main` branch triggers a new deployment
- Preview deployments for pull requests
- Automatic rollbacks available in Vercel dashboard

### Manual Redeployment
1. Go to Vercel Dashboard
2. Select your project
3. Click "Deployments"
4. Click "Redeploy" on any previous deployment

---

## Troubleshooting

### Build Fails
- Check `vercel.log` in Vercel dashboard
- Ensure all environment variables are set
- Check for any hardcoded API URLs or keys

### Form Submissions Not Working
- Verify EmailJS credentials in environment variables
- Check EmailJS account status
- Test form locally with `.env.local`

### Blank Page on Visit
- Check browser console for errors
- Verify build completed successfully
- Clear browser cache and try again

---

## Security Best Practices

✓ **DO:**
- Keep `.env` files out of Git
- Use environment variables for all secrets
- Rotate API keys regularly
- Monitor Vercel deployment logs

✗ **DON'T:**
- Commit `.env` files
- Hardcode API keys in code
- Share environment variable values
- Use same keys for dev and production

---

## Rollback Procedure

If deployment has issues:
1. Go to Vercel Dashboard > Deployments
2. Find the last working deployment
3. Click the three dots (...)
4. Select "Promote to Production"
5. Previous version is now live

---

## Support

For issues with:
- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js:** [nextjs.org/docs](https://nextjs.org/docs)
- **EmailJS:** [emailjs.com/docs](https://www.emailjs.com/docs)

---

**Last Updated:** August 2, 2026
**Status:** Production Ready ✓
