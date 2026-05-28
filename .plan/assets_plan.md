# Assets Plan — Cloudinary Strategy

## Why Cloudinary?

- Automatic image optimization (WebP, AVIF, responsive sizes)
- Built-in CDN with global edge caching
- Free tier covers portfolio needs (25GB storage, 25GB bandwidth)
- Transforms on-the-fly via URL parameters (no manual resizing)

## File types to host

| Asset | Location | Notes |
|-------|----------|-------|
| Project screenshots / thumbnails | Cloudinary | Replace null `image` fields in data.js |
| Hero profile image | Cloudinary | Replace the code-2 placeholder |
| Blog / case study images | Cloudinary | Future content |
| Resume PDF | Cloudinary or GitHub Assets | GitHub is fine for now |

## Implementation Plan

### 1. Upload to Cloudinary

- Create a free account at cloudinary.com
- Upload images via the Media Library dashboard (drag & drop)
- Or use the unsigned upload preset for direct browser uploads

### 2. Get the URL

After uploading, Cloudinary gives you a URL like:

```
https://res.cloudinary.com/<cloud_name>/image/upload/v123456/project-thumbnail.png
```

### 3. Use in data.js

```js
{
  title: 'ElimuSight',
  image: 'https://res.cloudinary.com/<cloud_name>/image/upload/v123456/elimu-sight.png',
  // ...
}
```

### 4. Optimize with URL parameters

```js
// Resize to 600px width, auto format, auto quality
image: 'https://res.cloudinary.com/<cloud_name>/image/upload/w_600,f_auto,q_auto/v123456/elimu-sight.png'
```

### 5. Update the hero image (optional)

In `index.html`, replace the code-2 placeholder:

```html
<img src="https://res.cloudinary.com/<cloud_name>/image/upload/w_400,f_auto,q_auto/v123456/profile.jpg"
     alt="Elaine Muhombe" class="hero-profile-img" />
```

## Security Notes

- Never commit Cloudinary API secrets (api_secret) to the repo
- Use unsigned upload presets for client-side uploads only
- Set `f_auto` / `q_auto` for automatic format & quality optimization
