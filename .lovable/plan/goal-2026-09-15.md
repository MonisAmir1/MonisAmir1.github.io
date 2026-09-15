## Goal

Create a dedicated **Product Adoption & Customer Retention** case-study page for the third project card, using the uploaded PDF as the sole source for wording, order, emphasis, and visual placement. The page will match the first two case studies and link from the selected “View Case Study” button.

## Page and navigation

- Add `/projects/product-adoption-customer-retention` with unique title, description, Open Graph metadata, and article type.
- Add that route to the third project card so its button becomes active.
- Reuse the existing sticky portfolio header, profile image, “Back to Portfolio” links, footer, colours, typography, spacing, cards, motion, and responsive layout.
- Match the established two-column opening: project name/industry/Databricks tag on the left and the existing clean video placeholder on the right.

## Exact PDF content flow

Build these sections in this order without rewriting or adding content:

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

Preserve the PDF’s bold and italic emphasis, lists, figures, captions, and reading-width treatment.

## Visuals and interactions

- Extract and add all relevant PDF visuals under a dedicated third-case-study asset group: Bronze/Silver/Gold data views, funnel and behavioural charts, segment charts, retention visuals, SQL queries/results, analytical datasets, and dashboard.
- Present the three Medallion Architecture visuals side by side on wider screens and stack them cleanly on smaller screens.
- Recreate the seven-step analytical flow exactly as shown.
- Build the Key Insights subsections in PDF order: Adoption Funnel, Post-Activation Friction, Adoption Vs Early Meaningful Usage, Adoption by Segment, and Adoption ≠ Retention / Sustained Usage.
- Add “View SQL Analysis” expandable controls at each location specified by the PDF. Support both two-image query/output pairs and the single-image segment query while retaining smooth opening and responsive stacking.
- Present the four Strategic Recommendations as premium cards with their exact Action, Business Rationale, and Expected Outcome content.
- Build Technical Implementations with Data Generation & Data Quality, Medallion Architecture & Data Transformation, Analytical Layer with its image, and Dashboard Development & Visualisation.
- Show the provided dashboard image in its own Dashboard section with the PDF-specified “View Full Dashboard” button beneath it; leave the destination inactive until a link is supplied.

## Verification

- Verify the new route loads from the third project card and all back-navigation works.
- Test every expandable SQL control.
- Check desktop and mobile layouts for readable text, uncropped images, correct stacking, and no overflow.
- Confirm the app builds cleanly and the new route has no browser console or runtime errors.
