Folder purpose: place additional Car Dealership screenshots here.

Naming guideline:
- Name images using the pattern: car-1.jpg, car-2.jpg, car-3.jpg, ...
- Use JPG or PNG formats. Keep file sizes reasonable (<= 400 KB recommended).

How to use:
1. Upload or copy your screenshot files into this folder.
2. Open `projects.json` and locate the Car Dealership project entry.
3. Add the new image paths to the `images` array, for example:
   "images": [
     "images/car-dealership.png",
     "images/screenshot images/car-1.jpg",
     "images/screenshot images/car-2.jpg"
   ],
4. Commit and push the changes. The gallery will show the added screenshots (thumbnails appear on hover).

Notes:
- Paths contain a space (`screenshot images`). This is valid in JSON and URLs, but web servers/browsers will URL-encode spaces as `%20`. If you prefer to avoid spaces, consider renaming the folder to `screenshot-images` or `screenshots` and update `projects.json` accordingly.
- If you want, I can add example placeholder images and update `projects.json` for you.
