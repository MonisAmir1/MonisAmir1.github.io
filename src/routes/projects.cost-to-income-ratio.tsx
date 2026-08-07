import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { CaseSection, Prose, BulletList, Figure } from "@/components/portfolio/case-study/CaseSection";
import { SqlAnalysis } from "@/components/portfolio/case-study/SqlAnalysis";
import { Footer } from "@/components/portfolio/Footer";
import profileImage from "@/assets/profile-navbar.png.asset.json";

import dataModel from "@/assets/case1/data-model.png.asset.json";
import ciTrend from "@/assets/case1/ci-trend-chart.png.asset.json";
import sql1q from "@/assets/case1/sql1-query.png.asset.json";
import sql1o from "@/assets/case1/sql1-output.png.asset.json";
import costBreakdown from "@/assets/case1/cost-breakdown-chart.png.asset.json";
import sql2q from "@/assets/case1/sql2-query.png.asset.json";
import sql2o from "@/assets/case1/sql2-output.png.asset.json";
import donutEarly from "@/assets/case1/dept-donut-early.png.asset.json";
import donutLate from "@/assets/case1/dept-donut-late.png.asset.json";
import sql3q from "@/assets/case1/sql3-query.png.asset.json";
import sql3o from "@/assets/case1/sql3-output.png.asset.json";
import slaMatrix from "@/assets/case1/sla-matrix.png.asset.json";
import sql4q from "@/assets/case1/sql4-query.png.asset.json";
import sql4o from "@/assets/case1/sql4-output.png.asset.json";
import reworkChart from "@/assets/case1/rework-chart.png.asset.json";
import sql5q from "@/assets/case1/sql5-query.png.asset.json";
import sql5o from "@/assets/case1/sql5-output.png.asset.json";

const TITLE = "Cost-to-Income Ratio Optimisation Through Operational Excellence";
const DESCRIPTION =
  "Banking case study: how SQL and Power BI analysis traced a rising Cost-to-Income Ratio to manual rework in KYC and AML processes, unlocking €950,000 in annual savings.";

export const Route = createFileRoute("/projects/cost-to-income-ratio")({
  head: () => ({
    meta: [
      { title: "Cost-to-Income Ratio Optimisation — Muhammad Monis" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Cost-to-Income Ratio Optimisation — Banking Case Study" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudyPage,
});

const flowSteps = [
  "Business Question",
  "Financial Analysis",
  "Department Analysis",
  "Process Analysis",
  "Workforce Analysis",
  "Root Cause",
  "Recommendations",
];

const recommendations = [
  {
    n: "01",
    title: "Implement Automated Upfront Data Validation",
    action:
      "Integrate automated identity verification and real-time data validation into the client onboarding process to identify incomplete or inaccurate submissions before they enter operational workflows.",
    rationale:
      "The analysis showed that excessive manual rework within the KYC process was a major contributor to rising operational effort. Preventing errors at the point of data capture reduces the need for repeated verification and improves overall process efficiency.",
    outcomes: [
      "Reduce KYC rework to near historical levels.",
      "Improve processing efficiency and reduce operational effort.",
      "Release significant workforce capacity for higher-value activities.",
    ],
  },
  {
    n: "02",
    title: "Optimise AML Alert Management",
    action:
      "Review and recalibrate transaction monitoring rules while introducing automated first-level alert triage to reduce unnecessary manual investigations.",
    rationale:
      "The investigation indicated that AML operations were increasingly affected by manual re-screening activities, consuming operational capacity without a corresponding increase in business demand.",
    outcomes: [
      "Reduce manual AML investigations.",
      "Restore processing times closer to target SLAs.",
      "Improve analyst productivity and compliance efficiency.",
    ],
  },
  {
    n: "03",
    title: "Standardise Cross-Departmental Workflows",
    action:
      "Introduce a shared workflow and case management process between Compliance & Corporate Governance and Fund Administration & Custody to eliminate duplicate activities and improve process visibility.",
    rationale:
      "The analysis showed that both departments experienced similar operational inefficiencies within the same processes, indicating duplicated effort and fragmented workflow management.",
    outcomes: [
      "Eliminate duplicate processing activities.",
      "Improve collaboration between operational teams.",
      "Reduce unnecessary operating costs while improving SLA performance.",
    ],
  },
];

const technical = [
  {
    title: "Data Architecture & Management",
    items: [
      "Designed a dimensional Star Schema to support scalable analytical modelling.",
      "Managed and transformed relational datasets using SQL Server.",
      "Built reusable SQL Views to simplify downstream analysis and improve query efficiency.",
    ],
  },
  {
    title: "SQL Data Preparation & Analysis",
    items: [
      "Performed data extraction, transformation, and aggregation using MS SQL Server.",
      "Applied JOINs, CASE expressions, GROUP BY, CTEs, and aggregate functions to analyse financial, operational, and workforce data.",
      "Used functions such as CAST, ROUND, and FORMAT to standardise data and prepare business-ready outputs.",
    ],
  },
  {
    title: "Data Modelling & Business Intelligence",
    items: [
      "Developed a structured Power BI data model with defined relationships between fact and dimension tables.",
      "Created DAX measures to calculate key business KPIs, including the Cost-to-Income Ratio, operating expenses, SLA performance, workforce utilisation, and rework rates.",
      "Implemented advanced filtering and drill-through capabilities to support multi-level operational analysis.",
    ],
  },
  {
    title: "Data Visualisation & Storytelling",
    items: [
      "Designed interactive and advanced Power BI dashboards and visualisations, including trend analysis, matrix reporting, decomposition, and comparative analysis.",
      "Applied conditional formatting and business-focused visual design to highlight operational risks, performance trends, and areas requiring management attention.",
      "Translated complex analytical findings into clear, evidence-based business recommendations through data storytelling.",
    ],
  },
];

function Insight({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-border pt-12 first:border-t-0 first:pt-0">
      <h3 className="text-2xl text-foreground md:text-[26px]">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={profileImage.url}
              alt="Monis profile"
              className="h-9 w-9 rounded-full border border-border bg-card object-cover"
            />
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Monis Portfolio
            </span>
          </Link>
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </nav>
      </header>

      <main>
        {/* Project header + video */}
        <section className="container-page py-14 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="fade-up">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Banking <span className="mx-1.5 text-border">|</span> Financial Services
              </p>
              <h1
                className="mt-4 text-4xl leading-[1.1] text-foreground md:text-5xl"
                style={{ fontFamily: "'Garet', Inter, sans-serif" }}
              >
                {TITLE}
              </h1>
              <div className="mt-7 flex flex-wrap gap-2">
                {["SQL Server", "Power BI", "DAX", "Star Schema"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-surface !p-0 overflow-hidden">
              <div className="grid aspect-video w-full place-items-center bg-surface">
                <div className="flex flex-col items-center gap-3 px-6 text-center">
                  <PlayCircle className="h-12 w-12 text-primary" />
                  <p className="text-sm font-medium text-foreground">
                    Project walkthrough video
                  </p>
                  <p className="text-xs text-muted-foreground">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Project Summary */}
        <CaseSection title="Executive Project Summary" reading>
          <Prose>
            <p>
              ABC Banking Group, a mid-sized banking institution headquartered in Luxembourg,
              experienced a steady escalation in its Cost-to-Income (C/I) Ratio between 2021 and
              2025, despite relatively stable operating income. The objective of this project was to
              investigate the underlying operational drivers behind this trend and identify
              opportunities to improve efficiency through data-driven analysis.
            </p>
            <p>
              Using SQL and Power BI, I analysed financial, operational, workforce, and process
              performance data to progressively narrow the investigation from high-level financial
              indicators to the underlying operational root causes. The analysis revealed that rising
              operating costs were concentrated within two departments and ultimately traced to
              significant increases in manual rework across critical KYC and AML processes, which
              drove higher labour effort, prolonged processing times, and widespread SLA breaches.
            </p>
            <p>
              Based on these findings, I developed targeted strategic recommendations focused on
              reducing rework, improving process efficiency, and strengthening cross-departmental
              workflows. If implemented, these initiatives are projected to reduce annual operating
              expenses by approximately €950,000 and improve the bank's Cost-to-Income Ratio from
              57.1% to approximately 46.5%, demonstrating how operational analytics can translate
              business data into practical, evidence-based decisions.
            </p>
          </Prose>
        </CaseSection>

        {/* Business Context */}
        <CaseSection title="Business Context" reading>
          <Prose>
            <p>
              ABC Banking Group is a mid-sized banking institution headquartered in Luxembourg,
              providing Retail Banking, Corporate Banking, Wealth &amp; Private Banking, Payments
              &amp; Transaction Operations, and Compliance &amp; Financial Crime services. Operating
              within Luxembourg, the bank must balance operational efficiency, regulatory
              compliance, and high service standards while supporting sustainable business growth.
            </p>
          </Prose>
        </CaseSection>

        {/* Problem Statement */}
        <CaseSection title="Problem Statement & Business Challenge" reading>
          <Prose>
            <p>
              Over recent years, ABC Banking Group observed a steady escalation in its Cost-to-Income
              (C/I) Ratio. While the financial trend was evident, management lacked visibility into
              the underlying operational drivers, making it difficult to determine where
              inefficiencies existed and which areas required attention. A structured, data-driven
              investigation was required to identify the root causes and support informed
              decision-making.
            </p>
          </Prose>
        </CaseSection>

        {/* Why This Problem Matters */}
        <CaseSection title="Why This Problem Matters" reading>
          <Prose>
            <p>
              The Cost-to-Income Ratio is a key measure of operational efficiency within the banking
              industry. Without understanding the factors driving its escalation, management risks
              making decisions based on assumptions rather than evidence. Identifying the true
              operational drivers enables targeted improvements that strengthen efficiency, control
              costs, and support sustainable long-term performance without compromising regulatory
              obligations or customer service.
            </p>
          </Prose>
        </CaseSection>

        {/* Objective */}
        <CaseSection title="Objective" reading>
          <p className="mx-auto mb-6 max-w-[850px] text-base text-muted-foreground md:text-[17px]">
            The objective of this project was to:
          </p>
          <BulletList
            items={[
              "Investigate the factors contributing to the deterioration of the bank's Cost-to-Income (C/I) Ratio.",
              "Identify the operational drivers behind rising costs through data analysis.",
              "Develop evidence-based recommendations to improve operational efficiency and support sustainable financial performance.",
            ]}
          />
        </CaseSection>

        {/* My Role */}
        <CaseSection title="My Role" reading>
          <p className="mx-auto mb-6 max-w-[850px] text-base text-muted-foreground md:text-[17px]">
            As the Data Analyst, I was responsible for:
          </p>
          <BulletList
            items={[
              "Defining the analytical approach based on the business problem.",
              "Preparing and analysing relational datasets using SQL.",
              "Identifying operational drivers through financial, workforce, and deeper-level analysis.",
              "Developing actionable business recommendations supported by data.",
              "Communicating findings through a business-focused case study.",
            ]}
          />
        </CaseSection>

        {/* Analytical Approach */}
        <CaseSection title="Analytical Approach">
          <div className="mx-auto max-w-[850px]">
            <h3 className="text-lg font-semibold text-foreground">Data available</h3>
            <div className="mt-4">
              <BulletList
                items={[
                  "Financial performance",
                  "Operational costs",
                  "Employee timesheets",
                  "Process performance",
                ]}
              />
            </div>
          </div>

          <div className="mt-12">
            <h3 className="mb-5 text-center text-lg font-semibold text-foreground">Data Model</h3>
            <Figure src={dataModel.url} alt="Star schema data model of the banking dataset" />
          </div>

          <div className="mx-auto mt-10 max-w-[850px]">
            <Prose>
              <p>
                Management provided five years of historical operational and financial data covering
                multiple departments and business processes. Rather than beginning with assumptions,
                I followed a structured analytical approach that progressively narrowed the
                investigation from financial performance to operational root causes.
              </p>
            </Prose>
          </div>

          <div className="mx-auto mt-12 flex max-w-md flex-col items-center">
            {flowSteps.map((step, i) => (
              <div key={step} className="flex w-full flex-col items-center">
                <div
                  className={`w-full rounded-xl border px-5 py-3.5 text-center text-sm font-medium shadow-soft ${
                    i === 0 || i === flowSteps.length - 1
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground"
                  }`}
                >
                  {step}
                </div>
                {i < flowSteps.length - 1 && (
                  <span className="my-1 text-lg leading-none text-primary">↓</span>
                )}
              </div>
            ))}
          </div>
        </CaseSection>

        {/* Key Insights */}
        <CaseSection title="Key Insights">
          <div className="space-y-14">
            <Insight title="Financial Performance Overview">
              <Prose>
                <p>
                  The analysis began with a review of the bank's overall financial performance to
                  determine whether the escalation in the Cost-to-Income (C/I) Ratio was genuine and
                  to understand the financial trend behind it. The analysis confirmed that the C/I
                  Ratio increased from 45.64% in 2021 to 57.13% in 2025, driven by a significant rise
                  in operating expenses while operating income remained broadly stable. The most
                  notable shift occurred between 2022 and 2023, marking the point at which
                  operational costs began to outpace the bank's ability to generate income.
                </p>
              </Prose>
              <div className="mt-8">
                <Figure src={ciTrend.url} alt="Cost-to-Income Ratio trend from 2021 to 2025" />
              </div>
              <SqlAnalysis query={sql1q.url} output={sql1o.url} />
            </Insight>

            <Insight title="Cost Structure Analysis">
              <Prose>
                <p>
                  To understand what was driving the increase in operating expenses, I analysed the
                  bank's major cost categories over the five-year period. The results showed that
                  almost all of the post-2022 cost growth was concentrated in Direct Fixed Costs and
                  Regulatory Fees Overhead, which together accounted for 97.6% of the total increase
                  in operating expenses. In contrast, IT Systems Costs remained relatively stable
                  throughout the period, indicating that the deterioration was driven by specific
                  operational cost areas rather than organisation-wide cost inflation.
                </p>
              </Prose>
              <div className="mt-8">
                <Figure src={costBreakdown.url} alt="Costs breakdown by year across cost categories" />
              </div>
              <SqlAnalysis query={sql2q.url} output={sql2o.url} />
            </Insight>

            <Insight title="Departmental Cost Breakdown">
              <Prose>
                <p>
                  To determine where the rising operating costs were originating, I compared expense
                  trends across the bank's core operational departments. The analysis showed that
                  while Asset Management, Private Banking, and Retail Banking maintained stable cost
                  levels throughout the five-year period, Compliance &amp; Corporate Governance and
                  Fund Administration &amp; Custody experienced significant cost increases beginning
                  in 2023. Together, these two departments accounted for over 96% of the bank's
                  post-2022 cost inflation, narrowing the investigation to a small number of
                  high-impact operational areas.
                </p>
              </Prose>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <Figure
                  src={donutEarly.url}
                  alt="Average cost breakdown by department, 2021 and 2022"
                  caption="Filtered by 2021, 2022"
                />
                <Figure
                  src={donutLate.url}
                  alt="Average cost breakdown by department, 2023 to 2025"
                  caption="Filtered by 2023, 2024, 2025"
                />
              </div>
              <SqlAnalysis query={sql3q.url} output={sql3o.url} />
            </Insight>

            <Insight title="Process Performance Drill-Down">
              <Prose>
                <p>
                  Having isolated the two departments responsible for the majority of cost inflation,
                  I drilled down into their core operational processes to identify where performance
                  had compromised. The matrix compares each process against its target Service Level
                  Agreement (SLA), showing the average variance in processing time. Negative values
                  indicate that a process was completed within its target timeframe, while positive
                  values represent delays beyond the agreed SLA. The analysis revealed that KYC &amp;
                  Client Onboarding and AML Transaction Monitoring &amp; Screening experienced
                  significant and sustained SLA breaches from 2023 onwards, whereas all other
                  processes consistently remained within their target service levels. This confirmed
                  that the operational slowdown was concentrated within two critical processes rather
                  than being a bank-wide issue.
                </p>
              </Prose>
              <div className="mt-8">
                <Figure src={slaMatrix.url} alt="Average SLA variance in hours by process and year" />
              </div>
              <SqlAnalysis query={sql4q.url} output={sql4o.url} />
            </Insight>

            <Insight title="Operational Efficiency Assessment">
              <Prose>
                <p>
                  To understand why these two processes had compromised, I analysed workforce
                  utilisation alongside operational quality metrics. The analysis showed that case
                  volumes remained broadly stable, indicating that the bank was not processing
                  significantly more work. Instead, a sharp increase in manual rework from 2023
                  onwards caused employees to repeatedly process the same cases, resulting in a
                  substantial rise in logged hours and exhausting available operational capacity. As
                  workload accumulated without a corresponding increase in productive output, SLA
                  compliance compromised rapidly, confirming that process quality failures — not
                  increased demand — were the primary driver of operational inefficiency and rising
                  costs.
                </p>
              </Prose>
              <div className="mt-8">
                <Figure src={reworkChart.url} alt="Total cases versus rework rate trend" />
              </div>
              <SqlAnalysis query={sql5q.url} output={sql5o.url} />
            </Insight>

            <Insight title="Root Cause & Conclusion">
              <Prose>
                <p>
                  The analysis confirmed that the escalation in the bank's Cost-to-Income (C/I) Ratio
                  was not driven by declining income or increased business demand, but by a breakdown
                  in operational efficiency. Rising operating costs were concentrated within
                  Compliance &amp; Corporate Governance and Fund Administration &amp; Custody, where
                  prolonged processing times in KYC &amp; Client Onboarding and AML Transaction
                  Monitoring &amp; Screening became evident. Further analysis revealed that the
                  primary driver was a significant increase in manual rework, which consumed
                  operational capacity, increased employee effort, and caused persistent SLA
                  breaches. Together, these findings established a clear link between declining
                  process quality and the bank's worsening financial performance, providing a strong
                  evidence base for targeted operational improvement.
                </p>
              </Prose>
            </Insight>
          </div>
        </CaseSection>

        {/* Strategic Recommendations */}
        <CaseSection title="Strategic Recommendations">
          <Prose>
            <p>
              The analysis identified three targeted operational improvements designed to address the
              root causes of rising costs. Rather than applying broad cost-cutting measures, the
              recommendations focus on eliminating process inefficiencies while maintaining service
              quality and regulatory compliance.
            </p>
          </Prose>

          <div className="mt-12 space-y-8">
            {recommendations.map((r) => (
              <article key={r.n} className="card-surface card-hover">
                <div className="flex flex-col gap-5 md:flex-row md:gap-8">
                  <div className="shrink-0">
                    <span className="grid h-14 w-14 place-items-center rounded-xl bg-primary text-lg font-semibold text-primary-foreground shadow-soft">
                      {r.n}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                      Recommendation {Number(r.n)}
                    </p>
                    <h3 className="mt-2 text-2xl text-foreground">{r.title}</h3>

                    <div className="mt-7 grid gap-7 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">Action</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {r.action}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">Business Rationale</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {r.rationale}
                        </p>
                      </div>
                    </div>

                    <div className="mt-7 rounded-xl border border-border bg-surface p-5">
                      <h4 className="text-sm font-semibold text-foreground">Expected Outcome</h4>
                      <ul className="mt-3 space-y-2">
                        {r.outcomes.map((o) => (
                          <li key={o} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                            <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </CaseSection>

        {/* Expected Business Impact */}
        <CaseSection title="Expected Business Impact" reading>
          <p className="mx-auto mb-6 max-w-[850px] text-base text-muted-foreground md:text-[17px]">
            If the recommended operational improvements are successfully implemented, ABC Banking
            Group could reasonably expect to achieve the following outcomes:
          </p>
          <BulletList
            items={[
              "Reduce KYC and AML rework rates from approximately 60% to around 15%, significantly improving process quality and reducing unnecessary manual effort.",
              "Save approximately 47,600 operational hours annually by eliminating avoidable rework and duplicate processing activities.",
              "Restore SLA compliance, reducing the current 100% breach rate to below 5% and improving service reliability across critical operational processes.",
              "Reduce annual operating expenses by approximately €950,000 through targeted operational improvements rather than broad cost-cutting measures.",
              "Improve the Cost-to-Income (C/I) Ratio from 57.1% to approximately 46.5%, bringing the bank back in line with recognised industry benchmarks for operational efficiency.",
            ]}
          />
        </CaseSection>

        {/* Technical Implementations */}
        <CaseSection title="Technical Implementations">
          <Prose>
            <p>
              This project was designed to simulate a real-world business intelligence workflow,
              covering the complete analytical pipeline from relational data modelling to executive
              reporting.
            </p>
          </Prose>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {technical.map((block) => (
              <div key={block.title} className="card-surface card-hover">
                <h3 className="text-lg font-semibold text-foreground">{block.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CaseSection>

        {/* Lessons Learned */}
        <CaseSection title="Lessons Learned" reading>
          <Prose>
            <p>
              This project reinforced that effective data analysis goes beyond reporting numbers — it's
              about understanding business processes, asking the right questions, and following the
              evidence to identify root causes.
            </p>
            <p>
              It also strengthened my ability to connect financial performance with operational
              drivers, demonstrating how data can support informed business decisions rather than
              assumptions.
            </p>
            <p>
              Most importantly, it reinforced my curiosity to continue learning new industries,
              business domains, and analytical techniques, enabling me to deliver increasingly
              meaningful insights as I grow as a Data Analyst.
            </p>
          </Prose>

          <div className="mt-12 flex justify-center">
            <Link
              to="/"
              hash="projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </div>
        </CaseSection>
      </main>

      <Footer />
    </div>
  );
}
