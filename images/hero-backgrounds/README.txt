HERO BACKGROUND IMAGE SETUP
============================

Folder: images/hero-backgrounds/

Instructions:
1. Upload your PNG image to this folder
2. Name it: hero-bg.png (or your preferred name)
3. Update style.css line ~111 with your filename:

   background: linear-gradient(135deg, rgba(248,250,252,0.85) 0%, rgba(232,238,247,0.85) 100%), url('images/hero-backgrounds/YOUR-IMAGE-NAME.png');
   background-size: cover;
   background-position: center;
   background-attachment: fixed;

Example if you name it "hero-bg.png":
   background: linear-gradient(135deg, rgba(248,250,252,0.85) 0%, rgba(232,238,247,0.85) 100%), url('images/hero-backgrounds/hero-bg.png');

The gradient overlay ensures text remains readable over any background image.

Supported formats: .png, .jpg, .jpeg, .webp, .gif
Recommended size: 1400x900px or larger
File size: Keep under 500KB for fast loading
