# How to Add Your Content

## Step 1: Add Your Videos
1. Copy your video files (.mp4) to this folder or the `gallery` folder
2. Create thumbnail images (screenshots from your videos)
3. Name them clearly: `project-name.mp4`, `project-name-thumbnail.jpg`

## Step 2: Update content.json
Edit the `content.json` file in the parent folder to reference your files.

### For a Featured Video:
```json
{
  "highlighted": [
    {
      "id": "highlight-1",
      "title": "Your Best Work",
      "type": "video",
      "thumbnail": "/content/highlighted/your-thumbnail.jpg",
      "videoUrl": "/content/highlighted/your-video.mp4",
      "description": "Brief description"
    }
  ]
}
```

See the main README.md for full instructions!
