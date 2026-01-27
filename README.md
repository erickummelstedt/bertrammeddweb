# Bertram Medd - Filmmaker Portfolio

A minimal, clean portfolio website for showcasing film and cinematography work.

## 🎬 For Bertram - Content Management Guide

### Quick Start

1. **View your website locally:**
   ```bash
   npm run dev
   ```
   Then open http://localhost:5173 in your browser

2. **Add your content:**
   - Navigate to the `public/content/` folder
   - This is where all your videos and photos go!

### 📁 Folder Structure

```
public/content/
├── content.json          # Main configuration file (edit this!)
├── highlighted/          # Your featured/best work
│   ├── video-1.mp4
│   ├── thumbnail-1.jpg
│   └── ...
└── gallery/              # All other projects
    ├── video-1.mp4
    ├── thumbnail-1.jpg
    ├── series-1/         # For photo series
    │   ├── photo-1.jpg
    │   ├── photo-2.jpg
    │   └── ...
    └── ...
```

### ✏️ How to Add Content

#### 1. Edit the Site Title
Open `public/content/content.json` and change:
```json
{
  "siteTitle": "Bertram Medd",
  "siteSubtitle": "Filmmaker & Cinematographer"
}
```

#### 2. Add a Highlighted (Featured) Video

**Option A: Embedded Video (Vimeo/YouTube - Recommended)**
1. Upload your video to Vimeo or YouTube
2. Copy the video URL
3. Add entry to `content.json`:

```json
{
  "highlighted": [
    {
      "id": "highlight-1",
      "title": "My Best Project",
      "type": "video",
      "thumbnail": "https://vumbnail.com/VIMEO_ID.jpg",
      "videoUrl": "https://vimeo.com/1070776371",
      "description": "Brief description of this work"
    }
  ]
}
```

**Note:** For Vimeo, you can use `https://vumbnail.com/VIDEO_ID.jpg` for automatic thumbnails!

**Option B: Self-hosted Video**
1. Put your video file in `public/content/highlighted/`
2. Create a thumbnail image (16:9 ratio recommended)
3. Add entry to `content.json`:

```json
{
  "highlighted": [
    {
      "id": "highlight-1",
      "title": "My Best Project",
      "type": "video",
      "thumbnail": "/content/highlighted/my-thumbnail.jpg",
      "videoUrl": "/content/highlighted/my-video.mp4",
      "description": "Brief description of this work"
    }
  ]
}
```

#### 3. Add a Regular Video to Gallery

**For embedded videos (Vimeo/YouTube):**
```json
{
  "gallery": [
    {
      "id": "gallery-1",
      "title": "Project Name",
      "type": "video",
      "thumbnail": "https://vumbnail.com/VIDEO_ID.jpg",
      "videoUrl": "https://vimeo.com/123456789",
      "description": "Project description"
    }
  ]
}
```

**For self-hosted videos:**
1. Put files in `public/content/gallery/`
2. Add entry to the `gallery` array:

```json
{
  "gallery": [
    {
      "id": "gallery-1",
      "title": "Project Name",
      "type": "video",
      "thumbnail": "/content/gallery/thumbnail.jpg",
      "videoUrl": "/content/gallery/video.mp4",
      "description": "Project description"
    }
  ]
}
```

#### 4. Add a Photo Series
1. Create a folder: `public/content/gallery/series-name/`
2. Put all photos in that folder
3. Add entry:

```json
{
  "id": "series-1",
  "title": "Behind the Scenes",
  "type": "photos",
  "thumbnail": "/content/gallery/series-name/photo-1.jpg",
  "photos": [
    "/content/gallery/series-name/photo-1.jpg",
    "/content/gallery/series-name/photo-2.jpg",
    "/content/gallery/series-name/photo-3.jpg"
  ],
  "description": "Description of this photo series"
}
```

### 💡 Tips

- **Videos:** Use Vimeo or YouTube embeds for best performance (no file size limits!)
- **Video formats (self-hosted):** MP4 (H.264) works best for web
- **Vimeo thumbnails:** Use `https://vumbnail.com/VIDEO_ID.jpg` for auto thumbnails
- **Thumbnails:** Use 16:9 ratio, save as JPG
- **File names:** No spaces! Use `my-video.mp4` not `my video.mp4`
- **IDs:** Must be unique for each item (gallery-1, gallery-2, etc.)
- **Order:** Items appear in the order they're listed in content.json

### 🚀 Publishing Your Site

When you're ready to publish:
1. Make sure all your content is added and looks good locally
2. The site can be deployed to services like:
   - **Netlify** (easiest - just drag and drop after running `npm run build`)
   - **Vercel**
   - **GitHub Pages**

To create production files:
```bash
npm run build
```

This creates a `dist` folder with your website ready to deploy.

---

## 🛠️ Developer Information

Built with:
- React 18
- Vite
- Vanilla CSS (no framework needed for this simple site)

### Development
```bash
npm install    # Install dependencies
npm run dev    # Start development server
npm run build  # Build for production
npm run preview # Preview production build
```

### Features
- ✅ Video player with custom controls
- ✅ Photo gallery with keyboard navigation
- ✅ Responsive design (mobile-friendly)
- ✅ Minimal, clean aesthetic
- ✅ Easy content management via JSON
- ✅ No database required

### Design Inspiration
Clean, minimal filmmaker portfolios with focus on the work, not the interface.

