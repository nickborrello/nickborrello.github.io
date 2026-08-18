import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_RIGHT, TA_CENTER
import pypdf

def generate_pdf(output_path):
    # Standard Letter: 8.5 x 11 inches = 612 x 792 points
    # Printable area: 556pt width, 744pt height with 28pt left/right, 24pt top/bottom
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=28,
        rightMargin=28,
        topMargin=24,
        bottomMargin=24,
        title="Nicholas Borrello — Resume",
        author="Nicholas Borrello",
        subject="AI & Software Engineer Resume",
        creator="ReportLab PDF Engine"
    )

    styles = getSampleStyleSheet()

    # NieR / Field Terminal Design Tokens (from DESIGN.md)
    INK_DARKER = colors.HexColor("#2c2a28")      # Primary ink (nier-darker)
    INK_DARK = colors.HexColor("#4b4845")        # Secondary ink (nier-dark)
    ACCENT_RED = colors.HexColor("#8c3a2c")      # Muted machine-red accent
    LINE_DARK = colors.HexColor("#3a3836")       # Heavy header bottom rule
    RULE_LIGHT = colors.HexColor("#cfc9b0")      # Fine hairline border (nier-beige-dim)

    # Typography styles - Smallest font is strictly 10.0pt minimum
    name_style = ParagraphStyle(
        'NierName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=21,
        leading=23.5,
        alignment=TA_LEFT,
        textColor=INK_DARKER,
    )

    title_style = ParagraphStyle(
        'NierTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        alignment=TA_LEFT,
        textColor=ACCENT_RED,
    )

    contact_style = ParagraphStyle(
        'NierContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=12,
        alignment=TA_LEFT,
        textColor=INK_DARK,
    )

    section_label_style = ParagraphStyle(
        'NierSectionLabel',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.25,
        leading=12,
        textColor=INK_DARKER,
    )

    item_title_style = ParagraphStyle(
        'NierItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=12,
        textColor=INK_DARKER,
    )

    item_subtitle_style = ParagraphStyle(
        'NierItemSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=12,
        textColor=INK_DARK,
        alignment=TA_RIGHT,
    )

    bullet_style = ParagraphStyle(
        'NierBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.75,
        leading=12,
        textColor=INK_DARKER,
        leftIndent=11,
        firstLineIndent=-11,
    )

    col_title_style = ParagraphStyle(
        'NierColTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.75,
        leading=11.5,
        textColor=INK_DARKER,
    )

    col_body_style = ParagraphStyle(
        'NierColBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=12,
        textColor=INK_DARK,
    )

    story = []

    # --- HEADER ---
    contact_l1 = (
        'Durham, NC &nbsp;&bull;&nbsp; (508) 617-1586 &nbsp;&bull;&nbsp; '
        '<a href="mailto:nvborrello@gmail.com" color="#4b4845">nvborrello@gmail.com</a>'
    )
    contact_l2 = (
        '<a href="https://github.com/nickborrello" color="#4b4845">github.com/nickborrello</a> &nbsp;&bull;&nbsp; '
        '<a href="https://www.linkedin.com/in/nicholasborrello" color="#4b4845">linkedin.com/in/nicholasborrello</a> &nbsp;&bull;&nbsp; '
        '<a href="https://nickborrello.github.io" color="#4b4845">nickborrello.github.io</a>'
    )

    header_content = [
        [Paragraph("NICHOLAS BORRELLO", name_style)],
        [Paragraph("AI &amp; Software Engineer &mdash; Agentic Systems &amp; LLM Applications", title_style)],
        [Paragraph(f'{contact_l1} &nbsp;&bull;&nbsp; {contact_l2}', contact_style)]
    ]
    header_table = Table(header_content, colWidths=[556])
    header_table.setStyle(TableStyle([
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,0), 1),
        ('BOTTOMPADDING', (0,1), (-1,1), 2),
        ('BOTTOMPADDING', (0,2), (-1,2), 3),
        ('LINEBELOW', (0,2), (-1,2), 1.5, LINE_DARK),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 5))

    def make_section_header(title):
        header_table = Table(
            [[Paragraph(title.upper(), section_label_style)]],
            colWidths=[556],
            rowHeights=[13]
        )
        header_table.setStyle(TableStyle([
            ('BOTTOMPADDING', (0, 0), (-1, -1), 1),
            ('TOPPADDING', (0, 0), (-1, -1), 0),
            ('LEFTPADDING', (0, 0), (-1, -1), 0),
            ('RIGHTPADDING', (0, 0), (-1, -1), 0),
            ('LINEBELOW', (0, 0), (-1, -1), 0.75, RULE_LIGHT),
        ]))
        return header_table

    # Diamond bullet marker
    DIAMOND = '<font color="#8c3a2c" size="7">&#9670;</font>&nbsp;&nbsp;'

    # --- 1. SKILLS & CAPABILITIES ---
    story.append(make_section_header("Skills & Capabilities"))
    story.append(Spacer(1, 3))

    col1 = [
        Paragraph("<b>AI &amp; AGENTS</b>", col_title_style),
        Spacer(1, 1.5),
        Paragraph("LLM agents &bull; Model Context Protocol (MCP) &bull; Tool calling &bull; Structured outputs &bull; Agent orchestration &bull; Model routing/fallback &bull; RAG &bull; LLM evaluation &bull; VLM/OCR", col_body_style),
    ]

    col2 = [
        Paragraph("<b>LANGUAGES &amp; ML</b>", col_title_style),
        Spacer(1, 1.5),
        Paragraph("TypeScript &bull; Python &bull; Java &bull; SQL &bull; PyTorch &bull; CNNs &bull; Transformers &bull; spaCy &bull; MediaPipe &bull; Computer vision &bull; Document intelligence", col_body_style),
    ]

    col3 = [
        Paragraph("<b>FULL STACK &amp; INFRASTRUCTURE</b>", col_title_style),
        Spacer(1, 1.5),
        Paragraph("React &bull; Next.js &bull; Node.js &bull; Bun &bull; Hono &bull; PostgreSQL &bull; SQLite &bull; Supabase &bull; Docker &bull; Playwright &bull; GitHub Actions &bull; Azure DevOps", col_body_style),
    ]

    skills_table = Table([[col1, col2, col3]], colWidths=[185, 185, 186])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (0,-1), 0),
        ('RIGHTPADDING', (0,0), (0,-1), 8),
        ('LEFTPADDING', (1,0), (1,-1), 4),
        ('RIGHTPADDING', (1,0), (1,-1), 8),
        ('LEFTPADDING', (2,0), (2,-1), 4),
        ('RIGHTPADDING', (2,0), (2,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 5))

    # --- 2. EXPERIENCE ---
    story.append(make_section_header("Experience"))
    story.append(Spacer(1, 3))

    # Bay State Pet & Garden
    job1_header = Table([
        [
            Paragraph("<b>Bay State Pet &amp; Garden</b> &mdash; <i>AI &amp; Software Engineer</i>", item_title_style),
            Paragraph("Taunton, MA (Remote) &nbsp;|&nbsp; Jul 2024 &ndash; Present", item_subtitle_style)
        ]
    ], colWidths=[300, 256])
    job1_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'BOTTOM'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(job1_header)
    story.append(Spacer(1, 1))
    story.append(Paragraph(f'{DIAMOND}Develop an AI Product Intelligence system that researches external product data, resolves exact product/variant identity, and produces evidence-backed catalog changes for human review.', bullet_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph(f'{DIAMOND}Engineer the agent execution layer with 25 bounded research tools, model routing and fallback, privacy controls, tool/model budgets, deadlines, and fail-closed validation.', bullet_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph(f'{DIAMOND}Maintain the retail CMS and AI evaluation pipeline, testing new extraction and agent behavior against verified datasets before staged rollout into product onboarding and publishing workflows.', bullet_style))
    story.append(Spacer(1, 4))

    # Allegro MicroSystems
    job2_header = Table([
        [
            Paragraph("<b>Allegro MicroSystems</b> &mdash; <i>Process Engineering Intern</i>", item_title_style),
            Paragraph("Manchester, NH &nbsp;|&nbsp; Jun 2023 &ndash; Aug 2023", item_subtitle_style)
        ]
    ], colWidths=[290, 266])
    job2_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'BOTTOM'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(job2_header)
    story.append(Spacer(1, 1))
    story.append(Paragraph(f'{DIAMOND}Developed automated test and deployment services using Python, Java, and Docker to standardize driver updates across engineering equipment.', bullet_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph(f'{DIAMOND}Maintained Azure DevOps CI/CD pipelines and Node.js automation utilities, replacing manual deployment processes.', bullet_style))
    story.append(Spacer(1, 5))

    # --- 3. EDUCATION ---
    story.append(make_section_header("Education"))
    story.append(Spacer(1, 3))

    edu_table = Table([
        [
            Paragraph("<b>Worcester Polytechnic Institute</b> &mdash; M.S. Computer Science", item_title_style),
            Paragraph("Worcester, MA &nbsp;|&nbsp; Aug 2025", item_subtitle_style)
        ],
        [
            Paragraph("<b>Worcester Polytechnic Institute</b> &mdash; B.S. Computer Science, <i>With Distinction</i>; Dean's List (Fall 2022)", item_title_style),
            Paragraph("Worcester, MA &nbsp;|&nbsp; May 2024", item_subtitle_style)
        ]
    ], colWidths=[380, 176])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'BOTTOM'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 5))

    # --- 4. SELECTED PROJECTS ---
    story.append(make_section_header("Selected Projects"))
    story.append(Spacer(1, 3))

    # 1. Resumancer AI (Oct 2025)
    proj1_header = Table([
        [
            Paragraph("<b>Resumancer AI</b> &mdash; <i>Agentic Career Workspace</i>", item_title_style),
            Paragraph("Oct 2025 &ndash; Present &nbsp;|&nbsp; Next.js, TypeScript, Vercel AI SDK, Supabase", item_subtitle_style)
        ]
    ], colWidths=[260, 296])
    proj1_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'BOTTOM'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(proj1_header)
    story.append(Spacer(1, 1))
    story.append(Paragraph(f'{DIAMOND}Built a career workspace comparing job requirements with a Master CV, proposing evidence-backed changes with reviewable diffs instead of unconstrained rewrites.', bullet_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph(f'{DIAMOND}Added ATS compatibility checks, model fallback, and PDF export so verified career data moves from job analysis to an application-ready resume.', bullet_style))
    story.append(Spacer(1, 3.5))

    # 2. ShopSite MCP Server (Jan 2026)
    proj2_header = Table([
        [
            Paragraph("<b>ShopSite MCP Server</b> &mdash; <i>E-Commerce Tool Integration</i>", item_title_style),
            Paragraph("Jan 2026 &nbsp;|&nbsp; TypeScript, Model Context Protocol, Zod, Node.js", item_subtitle_style)
        ]
    ], colWidths=[270, 286])
    proj2_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'BOTTOM'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(proj2_header)
    story.append(Spacer(1, 1))
    story.append(Paragraph(f'{DIAMOND}Built an MCP server that lets AI agents retrieve orders, search products, and manage inventory in ShopSite without interacting directly with legacy APIs.', bullet_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph(f'{DIAMOND}Wrapped XML/CGI requests, HMAC-SHA1 authentication, and legacy response formats behind typed, validated tools designed for safe LLM use.', bullet_style))
    story.append(Spacer(1, 3.5))

    # 3. ASL Gesture Recognition (Jan 2025 - May 2025)
    proj3_header = Table([
        [
            Paragraph("<b>American Sign Language Gesture Recognition</b>", item_title_style),
            Paragraph("Jan 2025 &ndash; May 2025 &nbsp;|&nbsp; Python, PyTorch, ResNet34, MediaPipe", item_subtitle_style)
        ]
    ], colWidths=[240, 316])
    proj3_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'BOTTOM'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(proj3_header)
    story.append(Spacer(1, 1))
    story.append(Paragraph(f'{DIAMOND}Trained CNN &amp; Transformer models to recognize 100+ ASL gestures using ResNet34 and MediaPipe landmark sequences.', bullet_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph(f'{DIAMOND}Engineered temporal sequence extraction pipelines and parallelized data preprocessing using Python multiprocessing.', bullet_style))
    story.append(Spacer(1, 3.5))

    # 4. NEVI Search Tool (Aug 2022 - Dec 2022)
    proj4_header = Table([
        [
            Paragraph("<b>NEVI Search Tool</b> &mdash; <i>Policy Document Intelligence</i>", item_title_style),
            Paragraph("Aug 2022 &ndash; Dec 2022 &nbsp;|&nbsp; Python, spaCy, PyMuPDF, PyQt6", item_subtitle_style)
        ]
    ], colWidths=[270, 286])
    proj4_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'BOTTOM'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(proj4_header)
    story.append(Spacer(1, 1))
    story.append(Paragraph(f'{DIAMOND}Built an NLP-assisted document search tool for locating policy evidence across lengthy state NEVI plans using spaCy and keyword/fuzzy matching.', bullet_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph(f'{DIAMOND}Implemented exact keyword search, fuzzy matching, configurable term groups, and spaCy preprocessing to speed review of lengthy state NEVI plans.', bullet_style))

    # Build document
    doc.build(story)

if __name__ == '__main__':
    os.makedirs("public", exist_ok=True)
    out_pdf = "public/resume.pdf"
    generate_pdf(out_pdf)
    
    # Verify page count
    reader = pypdf.PdfReader(out_pdf)
    print(f"Generated {out_pdf} with {len(reader.pages)} page(s)")
    assert len(reader.pages) == 1, f"Expected 1 page, got {len(reader.pages)}"
