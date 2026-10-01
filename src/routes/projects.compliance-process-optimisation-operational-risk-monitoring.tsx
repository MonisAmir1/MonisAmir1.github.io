import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaseSection, Prose, BulletList, Figure, B } from "@/components/portfolio/case-study/CaseSection";
import { SqlAnalysis } from "@/components/portfolio/case-study/SqlAnalysis";
import { Footer } from "@/components/portfolio/Footer";
import profileImage from "@/assets/profile-navbar.png.asset.json";
import dataSources from "@/assets/case4/data-sources.png.asset.json";
import dataModel from "@/assets/case4/data-model.png.asset.json";
import slaBreachChart from "@/assets/case4/sla-breach-chart.png.asset.json";
import slaBreachQuery from "@/assets/case4/sla-breach-query.png.asset.json";
import slaBreachOutput from "@/assets/case4/sla-breach-output.png.asset.json";
import workflowDurationChart from "@/assets/case4/workflow-duration-chart.png.asset.json";
import workflowDurationQuery from "@/assets/case4/workflow-duration-query.png.asset.json";
import workflowDurationOutput from "@/assets/case4/workflow-duration-output.png.asset.json";
import controlAssessmentChart from "@/assets/case4/control-assessment-chart.png.asset.json";
import controlAssessmentQuery from "@/assets/case4/control-assessment-query.png.asset.json";
import controlAssessmentOutput from "@/assets/case4/control-assessment-output.png.asset.json";
import priorityEscalationChart from "@/assets/case4/priority-escalation-chart.png.asset.json";
import priorityEscalationQuery from "@/assets/case4/priority-escalation-query.png.asset.json";
import priorityEscalationOutput from "@/assets/case4/priority-escalation-output.png.asset.json";
import daxMeasures from "@/assets/case4/dax-measures.png.asset.json";
import executiveDashboard from "@/assets/case4/executive-dashboard.png.asset.json";

const TITLE = "Compliance Process Optimisation & Operational Risk Monitoring";
const DESCRIPTION = "Compliance and operational risk case study: using SQL and Power BI to diagnose workflow bottlenecks, SLA breach exposure, and remediation priorities across a fictional Luxembourg AIFM.";

export const Route = createFileRoute("/projects/compliance-process-optimisation-operational-risk-monitoring")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Muhammad Monis` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: `${TITLE} — Compliance Case Study` },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudyPage,
});

const flowSteps = [
  "Data Staging & Metric Engineering",
  "SLA Breach & Risk Diagnosis",
  "Workflow Bottleneck & Backlog Profiling",
  "Control Check & Remediation",
  "Escalation & Governance Audit",
  "Executive Dashboard Architecture",
  "Strategic Remediation Roadmap",
];

const recommendations = [
  {
    n: "01",
    title: "Automate First-Line PEP & Sanctions Screening & Streamline Analyst Review",
    action: "Deploy fuzzy-logic screening rules and automated pre-clearing protocols for low-confidence PEP & Sanctions false-positive matches. Restructure the Analyst Review stage by introducing standardized document triage checklists and auto-populating investor risk profiles prior to analyst assignment.",
    rationale: "Analyst Review represents the firm's primary operational bottleneck, absorbing 48.59% of total workflow hours and trapping 74.6% of active WIP. Furthermore, PEP & Sanctions remediation creates the longest delay, taking up to 3.05 days per issue. Pre-clearing false positives and automating document staging directly targets the primary drivers of queue congestion.",
    outcomes: [
      "Reduce PEP & Sanctions exception remediation cycle times from 3.05 days to under 24 hours.",
      "Decrease active WIP accumulation trapped within Analyst Review from 74.6% to under 45%.",
      "Accelerate overall investor onboarding turnaround latency across Compliance and Investor Services.",
    ],
  },
  {
    n: "02",
    title: "Enforce Priority Governance & System-Driven Escalation Protocols",
    action: "Implement system-enforced priority tagging rules in the workflow platform to restrict manual \"Urgent\" overrides on Low-Risk investor cases. Require team lead approval for priority reclassifications and establish automated routing protocols for genuine escalations.",
    rationale: "The analysis revealed that tagging Low-Risk cases as \"Urgent\" artificially spikes their escalation rate from 0.0% to 29.9%, flooding escalation queues and driving average dwell time to 47.46 hours per event. Eliminating priority misuse ensures senior compliance capacity is reserved exclusively for high-risk files.",
    outcomes: [
      "Eliminate artificial escalation spikes on Low-Risk investor onboarding files.",
      "Reduce average escalation queue dwell time from 47.46 hours down to under 12 hours.",
      "Restore operational throughput and senior officer capacity utilization across complex risk tiers.",
    ],
  },
  {
    n: "03",
    title: "Establish a Dedicated Taskforce for Regulatory Tail-Risk Remediation",
    action: "Reallocate specialized compliance resources to form a dedicated remediation taskforce tasked specifically with clearing severe regulatory overdue cases in Compliance (2.62% breach rate) and Investor Services (2.21% breach rate).",
    rationale: "While overall SLA breach rates appear low, overdue regulatory cases experience extreme tail-risk delays averaging 19.3 to 30.2 days past deadline. Because regulatory non-compliance presents direct exposure to CSSF supervisory penalties and reputational risk, isolating these cases into a dedicated remediation workflow ensures immediate risk containment.",
    outcomes: [
      "Eliminate extreme regulatory tail-risk delays exceeding 19–30 days overdue.",
      "Lower regulatory SLA breach rates in Compliance and Investor Services to under 1.0%.",
      "Safeguard ABC Fund's regulatory standing and license-to-operate.",
    ],
  },
];

function Insight({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="border-t border-border pt-12 first:border-t-0 first:pt-0"><h3 className="text-2xl text-foreground md:text-[26px]">{title}</h3><div className="mt-4">{children}</div></div>;
}

function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3"><img src={profileImage.url} alt="Monis profile" className="h-9 w-9 rounded-full border border-border bg-card object-cover" /><span className="text-sm font-semibold tracking-tight text-foreground">Monis Portfolio</span></Link>
          <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><ArrowLeft className="h-4 w-4" />Back to Portfolio</Link>
        </nav>
      </header>

      <main>
        <section className="container-page py-14 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="fade-up"><p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Compliance <span className="mx-1.5 text-border">|</span> Regulatory <span className="mx-1.5 text-border">|</span> Risk</p><h1 className="mt-4 text-4xl leading-[1.1] text-foreground md:text-5xl" style={{ fontFamily: "'Garet', Inter, sans-serif" }}>{TITLE}</h1><div className="mt-7 flex flex-wrap gap-2"><span className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground">SQL</span><span className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground">Power BI</span></div></div>
            <div className="card-surface overflow-hidden !p-0"><div className="grid aspect-video w-full place-items-center bg-surface"><div className="flex flex-col items-center gap-3 px-6 text-center"><PlayCircle className="h-12 w-12 text-primary" /><p className="text-sm font-medium text-foreground">Project walkthrough video</p><p className="text-xs text-muted-foreground">Coming soon</p></div></div></div>
          </div>
        </section>

        <CaseSection title="Executive Project Summary" reading><Prose>
          <p>ABC Fund, a fictional Luxembourg-based Alternative Investment Fund Manager (AIFM) modeled on CSSF regulations (for project demonstration purposes), manages European investment vehicles across <B>Investor Services, Fund Administration, Operations, and Compliance</B>. As investor onboarding volumes and regulatory oversight grew, management sought to evaluate <B>case processing lifecycles, identify operational bottlenecks, and eliminate SLA breach risks</B>. The objective was to establish an end-to-end operational analytics framework to diagnose workflow friction, identify operational-risk exposure, and support evidence-based compliance governance.</p>
          <p>Using SQL and Power BI, I analyzed synthetic operational records covering 18,000 compliance cases, stage-by-stage workflow histories, and 23,478 control assessments. The analysis showed that aggregate breach rates were relatively low. 2.19% for internal SLA breaches and 1.89% for simulated required-deadline breaches, but overdue cases displayed materially longer delays across selected risk tiers and business units. Compliance recorded the highest simulated required-deadline breach rate at 2.62%, followed by Investor Services at 2.21%. Analyst Review accounted for 48.59% of total workflow hours and contained 74.6% of active WIP cases. PEP and sanctions exceptions showed the longest remediation durations, reaching 3.05 days for high-risk exception records. Low-risk cases marked "Urgent" also showed a 29.9% escalation rate, compared with 0.0% for low-risk cases marked "Standard", this pattern was consistent with potential priority-governance issues requiring further operational review.</p>
          <p>Based on these findings, I formulated targeted recommendations focused on controlled first-line screening triage, workflow-priority governance, and a time-bound remediation process for the most overdue cases. These recommendations are proposed interventions, not implemented outcomes. Their effectiveness would require controlled testing, compliance approval, monitoring, and post-implementation validation. This project demonstrates how SQL-based data preparation and operational analytics can translate synthetic compliance records into actionable, evidence-based recommendations.</p>
        </Prose></CaseSection>

        <CaseSection title="Business Context" reading><Prose><p><B>ABC Fund</B> is a fictional Luxembourg-based Fund Management Company and Alternative <B>Investment Fund Manager</B> created for project demonstration purposes. The case study is informed by publicly available Luxembourg regulatory materials and models a hypothetical CSSF-regulated fund-services environment. It focuses on investor due diligence, AML/CFT monitoring, and compliance workflow governance across four simulated operational units: <B>Investor Services</B>, <B>Fund Administration</B>, <B>Operations</B>, and <B>Compliance</B>.</p></Prose></CaseSection>

        <CaseSection title="Problem Statement & Business Challenge" reading><Prose><p>At ABC Fund, the compliance and operations teams faced <B>growing friction in processing investor due diligence, KYC/CDD reviews, and PEP/Sanctions screenings</B>. As case volumes scaled across four business units, leadership observed a <B>concerning rise in SLA breach rates and extended turnaround times</B>. However, without a dedicated, integrated analytics framework, management lacked clear visibility into where bottlenecks were forming, why cases were missing target dates, and how severe the regulatory exposure truly was.</p></Prose></CaseSection>

        <CaseSection title="Why This Problem Matters" reading><Prose><p>Within the hypothetical CSSF-regulated operating environment used in this case study, compliance is treated as a core license-to-operate consideration. Unaddressed SLA breaches and workflow bottlenecks can increase supervisory exposure, weaken audit readiness, and create reputational risk if overdue cases are not resolved within required timelines. Operationally, backlog delays may slow investor onboarding and disrupt compliance reviews across European investment vehicles. Identifying and addressing workflow friction can therefore support regulatory readiness, strengthen operational-risk management, and maintain service quality without compromising compliance standards.</p></Prose></CaseSection>

        <CaseSection title="Objective" reading><p className="mb-6 text-base text-muted-foreground md:text-[17px]">The objective of this analysis was to:</p><BulletList items={[<>Diagnose the root causes behind mounting SLA breaches and processing latency across compliance, investor due diligence, and regulatory reporting workflows.</>, <>Assess workflow throughput, control check efficacy, and escalation dynamics across operational units and investor risk tiers.</>, <>Formulate evidence-based operational recommendations and a phased remediation roadmap to clear backlogs, optimize capacity, and safeguard regulatory compliance.</>]} /></CaseSection>

        <CaseSection title="My Role" reading><p className="mb-6 text-base text-muted-foreground md:text-[17px]">As the BI/Data Analyst, I was responsible for:</p><BulletList items={[<>Designing the SQL data staging layer to deduplicate raw compliance logs, standardize operational data, and pre-calculate key SLA metrics.</>, <>Conducting deep-dive exploratory data analysis in SQL to diagnose stage bottlenecks, backlog aging, control check failures, and regulatory SLA breach drivers.</>, <>Building an interactive executive Power BI dashboard using a Star Schema model and explicit DAX measures to deliver visibility into workflow throughput and risk hot-spots.</>, <>Developing strategic operational recommendations and a phased remediation roadmap to clear backlogs, optimize capacity, and maintain regulatory compliance.</>]} /></CaseSection>

        <CaseSection title="Analytical Approach">
          <div className="mx-auto max-w-[850px]"><h3 className="text-lg font-semibold text-foreground">Data available</h3><BulletList items={[<>Cases Workflow and Compliance</>, <>Control and Risk Assessments</>, <>Business Calendar</>]} /><h3 className="mt-10 text-lg font-semibold text-foreground">Data Model</h3></div>
          <div className="mx-auto mt-6 max-w-[920px] space-y-6"><Figure src={dataSources.url} alt="SQL views used in the compliance analysis" /><Figure src={dataModel.url} alt="Power BI star schema for compliance operations" /></div>
          <div className="mx-auto mt-10 max-w-[850px]"><Prose><p>The analysis used historical data spanning from 1 January 2023 to 31 March 2026 to evaluate compliance performance and operational efficiency across ABC Fund. I analyzed transactional logs covering case lifecycles, stage-by-stage workflow histories, control assessments, and organizational dimensions. Rather than relying on superficial operational averages, I established a structured, data-driven framework that progressed from SQL data staging and exploratory query analysis to Star Schema data modeling in Power BI. This pipeline transformed raw operational activity into actionable business intelligence, systematically isolating stage bottlenecks, control check failures, and regulatory SLA breach hot-spots across our four business units.</p></Prose></div>
          <div className="mx-auto mt-12 flex max-w-md flex-col items-center">{flowSteps.map((step, i) => <div key={step} className="flex w-full flex-col items-center"><div className={`w-full rounded-xl border px-5 py-3.5 text-center text-sm font-medium shadow-soft ${i === 0 || i === flowSteps.length - 1 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground"}`}>{step}</div>{i < flowSteps.length - 1 && <span className="my-1 text-lg leading-none text-primary">↓</span>}</div>)}</div>
        </CaseSection>

        <CaseSection title="Key Insights"><div className="space-y-12">
          <Insight title="Macro SLA Performance & Regulatory Breach Exposure"><Prose><p>An evaluation across all 18,000 cases revealed that while aggregate breach rates appear low at first glance, standing at <B>2.19%</B> for <B>Internal SLAs</B> and <B>1.89%</B> for <B>Regulatory SLAs</B>, the true operational risk lies in the severe tail-risk delay of overdue cases. <B>Compliance</B> registered the highest regulatory breach rate at <B>2.62%</B>, followed by <B>Investor Services</B> at <B>2.21%</B>. More critically, when cases breach regulatory deadlines, they remain overdue by an average of <B>19.3 to 30.2 days</B> across risk tiers, exposing ABC Fund to significant scrutiny and operational friction during investor onboarding. This systemic overhang confirmed that SLA breaches are not random anomalies, but stem from deep structural delays within the core operational pipeline.</p></Prose><div className="mt-8"><Figure src={slaBreachChart.url} alt="SLA breach rates by business unit" /></div><SqlAnalysis query={slaBreachQuery.url} output={slaBreachOutput.url} /></Insight>
          <Insight title="Pinpointing the Core Bottlenecks"><Prose><p>With macro SLA breach patterns established, a granular stage-by-stage lifecycle breakdown was conducted across all five workflow stages (Submitted, Screening, Analyst Review, Escalated, and Closed) to pinpoint where operational inertia originates. The findings revealed a massive structural congestion. While preliminary screening and intake move rapidly, the <B>Analyst Review</B> stage <B>absorbs 520,010 total workflow hours, representing 48.59% of total operational time firm-wide</B>. Consequently, Analyst Review serves as the primary operational bottleneck, currently <B>trapping 390 out of 523 active Work-In-Progress (WIP) cases (74.6%)</B>. This massive accumulation proves that processing delays are not caused by front-end intake volume spikes, but by severe manual capacity constraints and document review friction during investor due diligence.</p></Prose><div className="mt-8"><Figure src={workflowDurationChart.url} alt="Average workflow stage duration in hours" /></div><SqlAnalysis query={workflowDurationQuery.url} output={workflowDurationOutput.url} /></Insight>
          <Insight title="Control Assessment Friction & PEP/Sanctions Remediation Drag"><Prose><p>To understand what specific operational mechanics drive the delay in Analyst Review, an evaluation of control check efficacy and remediation lifecycles was performed across 23,478 control assessments. Across all risk tiers, control checks maintained a consistent failure rate of <B>5.13%</B> alongside an exception rate of <B>10.14%</B>. However, significant operational drag emerged during issue resolution: remediation required an average of <B>37.66 hours (~1.57 days)</B> per failed check. <B>PEP & Sanctions Screening</B> proved to be the most critical operational hurdle, exhibiting the slowest remediation cycle times (taking up to <B>3.05 days</B> for high-risk investor profile exceptions). Manual back-and-forth documentation clearing for false-positive matches created extended review deadlocks, directly feeding the Analyst Review queue accumulation.</p></Prose><div className="mt-8"><Figure src={controlAssessmentChart.url} alt="Control assessment outcomes and remediation metrics" /></div><SqlAnalysis query={controlAssessmentQuery.url} output={controlAssessmentOutput.url} /></Insight>
          <Insight title="Operational Priority Misalignment & Escalation Friction"><Prose><p>Beyond document analysis and control check friction, the final stage of the investigation evaluated queue governance and handling behaviors across priority tiers. The data revealed that operational teams frequently misunderstood "Urgent" priority overrides as a proxy shortcut to accelerate cases through the pipeline. When <B>Low-Risk</B> cases are processed normally under <B>Standard</B> priority, they achieve a <B>0.0% escalation rate</B>. However, when operational teams manually tag a Low-Risk case as "Urgent", its escalation rate spikes dramatically to <B>29.9%</B>. This artificial priority inflation clogs senior management queues, driving the average dwell time for escalated cases up to <B>47.46 hours (~1.98 days)</B> per event. Rather than expediting turnaround, priority misunderstanding creates severe queue distortion and extends total handling latency across high-risk investor files.</p></Prose><div className="mt-8"><Figure src={priorityEscalationChart.url} alt="Case turnaround latency versus intake volume" /></div><SqlAnalysis query={priorityEscalationQuery.url} output={priorityEscalationOutput.url} /></Insight>
        </div></CaseSection>

        <CaseSection title="Strategic Recommendations"><div className="mx-auto mb-12 max-w-[850px]"><Prose><p>The findings demonstrate that resolving ABC Fund's SLA breaches requires targeted operational interventions rather than broad capacity additions. The following strategic recommendations focus on eliminating Analyst Review congestion, streamlining control remediation cycles, and restoring queue governance to protect regulatory standing and accelerate investor onboarding.</p></Prose></div><div className="grid gap-6 lg:grid-cols-3">{recommendations.map((r) => <article key={r.n} className="card-surface card-hover flex flex-col"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Recommendation {r.n}</p><h3 className="mt-3 text-xl font-semibold text-foreground">{r.title}</h3><div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground"><div><h4 className="font-semibold text-foreground">Action</h4><p className="mt-2">{r.action}</p></div><div><h4 className="font-semibold text-foreground">Business Rationale</h4><p className="mt-2">{r.rationale}</p></div><div><h4 className="font-semibold text-foreground">Expected Outcome</h4><BulletList items={r.outcomes} /></div></div></article>)}</div></CaseSection>

        <CaseSection title="Expected Business Impact" reading><p className="mb-6 text-base text-muted-foreground md:text-[17px]">If the recommended operational improvements and governance controls are successfully implemented, ABC Fund can expect to achieve the following outcomes:</p><BulletList items={[<> <B>Eliminate Regulatory Tail-Risk Delays</B> by lowering regulatory SLA breach rates across Compliance and Investor Services to below 1.0%, while completely eliminating extreme tail-risk delays that currently leave overdue cases stranded by 19 to 30 days past deadline.</>, <> <B>Reclaim Operational Capacity in Analyst Review</B> by reducing active Work-In-Progress (WIP) accumulation trapped in Analyst Review from 74.6% to under 40%, unlocking over 150,000 operational hours annually through automated document staging and pre-clearing.</>, <> <B>Compress PEP & Sanctions Remediation Cycles</B> by cutting PEP & Sanctions exception resolution cycle times by nearly 70%, bringing average remediation durations down from 3.05 days (73.25 hours) to under 24 hours.</>, <> <B>Dramatically Reduce Escalation Queue Friction</B> by eliminating priority misunderstanding on Low-Risk investor files, dropping their escalation rate from 29.9% to under 2.0% and reducing average escalation dwell time from 47.46 hours to under 12 hours.</>, <> <B>Accelerate Investor Onboarding Velocity</B> by streamlining overall end-to-end case processing times, enhancing investor satisfaction and eliminating capital deployment delays across our European investment vehicles.</>]} /></CaseSection>

        <CaseSection title="Technical Implementations"><div className="mx-auto max-w-[850px]"><Prose><p>This project was executed to simulate an enterprise-grade business intelligence workflow, covering the complete analytical pipeline from relational data staging and SQL query engineering to star schema modeling and executive dashboard delivery.</p></Prose></div><div className="mt-12 space-y-6">
          <article className="card-surface card-hover"><h3 className="text-lg font-semibold text-foreground">Data Architecture & SQL Engineering</h3><BulletList items={[<><B>Designed and Deployed SQL Staging Views.</B> Created five analytical views to deduplicate transactional logs, map business unit dimensions, and establish standardized event tracking.</>, <><B>Engineered Pre-Calculated SLA Metrics</B> by using advanced SQL techniques including CTEs, window functions, and CASE logic to calculate stage dwell times, business day sequences, and SLA targets directly in database views.</>, <><B>Standardized Operational Data</B> by applying explicit casting, conditional aggregations, and date math functions to transform raw workflow audit trails into clean, reporting-ready fact tables.</>]} /></article>
          <article className="card-surface card-hover"><h3 className="text-lg font-semibold text-foreground">Data Modeling & DAX Calculation Engine</h3><div className="mt-5 grid items-center gap-8 md:grid-cols-[1fr_auto]"><BulletList items={[<><B>Architected Star Schema Data Model.</B> Built a relational data model in Power BI, establishing one-to-many relationships between central fact tables and business unit and calendar dimensions.</>, <><B>Authored 16 Explicit DAX Measures.</B> Developed DAX formulas to dynamically evaluate complex KPIs, including regulatory breach rates, stage duration share, control failure percentages, and active WIP totals.</>, <><B>Optimized Filter Contexts & Security.</B> Configured bidirectional cross-filtering controls, security roles, and time-intelligence logic to support flexible slicing across risk tiers and business units.</>]} /><img src={daxMeasures.url} alt="Power BI measures used in the compliance dashboard" loading="lazy" className="mx-auto max-h-[460px] w-auto rounded-lg border border-border bg-surface" /></div></article>
          <article className="card-surface card-hover"><h3 className="text-lg font-semibold text-foreground">Executive Dashboard & Visual Storytelling</h3><BulletList items={[<><B>Designed Interactive 4-Page Dashboard Suite.</B> Developed specialized report pages tailored for leadership and operational leads, covering Executive Overview, SLA Severity, Workflow Bottlenecks, and Control Assessments.</>, <><B>Built Risk Diagnostics & Scatter Plots.</B> Implemented custom scatter charts, clustered bar charts, and variance heatmaps to pinpoint queue congestion, priority misunderstanding, and escalation dwell times.</>, <><B>Applied Business-Focused UX Design.</B> Incorporated conditional formatting, clean layout hierarchy, and visual storytelling cues to direct management focus to immediate regulatory risks.</>]} /></article>
        </div></CaseSection>

        <CaseSection title="Dashboard"><Figure src={executiveDashboard.url} alt="ABC Fund compliance and operational risk executive dashboard" /><div className="mt-6 flex justify-end"><Button asChild variant="outline" className="h-auto rounded-xl border-border bg-card px-4 py-2 text-foreground"><a href="https://github.com/MonisAmir1/Compliance_Process_Optimisation_And_Operational_Risk_Monitoring" target="_blank" rel="noopener noreferrer">View Full Dashboard</a></Button></div></CaseSection>

        <CaseSection title="Lessons Learned" reading><Prose><p>This project reinforced that effective data analysis in regulated environments goes far beyond surface metrics. Operational delays aren't just numbers on a dashboard. They stem from manual handoffs and queue behaviors. Mapping the end-to-end case lifecycle allowed me to uncover true operational bottlenecks rather than relying on aggregate averages.</p><p>It also strengthened my ability to bridge technical data engineering with strategic decision-making. Structuring raw transactional audit logs in SQL and translating them into an intuitive Power BI suite taught me how to turn complex operational mechanics into clear, executive-ready insights.</p><p>Most importantly, it deepened my passion for domain-driven analytics. Navigating fund compliance workflows highlighted how targeted data analysis can directly protect a firm's license-to-operate, optimize capacity, and solve genuine business challenges.</p></Prose><div className="mt-12 flex justify-center"><Button asChild size="lg" className="h-auto rounded-xl px-7 py-3.5 text-base"><Link to="/" hash="projects"><ArrowLeft className="h-4 w-4" />Back to Portfolio</Link></Button></div></CaseSection>
      </main>
      <Footer />
    </div>
  );
}