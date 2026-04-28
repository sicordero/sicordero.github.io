---
title: Fieldwork
summary: Archaeological and Geophysical field experience I've completed throughout my career.
type: page
design:
  sidebar: false
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">

<div id="fieldwork-map"></div>

<style>
  /* wider field of view */
  #fieldwork-map {
    width: 100%;
    height: 700px;   /* ↑ bigger vertical FOV */
    max-width: 1400px; /* ↑ wider horizontal constraint */
    margin: 0 auto;
    border-radius: 16px;
  }
</style>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="/js/fieldwork-map.js"></script>

<!-- sections:
  - block: markdown
    content:
      text: |
        [View Fieldwork Map](/fieldwork-map/)
  - block: collection
    content:
      title: Fieldwork Projects
      filters:
        folders:
          - fieldwork
    design:
      view: card
      columns: 1 -->
---