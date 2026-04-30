---
title: About
type: landing

sections:

  # ─────────────────────────────────────
  # HERO (with profile image)
  # ─────────────────────────────────────
  - block: hero
    content:
      title: "S. Isabel Cordero"
      text: |
        Scientific support staff working at the intersection of geophysical research, field logistics, and project/program management.

        I support interdisciplinary projects from planning through field deployment and data management, with a focus on polar and geospatial research.
      primary_action:
        text: View Fieldwork
        url: /fieldwork/
      secondary_action:
        text: Contact
        url: /#contact
    design:
      columns: "2"
      background:
        image:
          filename: isabel-ksc.JPG   # ← place in /assets/media/
          filters:
            brightness: 0.6
      spacing:
        padding: ["3rem", "0", "3rem", "0"]

  # ─────────────────────────────────────
  # ABOUT / BIO
  # ─────────────────────────────────────
  - block: markdown
    content:
      title: "About Me"
      text: |
        I work in academic research environments supporting complex, interdisciplinary projects through a combination of technical, logistical, and administrative expertise.

        My background spans geophysical fieldwork, archaeology, and data systems, allowing me to move fluidly between field environments and institutional operations. I’ve supported federally funded research, international collaborations, and field deployments in remote environments including Antarctica.

        I’m particularly interested in:
        - Geospatial data workflows  
        - Field logistics and operations  
        - Research infrastructure and project management  
        - Science communication and public engagement  

  # ─────────────────────────────────────
  # PORTFOLIO-STYLE APPROACH BLOCK
  # ─────────────────────────────────────
  - block: markdown
    content:
      title: "Approach"
      text: |
        I approach research support as a systems problem—connecting people, data, and infrastructure to enable successful scientific outcomes.

        My work sits at the intersection of:
        - **Field environments** — coordinating logistics, instrumentation, and deployment  
        - **Data systems** — ensuring collection, quality control, and long-term usability  
        - **Research operations** — managing timelines, funding requirements, and collaboration structures  

        This allows me to move between on-the-ground fieldwork and institutional coordination, helping projects run smoothly from planning through execution and reporting.

  # ─────────────────────────────────────
  # SKILLS / CAPABILITIES
  # ─────────────────────────────────────
  - block: features
    content:
      title: "Core Capabilities"
      items:
        - name: Field Operations
          description: Planning, coordination, and execution of remote field deployments and logistics.
          icon: globe-alt

        - name: Project Management
          description: Budgeting, timelines, stakeholder coordination, and research program support.
          icon: clipboard-document-list

        - name: Geospatial & Data
          description: GIS workflows, data QC, and geophysical data handling.
          icon: map

        - name: Research Administration
          description: Grant support, reporting, compliance, and institutional coordination.
          icon: building-office

  # ─────────────────────────────────────
  # FIELDWORK LINK
  # ─────────────────────────────────────
  - block: markdown
    content:
      title: "Field Experience"
      text: |
        My fieldwork spans archaeological excavation, geophysical survey, and polar research support across multiple international sites.

        → [Explore full fieldwork history](/fieldwork/)

  # ─────────────────────────────────────
  # PROJECTS
  # ─────────────────────────────────────
  - block: collection
    content:
      title: "Selected Work"
      filters:
        folders:
          - project
      count: 3
    design:
      view: card
      columns: "3"

---