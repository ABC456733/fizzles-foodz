# Fizzles Foodz - Deployment Guide

## 🚀 Quick Start: Deploy in 2 Minutes

### **Step 1: Login to Vercel**
Go to [vercel.com](https://vercel.com) and sign in with GitHub

### **Step 2: Create New Project**
- Click "New Project"
- Search for `fizzles-foodz`
- Select the repository
- Click "Import"

### **Step 3: Configure**
- Framework: Next.js (auto-detected)
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### **Step 4: Environment Variables**
Add these in Vercel dashboard:
```
NEXT_PUBLIC_RESTAURANT_NAME=Fizzles Foodz
NEXT_PUBLIC_RESTAURANT_PHONE=024 299 2579
NEXT_PUBLIC_GOOGLE_RATING=4.4
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/fizzlesfoodz
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/233242992579
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/fizzlesfoodz
```

### **Step 5: Deploy**
Click "Deploy" and wait 2-3 minutes

✅ **Your website is live!** 🎉

---

## 🌐 Custom Domain Setup

### **Add Custom Domain in Vercel**
1. Go to Project Settings
2. Click "Domains"
3. Enter your domain (e.g., `fizzlesfoodz.com`)
4. Add DNS records to your domain provider
5. Verify and activate

---

## 📊 Monitor Performance

### **In Vercel Dashboard:**
- Analytics
- Web Vitals
- Deployment History
- Build Logs
- Error Tracking

---

## 🔄 Auto-Deploy

**Already Enabled!** 
Every push to `main` branch automatically deploys your website.

### **How it works:**
1. Make changes locally
2. Commit & push to GitHub
3. Vercel automatically builds and deploys
4. Website updates in ~1 minute

---

## 🛠️ Troubleshooting

### **Build Failed**
- Check build logs in Vercel dashboard
- Ensure all dependencies are installed
- Run `npm run build` locally to test

### **Environment Variables Not Working**
- Make sure variable names start with `NEXT_PUBLIC_`
- Redeploy after adding variables
- Check `.env.local` locally

### **Website Not Loading**
- Clear browser cache
- Check network tab in browser DevTools
- Review error logs in Vercel

---

## 📱 Mobile Preview

1. Visit your Vercel deployment URL on mobile
2. Share URL with others to preview
3. Test all sections and interactions

---

## 🎯 Post-Deployment Checklist

- [ ] Website loads on all devices
- [ ] All animations work smoothly
- [ ] Images are optimized
- [ ] Contact links work (phone, WhatsApp)
- [ ] Social media links work
- [ ] Menu items display correctly
- [ ] Testimonials carousel works
- [ ] Gallery lightbox works
- [ ] Footer links work
- [ ] No console errors
- [ ] Lighthouse score 90+

---

## 📈 Analytics Setup (Optional)

### **Google Analytics**
1. Create account at [google.com/analytics](https://google.com/analytics)
2. Get your Measurement ID (G-...)
3. Add to `.env.local`: `NEXT_PUBLIC_GA_ID=G-...`
4. Redeploy

---

## 🔐 Security Headers

Already configured in `next.config.js`:
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

---

## 💾 Backup & Versioning

- All changes tracked in Git
- Automatic version history in GitHub
- Vercel keeps deployment history
- Automatic rollback available

---

## 📞 Support

**Need Help?**
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- GitHub Issues: Create issue in repository

---

**Deployed with ❤️ using Vercel**
