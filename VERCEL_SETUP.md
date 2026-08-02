# Quick Vercel Deployment Setup Guide

## Step 1: Prepare Repository
```bash
# Ensure .gitignore is correct
# Ensure .env files are NOT tracked

# Check what will be pushed
git status

# Do NOT commit:
# - .env
# - .env.local
# - .env.*.local
# - node_modules/
# - .next/
```

## Step 2: Collect Environment Variables

Before deploying, gather these values:

### From EmailJS
- [ ] Service ID: `service_xxxxx`
- [ ] Template ID: `template_xxxxx`
- [ ] Public Key: `public_key_xxxxx`

### From Google Analytics (Optional)
- [ ] Measurement ID: `G-XXXXXXXXXXXXX`

## Step 3: Deploy to Vercel

### Option A: GitHub Integration (Recommended)
1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Click "Import Git Repository"
4. Select your GitHub repo
5. Click "Import"

### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to link project and deploy
```

## Step 4: Add Environment Variables in Vercel

1. In Vercel Dashboard, select your project
2. Go to **Settings > Environment Variables**
3. Add these variables:

```
Name: NEXT_PUBLIC_EMAILJS_SERVICE_ID
Value: [Your Service ID]
Environments: Production, Preview, Development

Name: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
Value: [Your Template ID]
Environments: Production, Preview, Development

Name: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
Value: [Your Public Key]
Environments: Production, Preview, Development
```

4. Save variables
5. Redeploy from Deployments tab

## Step 5: Connect Custom Domain (Optional)

1. In Vercel Dashboard > Settings > Domains
2. Add your domain
3. Follow DNS setup instructions
4. Wait for DNS propagation

## Step 6: Verify Deployment

- [ ] Visit your Vercel URL
- [ ] Test contact form submission
- [ ] Check all navigation works
- [ ] Test on mobile
- [ ] No console errors

## Common Issues & Solutions

### "Build failed"
- Check Vercel logs
- Ensure all env vars are set
- Try redeploying

### "Contact form not working"
- Verify EmailJS credentials
- Check EmailJS dashboard
- Test locally first

### "Page shows blank"
- Check browser console
- Wait for build to complete
- Clear cache and refresh

## Important Notes

⚠️ **CRITICAL:**
- NEVER commit `.env` files
- NEVER share environment variable values
- Use Vercel's environment variables, NOT hardcoded values
- All `NEXT_PUBLIC_*` variables are public (that's normal!)

## Subsequent Deployments

After initial setup, just:
```bash
git push origin main
```

Vercel automatically:
- Detects changes
- Builds new version
- Deploys to production
- Keeps old versions for rollback

## Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **This Project Guide:** See DEPLOYMENT.md
