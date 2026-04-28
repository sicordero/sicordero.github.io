---
title: Fieldwork
summary: Archaeological and Geophysical field experience I've completed throughout my career.
type: landing
# ONLY fieldwork entries here
sections:
  - block: custom
    content:
      html: |
        {{ partial "fieldwork-map.html" . }}
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