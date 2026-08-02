# Shuting Zhao Homepage

Personal academic homepage for Shuting Zhao, built with Jekyll and hosted on GitHub Pages.

## Local Preview

```bash
bundle exec jekyll serve --livereload
```

Then open the local URL shown by Jekyll, usually `http://127.0.0.1:4000/zhaoshuting.github.io/`.

## Main Files

- `_pages/about.md`: homepage content
- `_config.yml`: site metadata, author profile, and GitHub Pages URL settings
- `_data/navigation.yml`: top navigation
- `assets/css/home.css`: homepage styling
- `assets/js/pub_hover_video.js`: publication hover-video behavior
- `images/`: profile images, logos, publication covers, and videos

## Build

```bash
bundle exec jekyll build
```

The generated site is written to `_site/`.
