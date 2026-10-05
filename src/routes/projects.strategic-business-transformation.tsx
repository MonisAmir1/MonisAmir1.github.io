import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, PlayCircle } from "lucide-react";
import { CaseSection, Prose, BulletList, Figure, B } from "@/components/portfolio/case-study/CaseSection";
import { ExcelTables } from "@/components/portfolio/case-study/ExcelTables";
import { Footer } from "@/components/portfolio/Footer";
import profileImage from "@/assets/profile-navbar.png.asset.json";

import dataModel from "@/assets/case2/data-model.png.asset.json";
import powerQuery from "@/assets/case2/power-query-steps.png.asset.json";
import excelQueries from "@/assets/case2/excel-queries.png.asset.json";
import revenueTrend from "@/assets/case2/revenue-units-trend.png.asset.json";
import yearlyFinancials from "@/assets/case2/yearly-financials-table.png.asset.json";
import kpiDeltas from "@/assets/case2/kpi-deltas.png.asset.json";
import categoryGrowth from "@/assets/case2/category-growth-table.png.asset.json";
import categoryEconomics from "@/assets/case2/category-economics-tables.png.asset.json";
import benchmarkTable from "@/assets/case2/benchmark-table.png.asset.json";
import strategicPositions from "@/assets/case2/strategic-positions-table.png.asset.json";
import marketCustomerCharts from "@/assets/case2/market-customer-charts.png.asset.json";
import rpuMarket from "@/assets/case2/rpu-market-table.png.asset.json";
import rpuSegment from "@/assets/case2/rpu-segment-table.png.asset.json";
import transformationOptions from "@/assets/case2/transformation-options-table.png.asset.json";
import recommendedPortfolio from "@/assets/case2/recommended-portfolio-table.jpg.asset.json";
import daxMeasures from "@/assets/case2/dax-measures-list.png.asset.json";
import daxCode from "@/assets/case2/dax-code.png.asset.json";
import dashboardImage from "@/assets/case2/dashboard-executive-v2.png.asset.json";

const TITLE = "Strategic Business Transformation";
const DESCRIPTION =
  "Consulting case study: how Excel, Power Query and Power BI analysis of five years of portfolio data shaped an evidence-based €30M transformation portfolio for LUXMORA.";

export const Route = createFileRoute("/projects/strategic-business-transformation")({
  head: () => ({
    meta: [
      { title: "Strategic Business Transformation — Muhammad Monis" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Strategic Business Transformation — Consulting Case Study" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudyPage,
});

const flowSteps = [
  "Business Baseline",
  "Portfolio Diagnosis",
  "Market & Customer Analysis",
  "Strategic Prioritisation",
  "Transformation Planning",
];

const recommendations = [
  {
    n: "01",
    title: "Scale the Core Growth Platforms",
    action: (
      <>
        Prioritise investment in <B>Personal Hygiene</B>, <B>Sleep &amp; Recovery</B>, and{" "}
        <B>Bath &amp; Body</B> by scaling the strongest-performing propositions, strengthening
        commercial execution, and directing incremental resources toward the categories with the
        greatest potential to sustain profitable growth.
      </>
    ),
    rationale: (
      <>
        The analysis identified these categories as the strongest growth platforms, with
        above-median growth, demand, and economic quality. Personal Hygiene and Sleep &amp; Recovery
        also combine strong economic contribution with attractive growth characteristics, providing
        a stronger basis for investment than categories where growth is accompanied by weaker
        economics.
      </>
    ),
    outcomes: [
      "Accelerate growth in the portfolio's strongest-performing categories.",
      "Concentrate transformation capital where the underlying demand and economics are most supportive.",
      "Establish a stronger foundation for sustainable, higher-quality portfolio growth.",
    ],
  },
  {
    n: "02",
    title: "Improve Revenue Quality Through Premiumisation",
    action: (
      <>
        Implement a portfolio-wide revenue quality programme focused on strengthening pricing
        discipline, expanding premium offerings, and improving the value captured from existing
        customer demand. Prioritise opportunities where ABC Manufacturing Group can increase revenue per unit
        without relying on additional volume growth.
      </>
    ),
    rationale: (
      <>
        The analysis showed that ABC Manufacturing Group's revenue has continued to increase while unit volumes have
        declined, with revenue per unit becoming an increasingly important driver of growth. This
        indicates an opportunity to shift the portfolio toward higher-value revenue rather than
        relying primarily on volume expansion.
      </>
    ),
    outcomes: [
      "Increase revenue generated per unit across the portfolio.",
      "Reduce reliance on volume-led growth in a declining-volume environment.",
      "Strengthen the quality and sustainability of future revenue growth.",
    ],
  },
  {
    n: "03",
    title: "Improve the Economics of Targeted Growth Categories",
    action: (
      <>
        Launch targeted economic improvement programmes across <B>Dish Care</B> and{" "}
        <B>Surface Care</B>, while optimising the existing value pools in{" "}
        <B>Everyday Nutrition</B> and <B>Stress &amp; Wellbeing</B>. Focus on improving cost
        efficiency, resource allocation, and operating economics rather than pursuing growth at any
        cost.
      </>
    ),
    rationale: (
      <>
        The analysis identified a clear difference between categories with attractive growth and
        those with weaker economic performance. Dish Care and Surface Care demonstrate strong demand
        and growth but remain below the median on economic quality, while Everyday Nutrition and
        Stress &amp; Wellbeing provide material value despite weaker growth. A targeted approach
        allows ABC Manufacturing Group to improve economics while protecting the contribution of mature value pools.
      </>
    ),
    outcomes: [
      "Improve the economic performance of targeted growth categories.",
      "Protect the contribution generated by mature value pools.",
      "Redirect resources toward activities with stronger long-term economic potential.",
    ],
  },
  {
    n: "04",
    title: "Reallocate Commercial Resources Toward Higher-Value Markets & Customers",
    action: (
      <>
        Reallocate commercial investment and growth resources toward markets and customer segments
        demonstrating stronger revenue growth and more resilient demand, while reducing
        disproportionate resource allocation to lower-growth areas. Use market and customer
        performance as an ongoing basis for targeting commercial initiatives and investment.
      </>
    ),
    rationale: (
      <>
        The analysis showed that revenue growth is being achieved across ABC Manufacturing Group's markets and
        customer segments despite declining unit volumes. However, the strength of growth and volume
        resilience varies across the portfolio, creating an opportunity to direct resources toward
        the markets and customer groups with stronger underlying performance rather than applying a
        uniform allocation approach.
      </>
    ),
    outcomes: [
      "Concentrate commercial resources on higher-potential markets and customer segments.",
      "Improve the effectiveness of growth investment through more targeted allocation.",
      "Strengthen revenue growth while reducing reliance on broad, undifferentiated commercial investment.",
    ],
  },
  {
    n: "05",
    title: "Stage-Gate the Hair Care Transformation",
    action: (
      <>
        Launch Hair Care as a stage-gated transformation programme, with an initial <B>€2.0M</B>{" "}
        allocation focused on validating the category's improvement potential before committing
        further capital. Establish clear performance milestones and use the results of each stage to
        determine whether additional investment is justified.
      </>
    ),
    rationale: (
      <>
        Hair Care remains economically material to ABC Manufacturing Group, but its growth, demand, and economic
        quality are below the portfolio median. It also requires a relatively high investment,
        carries high execution risk, and has the longest implementation horizon among the
        transformation options. A full upfront commitment would therefore expose ABC Manufacturing Group to
        unnecessary capital risk.
      </>
    ),
    outcomes: [
      "Preserve the option to transform a materially significant category without committing the full investment upfront.",
      "Reduce execution and capital risk through evidence-based investment gates.",
      "Redirect additional capital only if measurable improvements in Hair Care's strategic and economic performance are demonstrated.",
    ],
  },
  {
    n: "06",
    title: "Use Portfolio Rationalisation as a Transformation Enabler",
    action: (
      <>
        Execute a targeted rationalisation of <B>Home Fragrance and Laundry Care</B>, focusing on
        structurally weaker products and activities where continued resource allocation is not
        sufficiently supported by their growth or economic performance. Redirect the resources
        released through rationalisation toward higher-priority transformation initiatives.
      </>
    ),
    rationale: (
      <>
        Both categories show <B>below-median growth, demand, and economic quality</B>, making them
        weaker strategic positions within the portfolio. Although rationalisation is expected to
        result in a modest <B>−€0.10M Year-3 revenue impact</B>, the objective is not to maximise
        short-term revenue; it is to release capital and organisational capacity from lower-potential
        areas and improve the overall allocation of transformation resources.
      </>
    ),
    outcomes: [
      "Reduce resources committed to structurally weaker portfolio areas.",
      "Release capital and organisational capacity for higher-priority initiatives.",
      "Improve the overall strategic efficiency of ABC Manufacturing Group's portfolio without pursuing indiscriminate cost cutting.",
    ],
  },
];

const technical = [
  {
    title: "Data Preparation & Quality",
    items: [
      <>Consolidated and structured five years of sales, portfolio, market, and customer data using <B>Excel</B>.</>,
      <>Used <B>Power Query</B> to clean, transform, standardise, and validate the source datasets.</>,
      <>Prepared analysis-ready tables while addressing data-quality issues identified during the preparation process.</>,
    ],
  },
  {
    title: "Data Modelling & Business Intelligence",
    items: [
      <>Built a structured relational data model using <B>Power Pivot</B> and defined relationships across the analytical tables.</>,
      <>Developed business calculations and <B>DAX measures</B> to support revenue, units, growth, margin, and portfolio analysis.</>,
      <>Used the resulting model as the analytical foundation for the <B>Power BI</B> dashboard and strategic analysis.</>,
    ],
  },
];

const daxItems = [
  <>Developed a dedicated library of <B>DAX measures</B> for the project's key business KPIs and analytical requirements.</>,
  <>Implemented <B>time-intelligence calculations</B> to evaluate historical performance and year-over-year changes.</>,
  <>Created reusable measures such as Revenue Growth %, Revenue/Unit, and other performance indicators used throughout the dashboard.</>,
];

const dashboardItems = [
  <>Developed an interactive <B>Power BI</B> dashboard covering business performance, portfolio, market &amp; customer analysis, and strategic prioritisation.</>,
  <>Applied business-focused visualisation and conditional formatting to communicate performance patterns and strategic implications clearly.</>,
  <>Translated the analytical model and <B>DAX</B> calculations into decision-oriented visuals supporting the transformation assessment.</>,
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

function MiniList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
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
            Back to Portfolio
          </Link>
        </nav>
      </header>

      <main>
        {/* Project header + video */}
        <section className="container-page py-14 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="fade-up">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Consulting <span className="mx-1.5 text-border">|</span> Big 4
              </p>
              <h1
                className="mt-4 text-4xl leading-[1.1] text-foreground md:text-5xl"
                style={{ fontFamily: "'Garet', Inter, sans-serif" }}
              >
                {TITLE}
              </h1>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Excel", "Power BI"].map((t) => (
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
              ABC Manufacturing Group, a fictional Luxembourg-based consumer goods company, was facing a strategic
              inflection point as its established portfolio operated in an increasingly challenging
              growth environment. Management allocated a{" "}
              <B>€30M three-year transformation budget</B> and required a data-driven assessment of
              where transformation investment could create the greatest value across its portfolio
              and European commercial footprint.
            </p>
            <p>
              Working from five years of historical sales and portfolio data, the engagement
              followed a structured analytical approach spanning{" "}
              <B>
                business performance, portfolio economics, market and customer dynamics, and
                strategic prioritisation
              </B>
              . The analysis was designed to move beyond headline performance and identify the
              underlying patterns shaping ABC Manufacturing Group's growth, demand, and economic performance.
            </p>
            <p>
              The findings were subsequently translated into a set of transformation options and an
              initial portfolio allocation, providing management with an evidence-based framework
              for deciding{" "}
              <B>
                where to invest, where to improve, where to proceed selectively, and where to
                release resources
              </B>
              .
            </p>
            <p>
              The engagement ultimately demonstrates how business analytics can be used to connect
              performance diagnosis with strategic transformation planning.
            </p>
          </Prose>
        </CaseSection>

        {/* Business Context */}
        <CaseSection title="Business Context" reading>
          <Prose>
            <p>
              ABC Manufacturing Group is a fictional Luxembourg-based consumer goods company operating across three
              divisions: <B>Personal Care &amp; Beauty, Household &amp; Home Care, and Consumer
              Wellness</B>. The company serves six European markets:{" "}
              <B>Germany, France, Switzerland, Belgium, the Netherlands, and Luxembourg</B>. Its
              diversified portfolio spans personal care, household products, nutrition, wellness,
              and everyday consumer categories.
            </p>
          </Prose>
        </CaseSection>

        {/* Problem Statement & Business Challenge */}
        <CaseSection title="Problem Statement & Business Challenge" reading>
          <Prose>
            <p>
              ABC Manufacturing Group has reached a <B>strategic inflection point</B>, requiring a more deliberate
              approach to future growth and resource allocation. Management needs to determine which
              areas of the business should receive investment, which require transformation, and
              where resources may need to be reallocated.
            </p>
            <p>
              To support this transformation, management has established a{" "}
              <B>€30M budget for a three-year transformation programme</B>. The challenge is to
              determine how this limited investment capacity should be allocated across the
              portfolio to support the company's future strategic direction.
            </p>
          </Prose>
        </CaseSection>

        {/* Why This Problem Matters */}
        <CaseSection title="Why This Problem Matters" reading>
          <Prose>
            <p>
              Without a clear view of where value is being created, protected, or eroded, ABC Manufacturing Group
              risks allocating resources based on historical performance rather than future
              strategic potential. This could lead to continued investment in lower-potential areas
              while underinvesting in opportunities capable of supporting sustainable growth and
              long-term competitiveness.
            </p>
          </Prose>
        </CaseSection>

        {/* Objective */}
        <CaseSection title="Objective" reading>
          <p className="mx-auto mb-6 max-w-[850px] text-base text-muted-foreground md:text-[17px]">
            The objective of this engagement was to:
          </p>
          <BulletList
            items={[
              "Assess ABC Manufacturing Group's portfolio performance and identify the key factors shaping its growth, demand, and economic performance.",
              "Identify strategic opportunities and areas requiring transformation across categories, markets, and customer segments.",
              "Develop an evidence-based transformation portfolio and recommend how to allocate the €30M three-year transformation budget to support sustainable growth and long-term competitiveness.",
            ]}
          />
        </CaseSection>

        {/* My Role */}
        <CaseSection title="My Role" reading>
          <p className="mx-auto mb-6 max-w-[850px] text-base text-muted-foreground md:text-[17px]">
            As the BI/Data Analyst supporting the consulting engagement, I was responsible for:
          </p>
          <BulletList
            items={[
              "Defining the analytical approach based on ABC Manufacturing Group's strategic transformation challenge.",
              "Preparing, cleaning, and structuring multi-source business datasets using Excel and Power Query.",
              "Analysing portfolio, market, customer, and financial performance to identify areas of strategic opportunity and pressure.",
              "Translating analytical findings into evidence-based transformation priorities and actionable recommendations for management.",
            ]}
          />
        </CaseSection>

        {/* Analytical Approach */}
        <CaseSection title="Analytical Approach">
          <div className="mx-auto max-w-[850px]">
            <h3 className="text-lg font-semibold text-foreground">Data available</h3>
            <div className="mt-4">
              <BulletList
                items={["Sales Data", "Portfolio & Financial Data", "Business Dimensions"]}
              />
            </div>
          </div>

          <div className="mt-12">
            <h3 className="mb-5 text-center text-lg font-semibold text-foreground">Data Model</h3>
            <Figure src={dataModel.url} alt="Relational data model of the LUXMORA dataset" />
          </div>

          <div className="mx-auto mt-10 max-w-[850px]">
            <Prose>
              <p>
                The client provided five years (2021-2025) of historical sales and portfolio data
                covering the performance and multiple portfolio and business dimensions. The
                analysis followed a <B>structured, data-driven approach</B> designed to move from a
                high-level assessment of ABC Manufacturing Group's performance to a detailed understanding of
                portfolio economics and, ultimately, strategic prioritisation.
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

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-center text-lg font-semibold text-foreground">
                Data Preparation in Power Query
              </h3>
              <Figure
                src={powerQuery.url}
                alt="Power Query applied steps used to clean and transform the source data"
              />
            </div>
            <div>
              <h3 className="mb-4 text-center text-lg font-semibold text-foreground">
                Analytical Tables in Excel
              </h3>
              <Figure src={excelQueries.url} alt="Queries list of the analytical tables in Excel" />
            </div>
          </div>
        </CaseSection>

        {/* Key Insights */}
        <CaseSection title="Key Insights">
          <div className="space-y-14">
            <Insight title="Financial Diagnosis">
              <Prose>
                <p>
                  ABC Manufacturing Group's net revenue increased from <B>€12.28M</B> in <B>2021</B> to{" "}
                  <B>€13.73M</B> in <B>2025</B>, while units sold declined from <B>942,697</B> to{" "}
                  <B>917,835</B>. Over the same period, revenue per unit increased from{" "}
                  <B>€13.03</B> to <B>€14.96</B>, indicating that top-line growth has been achieved
                  primarily through higher value per unit rather than sustained volume expansion.
                </p>
              </Prose>
              <Figure
                src={revenueTrend.url}
                alt="Net revenue versus units sold trend from 2021 to 2025"
              />
              <ExcelTables
                left={yearlyFinancials.url}
                right={kpiDeltas.url}
                leftLabel="Net Revenue, Units & Revenue per Unit"
                rightLabel="Five-Year Movement"
                leftAlt="Excel table of net revenue, units sold and revenue per unit by year"
                rightAlt="Five-year movement in net revenue, units sold and revenue per unit"
              />
            </Insight>

            <Insight title="Portfolio & Category Dynamics">
              <Prose>
                <p>
                  While ABC Manufacturing Group's overall revenue growth appears relatively consistent,
                  category-level analysis reveals substantially different growth mechanisms.{" "}
                  <B>Dish Care</B> combines strong revenue growth with positive unit growth, whereas{" "}
                  <B>Hair Care</B> has experienced significant volume contraction despite continued
                  revenue growth. <B>Sleep &amp; Recovery</B>, meanwhile, has maintained broadly
                  stable demand while increasing revenue per unit.
                </p>
                <p>
                  This demonstrates that{" "}
                  <B>
                    revenue growth alone does not provide sufficient evidence for portfolio
                    investment decisions.
                  </B>{" "}
                  Categories require differentiated assessment based on the underlying drivers of
                  growth, demand performance, and economic contribution.
                </p>
              </Prose>
              <div className="mt-8">
                <Figure
                  src={categoryGrowth.url}
                  alt="Revenue, unit and revenue-per-unit growth by category"
                />
              </div>

              <h4 className="mt-10 text-center text-lg font-semibold text-foreground">
                Categories to Highlight
              </h4>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div className="card-surface card-hover">
                  <h5 className="text-lg font-semibold text-foreground">Dish Care</h5>
                  <MiniList
                    items={[
                      "Revenue Growth: +18.47%",
                      "Unit Growth: +3.93%",
                      "Revenue/Unit Growth: +14%",
                    ]}
                  />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    This is an example of genuine volume-supported growth.
                  </p>
                </div>
                <div className="card-surface card-hover">
                  <h5 className="text-lg font-semibold text-foreground">Hair Care</h5>
                  <MiniList
                    items={[
                      "Revenue Growth: +5.45%",
                      "Unit Growth: −9.10%",
                      "Revenue/Unit Growth: +16.01%",
                    ]}
                  />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Revenue is growing, but the category is losing substantial volume.
                  </p>
                </div>
                <div className="card-surface card-hover">
                  <h5 className="text-lg font-semibold text-foreground">Sleep &amp; Recovery</h5>
                  <MiniList
                    items={[
                      "Revenue Growth: +13.77%",
                      "Unit Growth: +0.20%",
                      "Revenue/Unit Growth: +13.55%",
                    ]}
                  />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    This represents another interesting situation: essentially stable demand
                    combined with increasing value per unit.
                  </p>
                </div>
              </div>
            </Insight>

            <Insight title="Category Economics">
              <Prose>
                <p>
                  Category economics reveal a wide variation in both operating contribution and
                  contribution margin. <B>Sleep &amp; Recovery</B> and{" "}
                  <B>Vitamins &amp; Minerals</B> deliver the strongest contribution margins, while{" "}
                  <B>Everyday Nutrition</B> generates the highest absolute operating contribution at
                  approximately €0.88M in 2025. At the lower end, <B>Dish Care</B> and{" "}
                  <B>Home Fragrance</B> operate with contribution margins below 20%.
                </p>
                <p>
                  The analysis therefore showed that economic quality and economic materiality are
                  not necessarily aligned. A category can generate strong margins without being a
                  major contributor to total value, while larger categories may generate substantial
                  contribution at comparatively lower margins.
                </p>
              </Prose>
              <div className="mt-8">
                <Figure
                  src={categoryEconomics.url}
                  alt="Operating contribution and contribution margin trends by category"
                />
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="card-surface card-hover">
                  <h5 className="text-lg font-semibold text-foreground">Sleep &amp; Recovery</h5>
                  <MiniList items={["46.24% contribution margin", "€0.40M contribution"]} />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Excellent economics, but relatively smaller absolute contribution.
                  </p>
                </div>
                <div className="card-surface card-hover">
                  <h5 className="text-lg font-semibold text-foreground">Everyday Nutrition</h5>
                  <MiniList items={["39.98% margin", "€0.88M contribution"]} />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    It generates considerably more absolute economic value.
                  </p>
                </div>
                <div className="card-surface card-hover">
                  <h5 className="text-lg font-semibold text-foreground">Dish Care</h5>
                  <MiniList items={["19.51% margin", "€0.19M contribution"]} />
                </div>
                <div className="card-surface card-hover">
                  <h5 className="text-lg font-semibold text-foreground">Home Fragrance</h5>
                  <MiniList items={["18.86% margin", "€0.16M contribution"]} />
                </div>
              </div>

              <div className="mx-auto mt-10 max-w-[850px]">
                <Prose>
                  <p>So we're beginning to see two dimensions of economic attractiveness:</p>
                  <p>
                    <B>Economic Quality</B> — How efficiently does the category generate
                    contribution?
                  </p>
                  <p>
                    <B>Economic Materiality</B> — How significant is that contribution to the
                    overall portfolio?
                  </p>
                </Prose>
              </div>
            </Insight>

            <Insight title="Categories Strategic Positions">
              <Prose>
                <p>
                  Now, each category was assessed against the portfolio median across four dimensions:{" "}
                  <B>growth</B>, <B>demand</B>, <B>economic quality</B>, and{" "}
                  <B>economic materiality</B>. Categories were classified as either above or below
                  the portfolio median to establish a consistent relative view of strategic
                  attractiveness.
                </p>
              </Prose>
              <div className="mt-8">
                <Figure src={benchmarkTable.url} alt="Portfolio benchmark median values" />
              </div>
              <div className="mx-auto mt-8 max-w-[850px]">
                <Prose>
                  <p>
                    Benchmarking the portfolio across growth, demand, economic quality, and economic
                    materiality revealed clear differences in the strategic position of individual
                    categories. <B>Personal Hygiene and Sleep &amp; Recovery</B> emerged as the
                    strongest all-round platforms, performing above the portfolio median across all
                    four dimensions.
                  </p>
                  <p>
                    Other categories presented more nuanced profiles.{" "}
                    <B>Everyday Nutrition, Vitamins &amp; Minerals, and Stress &amp; Wellbeing</B>{" "}
                    combine strong economic characteristics with weaker growth or demand positions,
                    while <B>Dish Care and Surface Care</B> demonstrate stronger growth and demand
                    but comparatively weaker economics. At the other end,{" "}
                    <B>Hair Care, Home Fragrance, and Laundry Care</B> show broader areas of
                    portfolio pressure.
                  </p>
                  <p>
                    The analysis therefore indicated that ABC Manufacturing Group should not apply a uniform
                    investment approach across its portfolio. Resources should be differentiated
                    according to each category's strategic position.
                  </p>
                </Prose>
              </div>
              <div className="mt-8">
                <Figure
                  src={strategicPositions.url}
                  alt="Strategic position of each category across growth, demand and economics"
                />
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="card-surface card-hover">
                  <h5 className="text-lg font-semibold text-foreground">
                    Strongest overall position
                  </h5>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <B>Personal Hygiene</B> and <B>Sleep &amp; Recovery</B>
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">Both are:</p>
                  <MiniList
                    items={[
                      "Above Median Growth",
                      "Above Median Demand",
                      "Above Median Economic Quality",
                      "Above Median Economic Materiality",
                    ]}
                  />
                </div>
                <div className="card-surface card-hover">
                  <h5 className="text-lg font-semibold text-foreground">
                    Strong economic platforms with demand pressure
                  </h5>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <B>Everyday Nutrition</B> and <B>Vitamins &amp; Minerals</B> and{" "}
                    <B>Stress &amp; Wellbeing</B>
                  </p>
                  <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                    {"These have above Median Economic Quality + Materiality but weaker growth and/or Demand.\n\n\nThis tells us they are economically important but require a different strategic question from the high-growth platforms."}
                  </p>
                </div>
                <div className="card-surface card-hover">
                  <h5 className="text-lg font-semibold text-foreground">
                    Growth/demand opportunities with weaker economics
                  </h5>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <B>Dish Care</B> and <B>Surface Care</B>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Both show above Median Growth + Demand but below Median Economic Quality +
                    Materiality. Again, a fundamentally different situation.
                  </p>
                </div>
                <div className="card-surface card-hover">
                  <h5 className="text-lg font-semibold text-foreground">Clear pressure areas</h5>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <B>Hair Care</B> and <B>Home Fragrance</B> and <B>Laundry Care</B>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    These show combinations of below-median growth, demand and/or economics. These
                    are the categories where management needs to question the level and type of
                    resources committed.
                  </p>
                </div>
              </div>
            </Insight>

            <Insight title="Market & Customer Dynamics for Resource Allocation">
              <Prose>
                <p>
                  The commercial analysis showed that ABC Manufacturing Group's revenue growth is broadly
                  distributed across its European markets and customer segments, despite declining
                  unit volumes in almost every case. Market revenue growth ranged from <B>9.79%</B>{" "}
                  in France to <B>15.66%</B> in Belgium, while customer-segment revenue growth
                  ranged from <B>11.15%</B> among Mainstream Consumers to <B>12.82%</B> among
                  Wellness-Oriented Consumers.
                </p>
                <p>
                  Across both dimensions, revenue growth was primarily supported by increasing
                  revenue per unit rather than higher volumes. Revenue per unit increased by
                  approximately <B>14–16% across all markets and customer segments</B>, indicating a
                  consistent shift in the underlying revenue model.
                </p>
                <p>
                  The strongest growth was concentrated in{" "}
                  <B>Belgium, Switzerland and the Netherlands</B>, while{" "}
                  <B>Wellness-Oriented and Premium &amp; Conscious Consumers</B> represented the
                  faster-growing customer segments. This reinforced the case for selectively
                  reallocating resources toward commercially attractive markets and consumer groups
                  rather than treating ABC Manufacturing Group's entire footprint uniformly.
                </p>
              </Prose>
              <div className="mt-8">
                <Figure
                  src={marketCustomerCharts.url}
                  alt="Revenue and unit growth by market and by customer segment"
                />
              </div>
              <ExcelTables
                left={rpuMarket.url}
                right={rpuSegment.url}
                leftAlt="Excel table of revenue per unit trend by market"
                rightAlt="Excel table of revenue per unit trend by customer segment"
              />
            </Insight>

            <Insight title="Prioritisation">
              <Prose>
                <p>
                  The category, market, and customer analysis provided the evidence base for
                  translating the portfolio diagnosis into a set of potential transformation
                  options. Each option was assessed against its expected revenue impact, investment
                  requirement, risk, time horizon, and strategic fit.
                </p>
              </Prose>
              <div className="mt-8">
                <Figure
                  src={transformationOptions.url}
                  alt="Transformation options assessed by impact, investment, risk and fit"
                />
              </div>
              <div className="mx-auto mt-8 max-w-[850px]">
                <Prose>
                  <p>
                    The combined portfolio, market, customer, and economic analysis was translated
                    into seven potential transformation options. Rather than allocating resources
                    uniformly, each option was evaluated based on its expected revenue impact,
                    investment requirement, risk, implementation horizon, and strategic fit.
                  </p>
                  <p>
                    The resulting prioritisation identified two high-priority growth and revenue
                    transformation opportunities, supported by targeted investments in value-pool
                    improvement and market/customer reallocation. Lower-priority initiatives were
                    treated more selectively, including a stage-gated approach for Hair Care and the
                    use of portfolio rationalisation as a transformation enabler rather than a
                    standalone growth investment.
                  </p>
                  <p>
                    Against the <B>€30M three-year transformation budget</B>, the initial portfolio
                    allocates <B>€23M</B>, retaining <B>€7M</B> as an uncommitted transformation
                    reserve to preserve flexibility as initiatives progress and further evidence
                    becomes available.
                  </p>
                </Prose>
              </div>
              <div className="mt-8">
                <Figure
                  src={recommendedPortfolio.url}
                  alt="Recommended portfolio transformation allocation table"
                />
              </div>
            </Insight>
          </div>
        </CaseSection>

        {/* Strategic Recommendations */}
        <CaseSection title="Strategic Recommendations">
          <div className="mx-auto max-w-[850px]">
            <Prose>
              <p>
                The analysis identified six targeted transformation actions designed to strengthen
                ABC Manufacturing Group's growth trajectory while improving portfolio economics and resource
                allocation. Rather than pursuing broad-based investment across the portfolio, the
                recommendations focus capital on the strongest opportunities while applying
                selective and stage-gated approaches where the evidence indicates greater
                uncertainty or risk.
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
                          <li
                            key={o}
                            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
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
            If the recommended transformation portfolio is successfully implemented, ABC Manufacturing Group could
            reasonably expect to achieve the following outcomes:
          </p>
          <BulletList
            items={[
              <><B>Accelerate growth in priority categories</B>, directing investment toward stronger platforms such as Personal Hygiene, Sleep &amp; Recovery, and Bath &amp; Body where growth, demand, and economics are most favourable.</>,
              <><B>Improve revenue quality</B>, using pricing and premiumisation initiatives to increase revenue per unit and reduce reliance on volume-driven growth.</>,
              <>Generate approximately €2.5M of modeled Year-3 net revenue impact across the <B>transformation portfolio</B>, based on the estimated impact of the selected initiatives.</>,
              <>Reallocate €23M of the €30M <B>transformation budget</B> toward priority initiatives while maintaining a <B>€7M uncommitted reserve</B> to fund emerging opportunities or scale initiatives that demonstrate stronger-than-expected results.</>,
              <><B>Release resources from structurally weaker portfolio areas</B>, particularly Home Fragrance and Laundry Care, while using targeted and stage-gated interventions for categories where the strategic case remains uncertain.</>,
              <><B>Create a more balanced and resilient portfolio</B>, shifting ABC Manufacturing Group's investment mix toward scalable growth platforms, stronger revenue economics, and opportunities with clearer strategic value.</>,
            ]}
          />
        </CaseSection>

        {/* Technical Implementations */}
        <CaseSection title="Technical Implementations">
          <div className="mx-auto max-w-[850px]">
            <Prose>
              <p>
                This project was designed to simulate a real-world consulting analytics engagement,
                covering the end-to-end workflow from data preparation and modelling to portfolio
                analysis, strategic prioritisation, and transformation planning.
              </p>
            </Prose>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {technical.map((block) => (
              <div key={block.title} className="card-surface card-hover">
                <h3 className="text-lg font-semibold text-foreground">{block.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {block.items.map((item, ix) => (
                    <li
                      key={ix}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 card-surface card-hover">
            <h3 className="text-lg font-semibold text-foreground">DAX &amp; Analytical Measures</h3>
            <div className="mt-4 grid items-start gap-8 md:grid-cols-2">
              <ul className="space-y-2.5">
                {daxItems.map((item, ix) => (
                  <li key={ix} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="grid gap-4 sm:grid-cols-2">
                <img
                  src={daxMeasures.url}
                  alt="Library of DAX measures created for the model"
                  loading="lazy"
                  className="w-full rounded-lg border border-border bg-surface"
                />
                <img
                  src={daxCode.url}
                  alt="Example DAX measure code"
                  loading="lazy"
                  className="w-full rounded-lg border border-border bg-surface"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 card-surface card-hover">
            <h3 className="text-lg font-semibold text-foreground">
              Dashboard Development &amp; Visualisation
            </h3>
            <div className="mt-4 grid items-start gap-8 md:grid-cols-2">
              <ul className="space-y-2.5">
                {dashboardItems.map((item, ix) => (
                  <li key={ix} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <img
                src={dashboardImage.url}
                alt="LUXMORA Executive Overview Power BI dashboard"
                loading="lazy"
                className="w-full rounded-lg border border-border bg-surface"
              />
            </div>
          </div>
        </CaseSection>

        {/* Dashboard */}
        <CaseSection title="Dashboard">
          <Figure
            src={dashboardImage.url}
            alt="LUXMORA Executive Overview dashboard showing 2025 net revenue, units sold, revenue per unit, operating contribution margin and YoY revenue growth"
          />
          <div className="mt-6 flex justify-end">
            <a
              href="https://github.com/MonisAmir1/Strategic_Business_Transformation/tree/main/Dashboard/Dashboard_Images"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-md"
            >
              View Full Dashboard
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

        </CaseSection>

        {/* Lessons Learned */}
        <CaseSection title="Lessons Learned" reading>
          <Prose>
            <p>
              One of the lessons from this engagement was that strong analysis alone does not make a
              successful consulting engagement. In a real client environment, the quality of the
              outcome depends heavily on continuous communication between the engagement team,
              client, and stakeholders. Ensuring that the business problem is clearly understood,
              assumptions are aligned, priorities are challenged, and recommendations reflect what
              is genuinely best for the client.
            </p>
            <p>
              As this was an independently developed project, I could simulate the analytical and
              strategic decision-making process, but I could not replicate the stakeholder
              discussions, competing perspectives, feedback cycles, and alignment that would
              normally shape a real engagement. Recognising this limitation reinforced the
              importance of structured communication, stakeholder management, active listening, and
              the ability to challenge and refine an analysis collaboratively.
            </p>
            <p>
              It also strengthened my understanding that the role of an analyst is not simply to
              find what the data says, but to help different stakeholders reach a well-informed
              decision with a shared understanding of the problem, evidence, and trade-offs.
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
