# Platform Icons

Place the following icon images in this directory:

## Required Images:

1. **codeforces.png** - Codeforces logo
   - Original: https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png
   - You can download from: https://iconscout.com/ or use the original URL

2. **codechef.png** - CodeChef logo
   - Original: https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg
   - You can download from: https://simpleicons.org/ or convert SVG to PNG

3. **leetcode.png** - LeetCode logo
   - Original: https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png
   - You can download from LeetCode's website

4. **vjudge.png** - VJudge logo ⚠️ (Currently broken - needs replacement)
   - The original Facebook CDN URL is no longer accessible (403 error)
   - Suggested: Download from https://vjudge.net/ or create/find an alternative

5. **atcoder.png** - AtCoder logo
   - Original: https://img.atcoder.jp/assets/atcoder.png
   - You can download from: https://img.atcoder.jp/assets/atcoder.png

6. **toph.png** - Toph logo
   - Original: https://toph.co/images/logo.png
   - You can download from: https://toph.co/images/logo.png

7. **beecrowd.png** - Beecrowd logo ⚠️ (Currently broken - needs replacement)
   - The original URL returns 404 error
   - Suggested: Contact Beecrowd for official logo or find an alternative source

## Status:

✅ **Downloaded:**
- atcoder.png
- codechef.svg
- codeforces.png
- leetcode.png
- toph.png

⚠️ **Missing (need to be added):**
- vjudge.png
- beecrowd.png

## Quick Download (if you have the URLs):

You can use this PowerShell command to download images:
```powershell
# Example (modify URLs as needed):
Invoke-WebRequest -Uri "https://img.atcoder.jp/assets/atcoder.png" -OutFile "atcoder.png"
```

## For Missing Images (VJudge & Beecrowd):

Since the original URLs are broken, you have these options:

### Option 1: Find Alternative Sources
- **VJudge**: Visit https://vjudge.net/ and download the logo from their website (inspect element or contact them)
- **Beecrowd**: Visit https://judge.beecrowd.com/ and download the logo, or contact them for official assets

### Option 2: Create Placeholder Images
Create simple PNG files (256x256px) with:
- Platform name as text
- Background color matching your theme (e.g., #0A192F or transparent)
- Use any image editor (Paint, Photoshop, GIMP, etc.)

### Option 3: Use Fallback (Temporary)
The Next.js Image component will handle missing images, but icons won't display until files are added.

## Image Requirements:

- Format: PNG or SVG (PNG recommended for compatibility)
- Size: Recommended 256x256px or higher for good quality
- Background: Transparent preferred, or solid color matching your theme
