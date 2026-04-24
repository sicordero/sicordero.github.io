---
title: Fieldwork
summary: Archaeological and Geophysical field experience I've completed throughout my career.
type: landing
# ONLY fieldwork entries here
sections:
  - block: html
    content:
      title: "Field Locations"
      text: |
        <div id="fieldwork-map" style="height: 500px;"></div>
        {{< fieldwork-map-data >}}

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