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
        text: Download CV
        url: uploads/resume.pdf
      secondary_action:
        text: Contact
        url: /#contact
    design:
      columns: "2"
      background:
        image:
          filename: NewportHydrangea.JPG   # ← place in /assets/media/
          filters:
            brightness: 0.25
      spacing:
        padding: ["2rem", "0", "2rem", "0"]

  # ─────────────────────────────────────
  # ABOUT / BIO
  # ─────────────────────────────────────
  - block: markdown
    content:
      title: "About Me"
      text: |
        I am a native New Yorker - born and raised. Growing up with the historic and diverse tapestry of NYC shaped much of who I am today. I am so grateful for my elcectic and interdisciplinary background, all of which I can attribute to my incredible parents and wonderful family.
        
        For nearly the last deacde, I've worked in academic research environments supporting complex, interdisciplinary projects through a combination of my technical, logistical, and administrative expertise.

        My background spans geophysical fieldwork, archaeology, and event coordination, which allows me to move fluidly between administrative and scientific research environments. I’ve supported federally funded research, international collaborations, and field deployments in Antarctica.

        I’m particularly interested in:
        - Geospatial data exploration  
        - Field logistics/operations  
        - Research and project management  
        - Science communication
    design: 
      columns: '2'

  # ─────────────────────────────────────
  # PORTFOLIO-STYLE APPROACH BLOCK
  # ─────────────────────────────────────
  - block: markdown
    content:
      title: "Approach"
      text: |
        "<i>People are like gems, right? They have facets to them and some of them only get exposed within certain relationships.</i>"
        
        - Brennan Lee Mulligan
        
        There's more than one way to look at a problem. I approach research support as a systems problem—connecting people, data, and infrastructure to enable successful scientific outcomes.

        My work sits at the intersection of:
        - **Fieldwork** — coordinating logistics, instrumentation, and deployment  
        - **Data Systems** — ensuring collection, quality control, and long-term usability/archive  
        - **Research Operations** — managing timelines, funding requirements, and collaboration structures  

        My multi-faceted background allows me to move between on-the-ground fieldwork and institutional coordination, helping projects run smoothly from planning-stages through execution and reporting.

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

        - name: Science Communication
          description: Conference presentations (talks & posters), outreach events, and data visualization.
          icon: presentation-chart-line

  # ─────────────────────────────────────
  # CERTIFICATIONS
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
          - projects
      count: 3
    design:
      view: card
      columns: "3"

---