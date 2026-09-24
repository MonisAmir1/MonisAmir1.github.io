## Goal

Create a dedicated **Compliance Process Optimisation & Operational Risk Monitoring** case-study page for the fourth project card, using the uploaded PDF as the sole source for wording, order, emphasis, visuals, and placement. The page will match the first three case studies and open from the selected “View Case Study” button.

## Page and navigation

- Add `/projects/compliance-process-optimisation-operational-risk-monitoring` with unique title, description, Open Graph metadata, article type, and Twitter card metadata.
- Link the fourth project card to the new route.
- Reuse the existing sticky portfolio header, profile image, “Back to Portfolio” links, footer, colours, typography, spacing, cards, motion, and responsive behavior.
- Match the established two-column opening: project name, industry, SQL and Power BI tags on the left; clean video placeholder with play button on the right.

## Exact PDF content flow

Build these sections in this order without rewriting, adding, or removing content:

1. Executive Project Summary
2. Business Context
3. Problem Statement & Business Challenge
4. Why This Problem Matters
5. Objective
6. My Role
7. Analytical Approach
8. Key Insights
9. Strategic Recommendations
10. Expected Business Impact
11. Technical Implementations
12. Dashboard
13. Lessons Learned

Preserve the PDF’s bold and italic emphasis, lists, captions, figures, and reading-width treatment.

## Visuals and interactions

- Extract and add the PDF’s 16 embedded visuals under a dedicated fourth-case-study asset group.
- Recreate the seven-step analytical flow exactly as shown, using the established case-study flow-card style.
- Present the Analytical Approach data-source list and Power BI model together in their intended order.
- Build the four Key Insights subsections in PDF order:
  - Macro SLA Performance & Regulatory Breach Exposure
  - Pinpointing the Core Bottlenecks
  - Control Assessment Friction & PEP/Sanctions Remediation Drag
  - Operational Priority Misalignment & Escalation Friction
- Place each insight chart before its corresponding “View SQL Analysis” control.
- Add four expandable SQL controls. Each opens its matching query and output image side by side on wide screens and stacked on smaller screens.
- Present the three Strategic Recommendations as premium cards with their exact Action, Business Rationale, and Expected Outcome content. No recommendation image will be added because the PDF does not specify one in those cards.
- Build Technical Implementations with Data Architecture & SQL Engineering, Data Modeling & DAX Calculation Engine, and Executive Dashboard & Visual Storytelling. Place the provided measures image on the right of the Data Modeling card as directed.
- Show the supplied executive dashboard image in the Dashboard section with a “View Full Dashboard” button beneath it. Keep the button inactive until a destination link is provided.

## Technical details

- Use the existing `CaseSection`, `Prose`, `BulletList`, `Figure`, `SqlAnalysis`, `Button`, header, and footer patterns rather than introducing a new visual system.
- Store extracted imagery through the project asset flow and use descriptive alt text.
- Keep figures uncropped with horizontal overflow only where detailed SQL output requires it.
- Ensure the new route’s filename and route ID match TanStack Router conventions.

## Verification

- Confirm the fourth card opens the new page and both “Back to Portfolio” links return to the projects section.
- Test all four SQL expanders.
- Check desktop and mobile layouts for readable text, uncropped images, correct stacking, and no overflow or overlap.
- Confirm the route loads successfully, metadata is present, and the app has no build, browser-console, or runtime errors.
