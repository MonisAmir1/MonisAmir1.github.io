import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { VideoPlayer } from "@/components/portfolio/case-study/VideoPlayer";
import { Button } from "@/components/ui/button";
import { CaseSection, Prose, BulletList, Figure, B } from "@/components/portfolio/case-study/CaseSection";
import { SqlAnalysis } from "@/components/portfolio/case-study/SqlAnalysis";
import { Footer } from "@/components/portfolio/Footer";
import profileImage from "@/assets/profile-navbar.webp";
import { MobileNavigation } from "@/components/portfolio/MobileNavigation";
import dataModel from "@/assets/case5/data-model.webp";
import s3Buckets from "@/assets/case5/s3-buckets.webp";
import s3Raw from "@/assets/case5/s3-raw.webp";
import s3Processed from "@/assets/case5/s3-processed.webp";
import sagemakerNotebooks from "@/assets/case5/sagemaker-notebooks.webp";
import networkChart from "@/assets/case5/network-chart.webp";
import networkQuery from "@/assets/case5/network-query.webp";
import networkOutput from "@/assets/case5/network-output.webp";
import seasonalityChart from "@/assets/case5/seasonality-chart.webp";
import seasonalityQuery from "@/assets/case5/seasonality-query.webp";
import seasonalityOutput from "@/assets/case5/seasonality-output.webp";
import lanesChart from "@/assets/case5/lanes-chart.webp";
import lanesQuery from "@/assets/case5/lanes-query.webp";
import lanesOutput from "@/assets/case5/lanes-output.webp";
import volumeChart from "@/assets/case5/volume-chart.webp";
import volumeQuery from "@/assets/case5/volume-query.webp";
import volumeOutput from "@/assets/case5/volume-output.webp";
import forecastChart from "@/assets/case5/forecast-chart.webp";
import forecastTrain from "@/assets/case5/forecast-code-train.webp";
import forecastPredict from "@/assets/case5/forecast-code-predict.webp";
import daxMeasures from "@/assets/case5/dax-measures.webp";
import executiveDashboard from "@/assets/case5/executive-dashboard.webp";
import walkthroughVideo from "@/assets/case5/walkthrough.mp4";

const TITLE = "Transportation Network Volume Forecasting & Optimisation";
const DESCRIPTION = "Supply chain case study: forecasting daily transportation volumes and capacity risk across a European e-commerce network with AWS, Prophet, and Power BI.";

export const Route = createFileRoute("/projects/transportation-network-volume-forecasting-optimisation")({
  head: () => ({
    meta: [
      { title: `${TITLE} | Muhammad Monis Portfolio` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: `${TITLE} | Muhammad Monis Portfolio` },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudyPage,
});

const flowSteps = [
  "Business Question",
  "Data Ingestion & Modelling (S3 + Glue + Athena)",
  "Exploratory Analysis & KPI Development",
  "Volume Forecasting (SageMaker + Prophet)",
  "Bottleneck & Utilisation Analysis",
  "Dashboard & Visual Insights",
  "Strategic Recommendations",
];

const recommendations = [
  {
    n: "1",
    title: "Prioritise Capacity Review on High-Spike Lanes",
    action: "Identify and closely monitor the lanes that regularly exceed 170–180% utilisation. Establish early-warning thresholds and develop contingency capacity plans (additional carrier capacity, alternative routing, or temporary surge resources) specifically for these high-risk lanes ahead of peak periods.",
    rationale: "Although average network utilisation remains around 64–65%, several lanes experience extreme peaks. These spikes represent the most immediate operational risk and are currently masked by healthy average metrics. Addressing them directly reduces the likelihood of congestion and service degradation during high-volume periods.",
    outcomes: [
      "Reduce the frequency and severity of capacity overload events on critical lanes.",
      "Improve service reliability during peak and promotional periods.",
      "Enable more efficient allocation of surge capacity where it is most needed.",
    ],
  },
  {
    n: "2",
    title: "Strengthen Seasonal Forecast Calibration",
    action: "Refine the forecasting approach by applying different model parameters or adjustment factors for summer months and peak periods. Incorporate additional seasonal features and review forecast performance monthly, with particular attention to periods where MAPE historically exceeds 10%.",
    rationale: "Forecast accuracy is clearly seasonal: performance improves during peak periods (MAPE 6.32%) but deteriorates in summer (MAPE above 10%). A single model applied uniformly across the year underperforms in the periods that most need reliable guidance.",
    outcomes: [
      "Improve forecast accuracy during high-error periods, especially summer.",
      "Provide planners with more reliable volume projections for capacity decisions.",
      "Reduce both over-capacity costs and under-capacity service risks.",
    ],
  },
  {
    n: "3",
    title: "Focus Capacity Investment on High-Volume Nodes and Countries",
    action: "Prioritise capacity planning, monitoring, and potential expansion at Fulfilment Centres and in the highest-volume countries (particularly Germany, followed by Poland, France, Italy and Spain). Develop country- and node-type level capacity dashboards to support targeted decision-making.",
    rationale: "Volume is heavily concentrated: Fulfilment Centres handle nearly half of all volume, and a small number of countries account for the majority of network throughput. Disruptions or capacity shortfalls in these locations have an outsized impact on overall network performance.",
    outcomes: [
      "Direct capacity investment to the locations with the greatest operational impact.",
      "Improve resilience of the most critical parts of the network.",
      "Support more efficient long-term network design and resource allocation.",
    ],
  },
];

function Insight({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="border-t border-border pt-12 first:border-t-0 first:pt-0"><h3 className="text-2xl text-foreground md:text-[26px]">{title}</h3><div className="mt-4">{children}</div></div>;
}

function Sub({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-foreground">{children}</h3>;
}

function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="container-page grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:flex md:justify-between md:gap-0">
          <Link to="/" className="flex min-w-0 items-center gap-3"><img src={profileImage} alt="Monis profile" className="h-9 w-9 shrink-0 rounded-full border border-border bg-card object-cover" /><span className="truncate text-sm font-semibold tracking-tight text-foreground">Glad You're Here :)</span></Link>
          <Link to="/" hash="projects" className="hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary md:inline-flex"><ArrowLeft className="h-4 w-4" />Back to Portfolio</Link>
          <MobileNavigation />
        </nav>
      </header>

      <main>
        <section className="container-page py-14 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="fade-up"><p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Supply Chain <span className="mx-1.5 text-border">|</span> Logistics</p><h1 className="mt-4 text-4xl leading-[1.1] text-foreground md:text-5xl" style={{ fontFamily: "'Garet', Inter, sans-serif" }}>{TITLE}</h1><div className="mt-7 flex flex-wrap gap-2"><span className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground">AWS</span><span className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground">Power BI</span></div></div>
            <div className="card-surface !p-0 overflow-hidden">
              <VideoPlayer src={walkthroughVideo} title="Project walkthrough video" />
            </div>
          </div>
        </section>

        <CaseSection title="Executive Project Summary" reading><Prose>
          <p>ABC Buy, a fictional large European e-commerce company, operates a <B>complex multi-node transportation network</B> spanning fulfilment centres, cross-docks, sortation centres and last-mile stations across key markets including <B>Germany, France, Poland, Italy, Spain and Luxembourg</B>. <B>Accurate daily volume forecasting and capacity visibility are essential</B> to maintaining delivery performance and controlling costs, particularly during peak periods.</p>
          <p>The objective of this project was to build a practical forecasting and network-performance analytics solution that would give transportation planners clear visibility into historical volumes, capacity utilisation, forecast accuracy and forward-looking demand. Using an <B>AWS-based data pipeline (S3, Glue, Athena), a Prophet forecasting model</B> developed in SageMaker, and an interactive Power BI dashboard, I analysed <B>18 months of daily transportation data covering 58 nodes, 16 carriers and 220 lanes</B>.</p>
          <p>The analysis showed that while average network utilisation remained moderate at approximately <B>64%</B> and overall forecast accuracy (MAPE) stood at <B>8.07%</B>, significant risks were hidden beneath the averages. Certain lanes regularly experienced utilisation spikes above <B>170–180%</B>, forecast error increased markedly during summer months, and volume was heavily concentrated in Germany and in Fulfilment Centres. A forecast was produced to support proactive capacity planning.</p>
          <p>These findings led to targeted recommendations focused on <B>prioritising high-spike lanes, improving seasonal forecast calibration, and concentrating capacity attention on the highest-volume nodes and countries</B>. The project demonstrates how cloud analytics and time-series forecasting can be combined to turn operational transportation data into clear, actionable insights for network planning.</p>
        </Prose></CaseSection>

        <CaseSection title="Business Context" reading><Prose>
          <p><B>ABC Buy</B> is a fictional large-scale European e-commerce company operating a <B>complex multi-node fulfilment and transportation network</B> across the continent. The company manages a network of <B>fulfilment centres, cross-docks, sortation centres, and last-mile stations</B> spanning key markets including Germany, France, Poland, Italy, Spain, the Netherlands, Belgium, and Luxembourg.</p>
          <p>Its transportation network handles high daily package volumes moving between nodes via linehaul, middle-mile, and last-mile carriers. Therefore, accurate volume forecasting and capacity planning are critical, particularly during peak periods such as <B>Black Friday and the Christmas season</B>.</p>
          <p>As the network continues to scale, ABC Buy requires reliable, data-driven visibility into daily volumes, capacity utilisation, and forecast accuracy to support proactive transportation network planning and operational decision-making across its European operations.</p>
        </Prose></CaseSection>

        <CaseSection title="Problem Statement & Business Challenge" reading><Prose><p>While the company collects extensive operational data, it lacked a <B>unified analytical view that combined historical volumes, capacity utilisation, and forward-looking forecasts</B>. The core challenge was the absence of a reliable, data-driven system to accurately forecast network volume at a daily level and identify capacity bottlenecks before they impact service levels. Measure and improve forecast accuracy across lanes and periods, and support proactive capacity planning, particularly ahead of peak seasons.</p></Prose></CaseSection>

        <CaseSection title="Why This Problem Matters" reading><Prose>
          <p>In a high-volume European e-commerce transportation network, even modest forecast errors or delayed visibility into capacity constraints can quickly escalate into operational disruption. Over-forecasting leads to excess capacity and unnecessary cost, while under-forecasting results in congestion, delayed deliveries, and pressure on last-mile operations.</p>
          <p>Without accurate daily volume forecasts and clear identification of bottleneck lanes, ABC Buy risks reduced network reliability during peak periods, higher transportation costs, and weaker service performance. In a competitive market where delivery speed and reliability are critical customer expectations, the inability to anticipate volume shifts and capacity constraints directly affects <B>operational efficiency, cost control, and customer experience</B>.</p>
        </Prose></CaseSection>

        <CaseSection title="Objective" reading><p className="mb-6 text-base text-muted-foreground md:text-[17px]">The objective of this project was to:</p><BulletList items={[<>Build a reliable daily volume forecasting capability for ABC Buy’s European transportation network using historical operational data.</>, <>Identify capacity bottlenecks, forecast accuracy patterns, and periods of elevated risk across lanes and node types.</>, <>Develop clear, evidence-based insights and recommendations to support proactive capacity planning and improved network performance.</>]} /></CaseSection>

        <CaseSection title="My Role" reading><p className="mb-6 text-base text-muted-foreground md:text-[17px]">As the BI/Data Analyst, I was responsible for:</p><BulletList items={[<>Defining the end-to-end analytical approach for transportation volume forecasting and network performance analysis.</>, <>Designing the data model, generating realistic synthetic datasets, and building the full AWS data pipeline (S3, Glue, Athena).</>, <>Developing and evaluating a Prophet-based forecasting model in SageMaker, and translating results into actionable capacity and bottleneck insights.</>, <>Building an interactive Power BI dashboard and preparing clear, business-focused recommendations for transportation network planning.</>]} /></CaseSection>

        <CaseSection title="Analytical Approach">
          <div className="mx-auto max-w-[850px]"><Sub>Data Available</Sub><div className="mt-4"><BulletList items={[<>Network node and location data</>, <>Carrier and lane master data</>, <>Daily transportation volume</>, <>Calendar and peak-period attributes</>]} /></div></div>
          <div className="mx-auto mt-8 max-w-[920px] space-y-10">
            <Figure src={dataModel} alt="Data model linking node, carrier, lane, calendar, volume and forecast tables" />
            <div><Sub>S3</Sub><div className="mt-4"><Figure src={s3Buckets} alt="Amazon S3 general purpose buckets" /></div></div>
            <div><Sub>S3 Buckets</Sub><div className="mt-4 grid gap-6 lg:grid-cols-2"><Figure src={s3Raw} alt="Raw transport data S3 bucket folders" /><Figure src={s3Processed} alt="Processed transport data S3 bucket folders" /></div></div>
            <div><Sub>Notebook Instances/SageMaker</Sub><div className="mt-4"><Figure src={sagemakerNotebooks} alt="Amazon SageMaker notebook instances" /></div></div>
          </div>
          <div className="mx-auto mt-10 max-w-[850px]"><Prose><p>The analysis used 18 months of synthetic but realistic daily transportation data (January 2024 – June 2025) covering 58 nodes, 16 carriers, and 220 lanes across ABC Buy’s European network. Data was organised in a <B>modern data-lake architecture on AWS</B>: raw files were stored in <B>S3, catalogued with Glue, and queried via Athena. A Prophet forecasting model was developed in SageMaker</B> to generate a 90-day forward-looking volume forecast. The cleaned historical data, performance metrics, and forecasts were then modelled in Power BI to support network performance analysis, bottleneck identification, and capacity planning insights.</p></Prose></div>
          <div className="mx-auto mt-12 flex max-w-md flex-col items-center">{flowSteps.map((step, i) => <div key={step} className="flex w-full flex-col items-center"><div className={`w-full rounded-xl border px-5 py-3.5 text-center text-sm font-medium shadow-soft ${i === 0 || i === flowSteps.length - 1 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground"}`}>{step}</div>{i < flowSteps.length - 1 && <span className="my-1 text-lg leading-none text-primary">↓</span>}</div>)}</div>
        </CaseSection>

        <CaseSection title="Key Insights"><div className="space-y-12">
          <Insight title="Overall Network Performance"><Prose><p>The analysis began by establishing a clear baseline of network performance across the full 18-month period. Between January 2024 and June 2025, ABC Buy’s European transportation network handled approximately <B>115 million packages</B>, with planned volume sitting slightly higher at <B>116 million</B>. Average capacity utilisation stood at <B>64.29%</B>, while overall forecast accuracy (MAPE) was <B>8.07%</B>. These figures indicate a generally well-managed network, but also leave room for improvement in both capacity planning and forecast precision.</p></Prose><div className="mt-8"><Figure src={networkChart} alt="Network KPIs and monthly actual vs planned volume" /></div><SqlAnalysis query={networkQuery} output={networkOutput} /></Insight>
          <Insight title="Strong Seasonality and Peak Impact"><Prose><p>Volume and forecast performance varied significantly across different periods of the year. Peak periods (primarily November–December) accounted for a disproportionately high share of total volume and delivered better forecast accuracy (<B>MAPE of 6.32%</B>). In contrast, summer months (June–August) showed a clear drop in volume combined with higher forecast error (MAPE above <B>10%</B>). Non-peak periods overall carried the majority of volume but with slightly weaker accuracy (MAPE <B>8.29%</B>). This pattern highlights that forecast reliability and capacity pressure are strongly seasonal, with peak periods demanding the highest operational readiness despite better predictive performance.</p></Prose><div className="mt-8"><Figure src={seasonalityChart} alt="Peak vs non-peak volume and MAPE comparison" /></div><SqlAnalysis query={seasonalityQuery} output={seasonalityOutput} /></Insight>
          <Insight title="Capacity Bottlenecks Exist Despite Moderate Average Utilisation"><Prose><p>Although average network utilisation remained moderate at around <B>64–65%</B>, a closer examination of individual lanes revealed significant hidden risk. Several lanes regularly experienced maximum utilisation spikes above <B>170–180%</B>, indicating periods of severe capacity pressure. While no single lane dominated the average utilisation ranking, the presence of these extreme peaks shows that average metrics alone mask operational vulnerability. These high-spike lanes represent the most immediate candidates for capacity review and contingency planning, particularly ahead of peak seasons.</p></Prose><div className="mt-8"><Figure src={lanesChart} alt="Top 10 lanes by maximum utilisation" /></div><SqlAnalysis query={lanesQuery} output={lanesOutput} /></Insight>
          <Insight title="Volume Distribution in Countries and Node Types"><Prose><p>Volume across the European network is highly concentrated. <B>Germany</B> alone accounted for the largest share of total volume, followed by <B>Poland, France, Italy and Spain</B>. At the same time, <B>Fulfilment Centres</B> handled nearly half of all volume, significantly more than <B>Sortation Centres, Cross Docks or Last Mile Stations</B>. This concentration means that capacity constraints or disruptions at a relatively small number of key nodes and countries can have an outsized impact on overall network performance. It also suggests that targeted capacity investment and closer monitoring of these high-volume locations would deliver the greatest operational benefit.</p></Prose><div className="mx-auto mt-8 max-w-[640px]"><Figure src={volumeChart} alt="Volume distribution by country and node type" /></div><SqlAnalysis query={volumeQuery} output={volumeOutput} /></Insight>
          <Insight title="Forward-Looking Risk from the Forecast"><Prose><p>The Prophet forecast provides a forward-looking view of expected network volume. The model projects continued weekly seasonality, with clear drops on weekends, and an overall volume trajectory that remains sensitive to the same seasonal patterns observed historically. Average forecasted daily volume sits at approximately <B>204,000 packages</B>, with a wide confidence range that reflects residual uncertainty. This outlook enables transportation planners to anticipate periods of elevated demand and to stress-test capacity on the high-risk lanes identified earlier, supporting more proactive rather than reactive network planning.</p></Prose><div className="mt-8"><Figure src={forecastChart} alt="Actual vs forecasted monthly volume with confidence interval" /></div><SqlAnalysis label="View Forecast/SageMaker Code" queryLabel="Model Training" outputLabel="Forecast Output" query={forecastTrain} output={forecastPredict} queryAlt="Prophet model training code in SageMaker" outputAlt="Prophet 90-day forecast generation code and output" /></Insight>
        </div></CaseSection>

        <CaseSection title="Strategic Recommendations"><div className="mx-auto mb-12 max-w-[850px]"><Prose><p>The analysis shows that ABC Buy’s European transportation network is generally well-managed, with moderate average utilisation and acceptable overall forecast accuracy. However, significant risks remain in the form of high capacity spikes on specific lanes, strong seasonal volatility, and concentration of volume in a limited number of countries and node types. The recommendations below focus on converting these insights into proactive capacity planning and improved forecast reliability.</p></Prose></div><div className="grid gap-6 lg:grid-cols-3">{recommendations.map((r) => <article key={r.n} className="card-surface card-hover flex flex-col"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Recommendation {r.n}</p><h3 className="mt-3 text-xl font-semibold text-foreground">{r.title}</h3><div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground"><div><h4 className="font-semibold text-foreground">Action</h4><p className="mt-2">{r.action}</p></div><div><h4 className="font-semibold text-foreground">Business Rationale</h4><p className="mt-2">{r.rationale}</p></div><div><h4 className="font-semibold text-foreground">Expected Outcome</h4><BulletList items={r.outcomes} /></div></div></article>)}</div></CaseSection>

        <CaseSection title="Expected Business Impact" reading><p className="mb-6 text-base text-muted-foreground md:text-[17px]">If the recommended actions are successfully implemented, ABC Buy could reasonably expect to achieve the following outcomes:</p><BulletList items={[<><B>Reduce the frequency of severe capacity overload</B> events (utilisation above 170%) on high-risk lanes, lowering the likelihood of delivery delays and network congestion during peak periods.</>, <>Improve overall forecast accuracy, particularly in summer months, bringing high-error periods closer to the <B>6–7% MAPE</B> range already achieved during peak season.</>, <><B>Enable more efficient allocation of surge capacity and carrier resources</B> by focusing attention on a smaller number of critical lanes, countries and Fulfilment Centres.</>, <>Support more proactive capacity planning ahead of Black Friday and Christmas, <B>reducing reactive last-minute adjustments and associated cost premiums</B>.</>, <><B>Strengthen network reliability and cost control</B> by converting average-level visibility into targeted, actionable monitoring of the highest-impact parts of the European transportation network.</>]} /></CaseSection>

        <CaseSection title="Technical Implementations"><div className="mx-auto max-w-[850px]"><Prose><p>This project was designed to simulate a realistic end-to-end data analytics and forecasting workflow for a large-scale European transportation network, covering data ingestion, cloud analytics, machine learning forecasting, and executive reporting.</p></Prose></div><div className="mt-12 space-y-6">
          <article className="card-surface card-hover"><h3 className="mb-5 text-lg font-semibold text-foreground">Cloud Data Architecture (AWS)</h3><BulletList items={[<>Designed a modern data-lake architecture using Amazon S3 for raw and processed zones, with clear folder structures for dimensions, facts and forecasts.</>, <>Catalogued datasets with AWS Glue and queried them using Amazon Athena, enabling serverless SQL analysis on large daily volume data.</>, <>Organised data following a practical Bronze–Silver–Gold style approach, separating raw files, cleaned analytical tables and business-ready views.</>]} /></article>
          <article className="card-surface card-hover"><h3 className="mb-5 text-lg font-semibold text-foreground">Data Preparation & Exploratory Analysis</h3><BulletList items={[<>Created external tables in Athena for all dimension and fact tables, handling date-format challenges and building cleaned views for reliable analysis.</>, <>Developed reusable SQL views (daily network summary, lane performance summary, monthly summary) to support consistent KPI calculation and downstream reporting.</>, <>Performed exploratory analysis to quantify volume patterns, capacity utilisation, forecast error (MAPE), and peak vs non-peak differences.</>]} /></article>
          <article className="card-surface card-hover"><h3 className="mb-5 text-lg font-semibold text-foreground">Forecasting with SageMaker</h3><BulletList items={[<>Built and trained a Prophet time-series model in Amazon SageMaker to forecast total daily network volume.</>, <>Generated forecast outputs including point forecasts and confidence intervals, then saved results back to S3 in both CSV and Parquet formats.</>, <>Validated forecast behaviour against known weekly and seasonal patterns observed in the historical data.</>]} /></article>
          <article className="card-surface card-hover"><h3 className="text-lg font-semibold text-foreground">Business Intelligence & Reporting</h3><div className="mt-5 grid items-center gap-8 md:grid-cols-[1fr_auto]"><BulletList items={[<>Modelled the data in Power BI with a star-schema style structure linking fact, dimension and forecast tables.</>, <>Created key DAX measures for volume, utilisation, MAPE and forecast metrics, and designed a three-page interactive dashboard covering executive overview, network performance and forward-looking forecasts.</>, <>Combined historical analysis with predictive insights to produce clear, actionable recommendations for transportation network planning.</>]} /><img src={daxMeasures} alt="Power BI measures used in the transportation dashboard" loading="lazy" className="mx-auto max-h-[460px] w-auto rounded-lg border border-border bg-surface" /></div></article>
        </div></CaseSection>

        <CaseSection title="Dashboard"><Figure src={executiveDashboard} alt="ABC Buy transportation network executive overview dashboard" /><div className="mt-6 flex justify-end"><Button asChild variant="outline" className="h-auto rounded-xl border-border bg-card px-4 py-2 text-foreground"><a href="https://github.com/MonisAmir1/Transportation_Network_Volume_Forecasting_And_Optimisation" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" />View Full Dashboard</a></Button></div></CaseSection>

        <CaseSection title="Lessons Learned" reading><Prose>
          <p>This project reinforced that strong analytical work in operations is less about producing a single impressive model and more about building a complete, usable decision-support system. Starting from a clear business question, designing a realistic data foundation, analysing historical patterns, generating a forward-looking forecast, and finally packaging the insights into a clear dashboard created far more value than any individual step on its own.</p>
          <p>I also learned the importance of looking beyond averages. Healthy network-level metrics can easily hide localised risks. Only by drilling into lane-level utilisation spikes and seasonal differences did the real operational vulnerabilities become visible. This strengthened my habit of always questioning whether a summary number is telling the full story.</p>
          <p>Finally, working end-to-end on AWS, from S3 and Athena through SageMaker to Power BI, deepened my confidence in designing practical cloud analytics workflows. It confirmed that I enjoy the full cycle of turning a business problem into structured data, analysis, prediction, and actionable recommendations, and it has further motivated me to keep developing both my technical depth and my ability to communicate insights clearly to decision-makers.</p>
        </Prose><div className="mt-12 flex justify-center"><Button asChild size="lg" className="h-auto rounded-xl px-7 py-3.5 text-base"><Link to="/" hash="projects"><ArrowLeft className="h-4 w-4" />Back to Portfolio</Link></Button></div></CaseSection>
      </main>
      <Footer />
    </div>
  );
}
