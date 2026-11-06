import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CaseSection, Prose, BulletList, Figure, B } from "@/components/portfolio/case-study/CaseSection";
import { SqlAnalysis } from "@/components/portfolio/case-study/SqlAnalysis";
import { VideoPlayer } from "@/components/portfolio/case-study/VideoPlayer";
import { Footer } from "@/components/portfolio/Footer";
import profileImage from "@/assets/profile-navbar.webp";
import { MobileNavigation } from "@/components/portfolio/MobileNavigation";
import walkthroughVideo from "@/assets/case1/walkthrough.mp4";

import dataModel from "@/assets/case1/data-model.webp";
import ciTrend from "@/assets/case1/ci-trend-chart.webp";
import sql1q from "@/assets/case1/sql1-query.webp";
import sql1o from "@/assets/case1/sql1-output.webp";
import costBreakdown from "@/assets/case1/cost-breakdown-chart.webp";
import sql2q from "@/assets/case1/sql2-query.webp";
import sql2o from "@/assets/case1/sql2-output.webp";
import donutEarly from "@/assets/case1/dept-donut-early.webp";
import donutLate from "@/assets/case1/dept-donut-late.webp";
import sql3q from "@/assets/case1/sql3-query.webp";
import sql3o from "@/assets/case1/sql3-output.webp";
import slaMatrix from "@/assets/case1/sla-matrix.webp";
import sql4q from "@/assets/case1/sql4-query.webp";
import sql4o from "@/assets/case1/sql4-output.webp";
import reworkChart from "@/assets/case1/rework-chart.webp";
import sql5q from "@/assets/case1/sql5-query.webp";
import sql5o from "@/assets/case1/sql5-output.webp";

const TITLE = "Cost-to-Income Ratio Optimisation Through Operational Excellence";
const DESCRIPTION =
  "Banking case study: how SQL and Power BI analysis traced a rising Cost-to-Income Ratio to manual rework in KYC and AML processes, unlocking €950,000 in annual savings.";

export const Route = createFileRoute("/projects/cost-to-income-ratio")({
  head: () => ({
    meta: [
      { title: "Cost-to-Income Ratio Optimisation | Muhammad Monis Portfolio" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Cost-to-Income Ratio Optimisation | Muhammad Monis Portfolio" },
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
      <>Designed a dimensional <B>Star Schema</B> to support scalable analytical modelling.</>,
      <>Managed and transformed relational datasets using <B>SQL Server</B>.</>,
      <>Built reusable SQL <B>Views</B> to simplify downstream analysis and improve query efficiency.</>,
    ],
  },
  {
    title: "SQL Data Preparation & Analysis",
    items: [
      <>Performed data extraction, transformation, and aggregation using <B>MS SQL Server</B>.</>,
      <>Applied <B>JOINs</B>, <B>CASE expressions</B>, <B>GROUP BY</B>, <B>CTEs</B>, and aggregate functions to analyse financial, operational, and workforce data.</>,
      <>Used functions such as <B>CAST</B>, <B>ROUND</B>, and <B>FORMAT</B> to standardise data and prepare business-ready outputs.</>,
    ],
  },
  {
    title: "Data Modelling & Business Intelligence",
    items: [
      <>Developed a structured <B>Power BI</B> data model with defined relationships between fact and dimension tables.</>,
      <>Created <B>DAX measures</B> to calculate key business KPIs, including the <B>Cost-to-Income Ratio</B>, operating expenses, SLA performance, workforce utilisation, and rework rates.</>,
      <>Implemented advanced filtering and drill-through capabilities to support multi-level operational analysis.</>,
    ],
  },
  {
    title: "Data Visualisation & Storytelling",
    items: [
      <>Designed interactive and advanced Power BI dashboards and visualisations, including trend analysis, matrix reporting, decomposition, and comparative analysis.</>,
      <>Applied conditional formatting and business-focused visual design to highlight operational risks, performance trends, and areas requiring management attention.</>,
      <>Translated complex analytical findings into clear, evidence-based business recommendations through data storytelling.</>,
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
        <nav className="container-page grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:flex md:justify-between md:gap-0">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={profileImage}
              alt="Monis profile"
              className="h-9 w-9 shrink-0 rounded-full border border-border bg-card object-cover"
            />
            <span className="truncate text-sm font-semibold tracking-tight text-foreground">
              Glad You're Here :)
            </span>
          </Link>
          <Link
            to="/"
            hash="projects"
            className="hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary md:inline-flex"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <MobileNavigation />
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
                {["SQL", "Power BI"].map((t) => (
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
              <VideoPlayer src={walkthroughVideo} title="Project walkthrough video" />
            </div>
          </div>
        </section>

        {/* Executive Project Summary */}
        <CaseSection title="Executive Project Summary" reading>
          <Prose>
            <p>
              ABC Banking Group, a mid-sized banking institution headquartered in Luxembourg,
              experienced a steady escalation in its <B>Cost-to-Income (C/I) Ratio</B> between 2021
              and 2025, despite relatively stable operating income. The objective of this project was
              to investigate the underlying operational drivers behind this trend and identify
              opportunities to improve efficiency through data-driven analysis.
            </p>
            <p>
              Using <B>SQL and Power BI</B>, I analysed financial, operational, workforce, and
              process performance data to progressively narrow the investigation from high-level
              financial indicators to the underlying operational root causes. The analysis revealed
              that rising operating costs were concentrated within two departments and ultimately
              traced to significant increases in manual rework across critical <B>KYC</B> and{" "}
              <B>AML</B> processes, which drove higher labour effort, prolonged processing times, and
              widespread SLA breaches.
            </p>
            <p>
              Based on these findings, I developed targeted strategic recommendations focused on
              reducing rework, improving process efficiency, and strengthening cross-departmental
              workflows. If implemented, these initiatives are projected to reduce annual operating
              expenses by approximately <B>€950,000</B> and improve the bank's{" "}
              <B>Cost-to-Income Ratio</B> from <B>57.1%</B> to approximately <B>46.5%</B>,
              demonstrating how operational analytics can translate business data into practical,
              evidence-based decisions.
            </p>
          </Prose>
        </CaseSection>

        {/* Business Context */}
        <CaseSection title="Business Context" reading>
          <Prose>
            <p>
              <B>ABC Banking Group</B> is a mid-sized banking institution headquartered in Luxembourg,
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
              Over recent years, ABC Banking Group observed a steady escalation in its{" "}
              <B>Cost-to-Income (C/I) Ratio</B>. While the financial trend was evident, management lacked visibility into
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
              The <B>Cost-to-Income Ratio</B> is a key measure of operational efficiency within the banking
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
            <Figure src={dataModel} alt="Star schema data model of the banking dataset" />
          </div>

          <div className="mx-auto mt-10 max-w-[850px]">
            <Prose>
              <p>
                Management provided five years of historical operational and financial data covering
                multiple departments and business processes. Rather than beginning with assumptions,
                I followed a <B>structured analytical approach</B> that progressively narrowed the
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
                  Ratio increased from <B>45.64% in 2021</B> to <B>57.13% in 2025</B>, driven by a
                  significant rise in operating expenses while operating income remained broadly
                  stable. The most notable shift occurred between <B>2022 and 2023</B>, marking the
                  point at which operational costs began to outpace the bank's ability to generate
                  income.
                </p>
              </Prose>
              <div className="mt-8">
                <Figure src={ciTrend} alt="Cost-to-Income Ratio trend from 2021 to 2025" />
              </div>
              <SqlAnalysis query={sql1q} output={sql1o} />
            </Insight>

            <Insight title="Cost Structure Analysis">
              <Prose>
                <p>
                  To understand what was driving the increase in operating expenses, I analysed the
                  bank's major cost categories over the five-year period. The results showed that
                  almost all of the post-2022 cost growth was concentrated in <B>Direct Fixed Costs</B>{" "}
                  and <B>Regulatory Fees Overhead</B>, which together accounted for <B>97.6%</B> of
                  the total increase in operating expenses. In contrast, <B>IT Systems Costs</B>{" "}
                  remained relatively stable
                  throughout the period, indicating that the deterioration was driven by specific
                  operational cost areas rather than organisation-wide cost inflation.
                </p>
              </Prose>
              <div className="mt-8">
                <Figure src={costBreakdown} alt="Costs breakdown by year across cost categories" />
              </div>
              <SqlAnalysis query={sql2q} output={sql2o} />
            </Insight>

            <Insight title="Departmental Cost Breakdown">
              <Prose>
                <p>
                  To determine where the rising operating costs were originating, I compared expense
                  trends across the bank's core operational departments. The analysis showed that
                  while <B>Asset Management, Private Banking, and Retail Banking</B> maintained stable
                  cost levels throughout the five-year period, <B>Compliance &amp; Corporate Governance</B>{" "}
                  and <B>Fund Administration &amp; Custody</B> experienced significant cost increases
                  beginning in 2023. Together, these two departments accounted for <B>over 96%</B> of the bank's
                  post-2022 cost inflation, narrowing the investigation to a small number of
                  high-impact operational areas.
                </p>
              </Prose>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <Figure
                  src={donutEarly}
                  alt="Average cost breakdown by department, 2021 and 2022"
                  caption="Filtered by 2021, 2022"
                />
                <Figure
                  src={donutLate}
                  alt="Average cost breakdown by department, 2023 to 2025"
                  caption="Filtered by 2023, 2024, 2025"
                />
              </div>
              <SqlAnalysis query={sql3q} output={sql3o} />
            </Insight>

            <Insight title="Process Performance Drill-Down">
              <Prose>
                <p>
                  Having isolated the two departments responsible for the majority of cost inflation,
                  I drilled down into their core operational processes to identify where performance
                  had compromised. The matrix compares each process against its{" "}
                  <B>target Service Level Agreement (SLA)</B>, showing the average variance in
                  processing time.{" "}
                  <B>
                    Negative values indicate that a process was completed within its target
                    timeframe, while positive values represent delays beyond the agreed SLA.
                  </B>{" "}
                  The analysis revealed that <B>KYC &amp; Client Onboarding</B> and{" "}
                  <B>AML Transaction Monitoring &amp; Screening</B> experienced
                  significant and sustained SLA breaches from 2023 onwards, whereas all other
                  processes consistently remained within their target service levels. This confirmed
                  that the operational slowdown was concentrated within two critical processes rather
                  than being a bank-wide issue.
                </p>
              </Prose>
              <div className="mt-8">
                <Figure src={slaMatrix} alt="Average SLA variance in hours by process and year" />
              </div>
              <SqlAnalysis query={sql4q} output={sql4o} />
            </Insight>

            <Insight title="Operational Efficiency Assessment">
              <Prose>
                <p>
                  To understand why these two processes had compromised, I analysed workforce
                  utilisation alongside operational quality metrics. The analysis showed that{" "}
                  <B>case volumes remained broadly stable</B>, indicating that the bank was not
                  processing significantly more work. Instead, a sharp increase in{" "}
                  <B>manual rework</B> from 2023 onwards caused employees to repeatedly process the
                  same cases, resulting in a substantial rise in logged hours and exhausting available
                  operational capacity. As workload accumulated without a corresponding increase in
                  productive output, SLA compliance compromised rapidly, confirming that{" "}
                  <B>
                    process quality failures — not increased demand — were the primary driver of
                    operational inefficiency and rising costs.
                  </B>
                </p>
              </Prose>
              <div className="mt-8">
                <Figure src={reworkChart} alt="Total cases versus rework rate trend" />
              </div>
              <SqlAnalysis query={sql5q} output={sql5o} />
            </Insight>

            <Insight title="Root Cause & Conclusion">
              <Prose>
                <p>
                  The analysis confirmed that the escalation in the bank's Cost-to-Income (C/I) Ratio
                  was not driven by declining income or increased business demand, but by a breakdown
                  in operational efficiency. Rising operating costs were concentrated within{" "}
                  <B>Compliance &amp; Corporate Governance</B> and{" "}
                  <B>Fund Administration &amp; Custody</B>, where prolonged processing times in{" "}
                  <B>KYC &amp; Client Onboarding</B> and{" "}
                  <B>AML Transaction Monitoring &amp; Screening</B> became evident. Further analysis
                  revealed that the primary driver was a significant increase in <B>manual rework</B>, which consumed
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
          <div className="mx-auto max-w-[850px]">
            <Prose>
              <p>
                The analysis identified three targeted operational improvements designed to address the
                root causes of rising costs. Rather than applying broad cost-cutting measures, the
                recommendations focus on eliminating process inefficiencies while maintaining service
                quality and regulatory compliance.
              </p>
            </Prose>
          </div>

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
              <><B>Reduce KYC and AML rework rates</B> from approximately <B>60%</B> to around <B>15%</B>, significantly improving process quality and reducing unnecessary manual effort.</>,
              <><B>Save approximately 47,600 operational hours annually</B> by eliminating avoidable rework and duplicate processing activities.</>,
              <><B>Restore SLA compliance</B>, reducing the current <B>100% breach rate</B> to <B>below 5%</B> and improving service reliability across critical operational processes.</>,
              <><B>Reduce annual operating expenses by approximately €950,000</B> through targeted operational improvements rather than broad cost-cutting measures.</>,
              <><B>Improve the Cost-to-Income (C/I) Ratio</B> from <B>57.1%</B> to approximately <B>46.5%</B>, bringing the bank back in line with recognised industry benchmarks for operational efficiency.</>,
            ]}
          />
        </CaseSection>

        {/* Technical Implementations */}
        <CaseSection title="Technical Implementations">
          <div className="mx-auto max-w-[850px]">
            <Prose>
              <p>
                This project was designed to simulate a real-world business intelligence workflow,
                covering the complete analytical pipeline from relational data modelling to executive
                reporting.
              </p>
            </Prose>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {technical.map((block) => (
              <div key={block.title} className="card-surface card-hover">
                <h3 className="text-lg font-semibold text-foreground">{block.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {block.items.map((item, ix) => (
                    <li key={ix} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
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
              This project reinforced that effective data analysis goes beyond reporting numbers. It's
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
              Back to Portfolio
            </Link>
          </div>
        </CaseSection>
      </main>

      <Footer />
    </div>
  );
}
