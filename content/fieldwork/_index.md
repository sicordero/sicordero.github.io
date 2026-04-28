---
title: Fieldwork
summary: Archaeological and Geophysical field experience I've completed throughout my career.
type: landing
# ONLY fieldwork entries here
sections:
  - block: markdown
    content:
      text: |
        <div id="fieldwork-map" style="height:600px;"></div>
        {{ partial "fieldwork-scripts.html" . }}
  - block: collection
    content:
      title: Fieldwork Projects
      filters:
        folders:
          - fieldwork
    design:
      view: card
      columns: 1
---