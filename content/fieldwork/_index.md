---
title: Fieldwork
summary: Archaeological and Geophysical field experience I've completed throughout my career.
type: landing
# ONLY fieldwork entries here
sections:
  - block: markdown
    content:
      title: "Field Locations"
      text: |
        <div id="fieldwork-map" style="height: 500px;"></div>
        {{ partial "fieldwork-map-data.html" . }}

  - block: collection
    content:
      title: Fieldwork Projects
      filters:
        folders:
          - fieldwork
    design:
      view: card
      columns: 3
---