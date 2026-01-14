# GitHub Pages Setup Instructions

Your portfolio is ready to be deployed to GitHub Pages! Follow these simple steps:

## Option 1: Automatic Deployment (Recommended)

1. **Go to your GitHub repository**
   - Visit: https://github.com/dev-judedel/my-portfolio

2. **Enable GitHub Pages**
   - Click on **Settings** tab
   - Scroll down to **Pages** in the left sidebar
   - Under **Source**, select:
     - Source: **GitHub Actions**

3. **The site will automatically deploy!**
   - The GitHub Actions workflow is already configured
   - Every time you push to this branch, your site will update
   - Your site will be live at: **https://dev-judedel.github.io/my-portfolio/**

## Option 2: Manual Branch Deployment

If you prefer to deploy from a specific branch:

1. **Go to Settings > Pages**
2. Under **Source**, select:
   - Source: **Deploy from a branch**
   - Branch: **claude/enhance-portfolio-design-yM2Te** (or main)
   - Folder: **/ (root)**
3. Click **Save**
4. Wait a few minutes for deployment
5. Your site will be live at: **https://dev-judedel.github.io/my-portfolio/**

## Viewing Your Live Site

Once deployed, your portfolio will be accessible at:
```
https://dev-judedel.github.io/my-portfolio/
```

## Updating Your Portfolio

To update your live site:
1. Make changes to your files locally
2. Commit the changes: `git add . && git commit -m "Your message"`
3. Push to GitHub: `git push`
4. GitHub Pages will automatically rebuild and deploy (usually takes 1-2 minutes)

## Custom Domain (Optional)

To use a custom domain like `yourname.com`:
1. Go to Settings > Pages
2. Under **Custom domain**, enter your domain
3. Follow GitHub's instructions to configure your DNS settings

## Troubleshooting

- **Site not loading?** Wait 2-3 minutes after enabling Pages
- **404 Error?** Make sure `index.html` is in the root directory (it is!)
- **Not updating?** Check the **Actions** tab to see deployment status

---

**Note:** The included GitHub Actions workflow will automatically deploy your site whenever you push changes to the main branch or your current feature branch.
