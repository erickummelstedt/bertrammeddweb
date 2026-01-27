# Quick Start Guide for Bertram

## What You Have Now

A clean, minimal portfolio website is ready! It's currently empty (showing just the title), but it's easy to add your content.

## To View the Site

1. Open Terminal
2. Navigate to the project folder:
   ```bash
   cd /Users/ekummelstedt/le_code_base/bertrammeddweb
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser

## Adding Your First Video

### Step 1: Prepare Your Files
You need:
- Your video file (MP4 format works best)
- A thumbnail image (take a screenshot from your video)

### Step 2: Copy Files
1. Open Finder
2. Go to: `bertrammeddweb/public/content/highlighted/`
3. Copy your files there
4. Rename them simply, like:
   - `best-project.mp4`
   - `best-project-thumb.jpg`

### Step 3: Edit content.json
1. Open `public/content/content.json` in any text editor
2. Replace the empty arrays with your content:

```json
{
  "siteTitle": "Bertram Medd",
  "siteSubtitle": "Filmmaker & Cinematographer",
  "highlighted": [
    {
      "id": "featured-1",
      "title": "My Featured Project",
      "type": "video",
      "thumbnail": "/content/highlighted/best-project-thumb.jpg",
      "videoUrl": "/content/highlighted/best-project.mp4",
      "description": "Description of this project"
    }
  ],
  "gallery": []
}
```

### Step 4: Save and Refresh
Save the file, and refresh your browser. Your video should appear!

## Adding More Videos

For additional projects, add to the `gallery` array:

```json
{
  "gallery": [
    {
      "id": "project-1",
      "title": "Another Project",
      "type": "video",
      "thumbnail": "/content/gallery/project-thumb.jpg",
      "videoUrl": "/content/gallery/project.mp4",
      "description": "Description"
    },
    {
      "id": "project-2",
      "title": "Yet Another Project",
      "type": "video",
      "thumbnail": "/content/gallery/project2-thumb.jpg",
      "videoUrl": "/content/gallery/project2.mp4",
      "description": "Description"
    }
  ]
}
```

Remember to put those files in `public/content/gallery/`!

## Adding a Photo Series

1. Create a folder: `public/content/gallery/my-series/`
2. Put all photos in that folder
3. Add to content.json:

```json
{
  "id": "series-1",
  "title": "Behind the Scenes",
  "type": "photos",
  "thumbnail": "/content/gallery/my-series/photo-1.jpg",
  "photos": [
    "/content/gallery/my-series/photo-1.jpg",
    "/content/gallery/my-series/photo-2.jpg",
    "/content/gallery/my-series/photo-3.jpg"
  ],
  "description": "Photo series description"
}
```

## Important Tips

✅ **DO:**
- Use simple file names: `my-project.mp4`
- Use MP4 for videos
- Use JPG for images
- Make thumbnails 16:9 ratio (1920x1080 or 1280x720)

❌ **DON'T:**
- Use spaces in file names: `my project.mp4` ❌
- Forget the leading `/` in paths: `/content/...`
- Forget commas between items in the arrays

## Need Help?

Check the main README.md for more detailed instructions!

## Design Philosophy

The site is designed to be minimal and let your work speak for itself:
- Black background
- Clean typography
- Large, prominent videos
- Simple navigation
- No distractions

Just like the examples you liked (danshortwild.com, dannycooke.co.uk, steve-won.com)!
