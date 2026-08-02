# GitHub Setup Guide - Secure Repository Configuration

## Pre-GitHub Steps (DO THESE FIRST)

### 1. Verify .gitignore is Working
```bash
# Navigate to project
cd tedxgcet

# Check if .env is ignored
git check-ignore .env
# Should output: .env

# Check if .env.local is ignored
git check-ignore .env.local
# Should output: .env.local

# View all files that WILL be committed
git status

# Should NOT show:
# - .env
# - .env.local
# - node_modules/
# - .next/
```

### 2. Remove Sensitive Files (If Already Added)
```bash
# Check if .env was ever committed
git log --all -- .env
# If it shows commits, you need to clean history

# Remove .env from Git history (if needed)
git rm --cached .env
git commit -m "Remove .env file (never should have been committed)"

# Do the same for .env.local
git rm --cached .env.local
git commit -m "Remove .env.local file"

# Force push (be careful!)
git push origin main --force
```

---

## Creating GitHub Repository

### Option A: GitHub Web Interface

1. **Create Repository**
   - Go to https://github.com/new
   - Repository name: `tedx-gcet` or `tedxgcet`
   - Description: "TEDx Geethanjali College of Engineering and Technology - Event Website"
   - Public (for portfolio) or Private (for security)
   - Initialize with README: NO (we'll push existing code)
   - Click "Create repository"

2. **Get Repository URL**
   - Copy the HTTPS URL or SSH key
   - Example: `https://github.com/yourusername/tedx-gcet.git`

### Option B: GitHub CLI
```bash
# Install GitHub CLI
# From https://cli.github.com/

# Login to GitHub
gh auth login

# Create repository
gh repo create tedx-gcet \
  --description "TEDx Geethanjali College Event Website" \
  --public \
  --source=. \
  --push \
  --remote=origin
```

---

## Push Code to GitHub

### First Time Setup
```bash
# Initialize Git (if not already done)
cd tedxgcet
git init

# Add all files (but NOT .env files - they're in .gitignore)
git add .

# Verify .env files are NOT staged
git status
# Should NOT show .env or .env.local

# Initial commit
git commit -m "Initial commit: TEDx website

- Hero section with 3D animated title
- Schedule timeline
- Contact form with email validation
- Responsive design for all devices
- Mobile hamburger navigation"

# Add remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/tedx-gcet.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Subsequent Pushes
```bash
# After making changes
git add .
git commit -m "Describe your changes here"
git push origin main
```

---

## GitHub Security Configuration

### 1. Enable Branch Protection (for main)

**In Repository:**
1. Go to Settings > Branches
2. Click "Add rule"
3. Branch name pattern: `main`
4. Check: "Require pull request reviews before merging"
5. Check: "Require status checks to pass"
6. Click "Create"

### 2. Configure Protected Secrets (Not Needed - Use Vercel Instead)

**❌ DON'T use GitHub Secrets for this project**
- We use Vercel environment variables
- GitHub Secrets are for CI/CD workflows
- Keep everything in Vercel for deployment

### 3. Enable Security Updates

1. Go to Settings > Code security and analysis
2. Enable "Dependabot alerts" ✅
3. Enable "Dependabot security updates" ✅
4. Enable "Secret scanning" ✅

### 4. Add Required Status Checks

1. Settings > Branches > Branch protection rule for main
2. Require status checks to pass:
   - (Optional) Add build checks if you have CI/CD
   - For now, just "Require branches to be up to date"

---

## What to Commit to GitHub

### ✅ COMMIT THESE:
```
✅ All source code (.tsx, .ts, .css)
✅ Configuration files (next.config.js, tailwind.config.ts, tsconfig.json)
✅ package.json (NOT node_modules/)
✅ .gitignore (the file itself)
✅ .env.example (templates without values)
✅ Documentation files (*.md)
✅ Public assets (/public folder)
✅ GitHub workflows (.github folder)
```

### ❌ NEVER COMMIT THESE:
```
❌ .env (real credentials)
❌ .env.local (local development secrets)
❌ .env.production.local (production secrets)
❌ node_modules/ (installed packages)
❌ .next/ (build artifacts)
❌ .vercel/ (deployment config)
❌ IDE files (.vscode, .idea)
❌ OS files (.DS_Store, Thumbs.db)
❌ Logs (*.log)
```

---

## Repository Structure on GitHub

After pushing, your repository should look like:
```
📁 tedx-gcet/
├── 📄 .gitignore ✅
├── 📄 .env.example ✅
├── 📄 DEPLOYMENT.md ✅
├── 📄 VERCEL_SETUP.md ✅
├── 📄 README_DEPLOYMENT.md ✅
├── 📄 GITHUB_SETUP.md ✅
├── 📄 SECURITY_AUDIT.md ✅
├── 📄 package.json ✅
├── 📄 next.config.js ✅
├── 📄 tailwind.config.ts ✅
├── 📄 tsconfig.json ✅
├── 📁 app/
│   ├── 📄 layout.tsx
│   ├── 📄 page.tsx
│   ├── 📄 globals.css
├── 📁 components/
│   ├── 📄 Navigation.tsx
│   ├── 📄 Footer.tsx
│   └── 📁 sections/
│       ├── 📄 Hero.tsx
│       ├── 📄 Schedule.tsx
│       ├── 📄 Contact.tsx
│       └── ... (other sections)
├── 📁 lib/
│   ├── 📄 data.ts
│   └── 📄 utils.ts
├── 📁 public/
│   └── (images and assets)
└── 📁 .github/
    └── (workflows if using CI/CD)
```

❌ Should NOT contain: `.env`, `.env.local`, `node_modules/`, `.next/`

---

## GitHub Actions (Optional CI/CD)

If you want automated testing and building:

### Create `.github/workflows/deploy.yml`
```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

**Setup:**
1. Create GitHub Secrets (Settings > Secrets and variables > Actions)
2. Add VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID
3. Get these from: Vercel Account Settings > Tokens

---

## Daily Workflow

### For Local Development:
```bash
# Make changes to your code

# Add changes
git add .

# Commit with clear message
git commit -m "Add new feature or fix"

# Push to GitHub
git push origin main

# Vercel automatically deploys!
```

### For Collaborators:
```bash
# Get latest code
git pull origin main

# Make changes
# ... (edit files)

# Create feature branch
git checkout -b feature/my-feature

# Push feature branch
git push origin feature/my-feature

# Create Pull Request on GitHub
# Get review
# Merge to main
# Vercel auto-deploys
```

---

## Security Reminders

### 🔐 CRITICAL - Before Every Push:
```bash
# Double-check no secrets are being pushed
git status

# Should NEVER show:
# - .env
# - .env.local
# - credentials files
# - private keys
```

### 🔒 If You Accidentally Commit Secrets:

**Immediate Actions:**
1. Revoke the exposed credentials immediately
2. Generate new credentials
3. Force push to remove from history:
   ```bash
   git rm --cached .env
   git commit -m "Remove .env"
   git push origin main --force
   ```
4. Update credentials in Vercel
5. Monitor for unauthorized access

---

## Collaboration Setup

### For Team Members:

1. **Get Repository Access**
   - Ask repo owner to add you
   - Accept GitHub invitation

2. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/tedx-gcet.git
   cd tedx-gcet
   ```

3. **Create Local .env**
   ```bash
   # Copy template
   cp .env.example .env.local
   
   # Ask for development credentials
   # Add to .env.local
   ```

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Start Development**
   ```bash
   npm run dev
   ```

---

## Troubleshooting

### Q: "Permission denied (publickey)"
```bash
# Setup SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"
# Add public key to GitHub settings
```

### Q: ".env file showing in git status"
```bash
# Verify .gitignore is correct
git status --porcelain | grep env

# Should be empty

# If not, your .gitignore might be wrong
# Verify: .env and .env.local are listed
```

### Q: "Accidentally pushed .env"
```bash
# Remove from Git history (dangerous - force push)
git rm --cached .env
git commit -m "Remove .env"
git push origin main --force

# Immediately rotate all credentials!
```

---

## GitHub Best Practices

✅ **DO:**
- Write clear commit messages
- Make small, focused commits
- Use branches for features
- Create pull requests for reviews
- Keep .env files out of Git

❌ **DON'T:**
- Commit secrets or credentials
- Force push to main (unless necessary)
- Leave secrets in commit history
- Share credentials via comments
- Use main branch for development

---

## Resources

- **GitHub Docs:** https://docs.github.com
- **Git Tutorial:** https://git-scm.com/book
- **GitHub Secrets:** https://docs.github.com/en/actions/security-guides/encrypted-secrets
- **Vercel GitHub Integration:** https://vercel.com/docs/concepts/git

---

**You're Now Ready to:**
1. ✅ Push code to GitHub securely
2. ✅ Deploy to Vercel from GitHub
3. ✅ Collaborate with team members
4. ✅ Keep secrets safe

**Next Steps:**
1. Create GitHub repository
2. Push code using commands above
3. Connect GitHub to Vercel
4. Deploy!
