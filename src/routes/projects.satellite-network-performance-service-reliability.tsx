import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { VideoPlayer } from "@/components/portfolio/case-study/VideoPlayer";
import { Button } from "@/components/ui/button";
import { CaseSection, Prose, BulletList, Figure, B } from "@/components/portfolio/case-study/CaseSection";
import { SqlAnalysis } from "@/components/portfolio/case-study/SqlAnalysis";
import { Footer } from "@/components/portfolio/Footer";
import profileImage from "@/assets/profile-navbar.png.asset.json";
import dataModel from "@/assets/case6/data-model.png.asset.json";
import baselineChart from "@/assets/case6/baseline-chart.png.asset.json";
import baselineQuery from "@/assets/case6/baseline-query.png.asset.json";
import baselineOutput from "@/assets/case6/baseline-output.png.asset.json";
import geoChart from "@/assets/case6/geo-chart.png.asset.json";
import geoQuery from "@/assets/case6/geo-query.png.asset.json";
import geoOutput from "@/assets/case6/geo-output.png.asset.json";
import customersChart from "@/assets/case6/customers-chart.png.asset.json";
import customersQuery from "@/assets/case6/customers-query.png.asset.json";
import customersOutput from "@/assets/case6/customers-output.png.asset.json";
import servicesChart from "@/assets/case6/services-chart.png.asset.json";
import servicesQuery from "@/assets/case6/services-query.png.asset.json";
import servicesOutput from "@/assets/case6/services-output.png.asset.json";
import causeChart from "@/assets/case6/cause-chart.png.asset.json";
import causeQuery from "@/assets/case6/cause-query.png.asset.json";
import causeOutput from "@/assets/case6/cause-output.png.asset.json";
import daxMeasures from "@/assets/case6/dax-measures.png.asset.json";
import executiveDashboard from "@/assets/case6/executive-dashboard.png.asset.json";
import walkthroughVideo from "@/assets/case6/walkthrough.mp4.asset.json";

const TITLE = "Satellite Network Performance & Service Reliability";
const DESCRIPTION = "SpaceTech case study: analysing 24 months of satellite network outages, SLA breaches and customer impact with SQL Server and Power BI.";

export const Route = createFileRoute("/projects/satellite-network-performance-service-reliability")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Muhammad Monis` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: `${TITLE} — SpaceTech Case Study` },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudyPage,
});

const flowSteps = [
  "Business Question",
  "Data Modelling (Dimensional Design)",
  "Overall Reliability Baseline",
  "Geographic & Station Concentration Analysis",
  "Customer & Service Impact Analysis",
  "SLA Performance Diagnosis",
  "Strategic Recommendations",
];

const recommendations = [
  {
    n: "1",
    title: "Prioritise Reliability Improvement at High-Outage Ground Stations",
    action: "Focus engineering and operational attention on the ground stations with the highest outage volumes, particularly Frankfurt Gateway, Berlin Teleport, Luxembourg Teleport, and other repeatedly affected sites in Western and Central Europe. Conduct targeted root-cause reviews, strengthen preventive maintenance, and improve monitoring at these locations.",
    rationale: "Outages are geographically concentrated. A relatively small number of ground stations account for a disproportionate share of incidents. Improving performance at these sites offers a more efficient path to reducing overall disruption than spreading effort evenly across the entire network.",
    outcomes: [
      "Reduce outage frequency at the most problematic locations.",
      "Lower the volume of SLA breaches originating from key European hubs.",
      "Improve service stability for customers routed through these stations.",
    ],
  },
  {
    n: "2",
    title: "Strengthen Reliability on High-SLA Critical Services",
    action: "Review and tighten operational processes, redundancy, and incident response for services with high availability targets that currently show elevated breach rates, particularly Government Secure Link, Defence Communications, Diplomatic Network, SCADA & Critical Infrastructure, and Cellular Backhaul.",
    rationale: "These services carry the highest customer expectations and contractual commitments. Continued under-performance directly increases commercial, reputational, and relationship risk with government, defence, and critical infrastructure customers.",
    outcomes: [
      "Improve availability performance on the most sensitive service types.",
      "Reduce SLA penalties and customer escalations on critical contracts.",
      "Better align delivered reliability with the commitments made to high-value customers.",
    ],
  },
  {
    n: "3",
    title: "Address Equipment Failure as the Primary Root Cause",
    action: "Treat Equipment Failure as a strategic reliability priority. Strengthen preventive maintenance programmes, enhance real-time monitoring and alerting, and review ageing or failure-prone assets, especially on high-traffic satellites and ground stations.",
    rationale: "Equipment Failure is the dominant cause of outages and contributes heavily to SLA breaches. Because this driver is largely internal and controllable, it represents the highest-leverage opportunity for sustained improvement in network reliability.",
    outcomes: [
      "Reduce the overall frequency and duration of outages.",
      "Decrease the proportion of incidents that escalate into SLA breaches.",
      "Build a more resilient technical foundation for long-term service performance.",
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
        <nav className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3"><img src={profileImage.url} alt="Monis profile" className="h-9 w-9 rounded-full border border-border bg-card object-cover" /><span className="text-sm font-semibold tracking-tight text-foreground">Monis Portfolio</span></Link>
          <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><ArrowLeft className="h-4 w-4" />Back to Portfolio</Link>
        </nav>
      </header>

      <main>
        <section className="container-page py-14 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="fade-up"><p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">SpaceTech <span className="mx-1.5 text-border">|</span> Space Defence</p><h1 className="mt-4 text-4xl leading-[1.1] text-foreground md:text-5xl" style={{ fontFamily: "'Garet', Inter, sans-serif" }}>{TITLE}</h1><div className="mt-7 flex flex-wrap gap-2"><span className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground">SQL</span><span className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground">Power BI</span></div></div>
            <div className="card-surface !p-0 overflow-hidden">
              <VideoPlayer src={walkthroughVideo.url} title="Project walkthrough video" />
            </div>
          </div>
        </section>

        <CaseSection title="Executive Project Summary" reading><Prose>
          <p>ABC Communications, a Luxembourg-based satellite communications operator, <B>provides broadband, mobility, and secure connectivity services across Europe, the Middle East, Africa, and selected global markets</B>. As its network has grown, the company needed clearer visibility into service reliability, specifically where outages occur, how long they last, which customers are most affected, and which services are missing reliability targets.</p>
          <p>The objective of this project was to analyse 24 months of outage and service performance data to identify the main drivers of disruption and support targeted reliability improvements. <B>Using SQL Server and Power BI, I modelled the data dimensionally and examined outage patterns by region, ground station, satellite, customer segment, and service type</B>.</p>
          <p>The analysis found that <B>5,840 outages occurred over the period, with 27.7% resulting in SLA breaches</B>. Disruptions were heavily concentrated in Western and Central Europe, particularly at key ground stations in Germany and Luxembourg. High-value Enterprise and Government customers were among the most affected, and several critical high-SLA services showed elevated breach rates. Equipment Failure emerged as the dominant root cause.</p>
          <p>These findings led to recommendations focused on prioritising high-outage ground stations, strengthening reliability on critical services, and addressing Equipment Failure as the primary technical driver. <B>The project demonstrates how structured operational analytics can turn incident data into clear priorities for improving satellite network reliability and reducing customer impact</B>.</p>
        </Prose></CaseSection>

        <CaseSection title="Business Context" reading><Prose>
          <p>ABC Communications is a fictional Luxembourg-based satellite communications operator providing <B>broadband, mobility, and secure connectivity services across Europe, the Middle East, Africa, and selected global coverage areas</B>. The company manages a multi-satellite fleet supported by a network of ground stations and gateways, serving telecom operators, government and defence customers, maritime and aviation clients, and large enterprises.</p>
          <p>Service reliability is a core commitment. <B>Customers expect high availability, rapid incident resolution, and minimal disruption to critical communications</B>. As the network has grown in scale and complexity, ABC Communications requires clearer, data-driven visibility into where outages occur, how long they last, which customers and services are most affected, and where reliability performance falls short of expectations.</p>
        </Prose></CaseSection>

        <CaseSection title="Problem Statement & Business Challenge" reading><Prose><p>ABC Communications records individual service outages, but lacks a unified analytical view of network reliability and customer impact. Operational teams can see that disruptions occur, yet they do not have clear answers to critical questions such as <B>where outages are concentrated, which ground stations or regions perform worst, which customers are most affected, and which services consistently miss reliability targets</B>. The core challenge is therefore to move from fragmented incident logging to a structured, data-driven understanding of service performance and its business impact.</p></Prose></CaseSection>

        <CaseSection title="Why This Problem Matters" reading><Prose><p>Without clear visibility into where and why outages occur, ABC Communications risks treating symptoms rather than <B>addressing the underlying drivers of poor reliability</B>. This makes it harder to prioritise engineering effort, protect high-value government and enterprise customers, and improve overall network performance in a targeted and cost-effective way.</p></Prose></CaseSection>

        <CaseSection title="Objective" reading><p className="mb-6 text-base text-muted-foreground md:text-[17px]">The objective of this project was to:</p><BulletList items={[<>Analyse satellite network outages and service performance to identify where, when, and why disruptions occur.</>, <>Quantify the impact of outages on customers, service types, and regions, including SLA breach rates.</>, <>Develop clear, evidence-based recommendations to improve network reliability and reduce the customer impact of service disruptions.</>]} /></CaseSection>

        <CaseSection title="My Role" reading><p className="mb-6 text-base text-muted-foreground md:text-[17px]">As the Data Analyst, I was responsible for:</p><BulletList items={[<>Defining the analytical approach to assess satellite network reliability and service impact.</>, <>Designing the data model and generating a realistic synthetic dataset covering 24 months of outage and performance data.</>, <>Performing structured SQL analysis to identify outage patterns, regional concentrations, customer impact, and SLA performance issues.</>, <>Building an interactive Power BI dashboard and translating the findings into practical recommendations for improving network reliability.</>]} /></CaseSection>

        <CaseSection title="Analytical Approach">
          <div className="mx-auto max-w-[850px]"><Sub>Data Available</Sub><div className="mt-4"><BulletList items={[<>Satellite and orbital characteristics</>, <>Ground station / gateway location and status data</>, <>Customer and service type information</>, <>Outage incident records</>, <>Daily service performance and availability metrics</>]} /></div></div>
          <div className="mx-auto mt-8 max-w-[920px]"><Figure src={dataModel.url} alt="Dimensional data model with outage and service performance fact tables" /></div>
          <div className="mx-auto mt-10 max-w-[850px]"><Prose><p>The analysis used 24 months of synthetic but realistic operational data (January 2024 – December 2025) covering ABC Communications’ satellite fleet, ground stations, customers, and service types. <B>Data was modelled in a dimensional structure and analysed using SQL Server</B>. Outage frequency, duration, SLA breaches, customer impact, and availability trends were examined progressively, moving from overall network performance to regional, station-level, customer, and service-type insights. <B>Findings were then visualised in Power BI to support clear interpretation and recommendation development</B>.</p></Prose></div>
          <div className="mx-auto mt-12 flex max-w-md flex-col items-center">{flowSteps.map((step, i) => <div key={step} className="flex w-full flex-col items-center"><div className={`w-full rounded-xl border px-5 py-3.5 text-center text-sm font-medium shadow-soft ${i === 0 || i === flowSteps.length - 1 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground"}`}>{step}</div>{i < flowSteps.length - 1 && <span className="my-1 text-lg leading-none text-primary">↓</span>}</div>)}</div>
        </CaseSection>

        <CaseSection title="Key Insights"><div className="space-y-12">
          <Insight title="Overall Reliability Baseline"><Prose><p>The analysis began by establishing a clear baseline of network reliability across the full 24-month period. ABC Communications recorded <B>5,840 outages</B>, with an average duration of <B>57 minutes</B>. <B>Critically, 27.7% of all outages resulted in an SLA breach</B>. While the majority of incidents were classified as Minor, Critical outages, though fewer in number, lasted significantly longer (average 298 minutes) and had a disproportionately high impact on customers. These figures confirm that service reliability is a material operational issue rather than a marginal one.</p></Prose><div className="mx-auto mt-8 max-w-[760px]"><Figure src={baselineChart.url} alt="Outage KPIs and outages by severity" /></div><SqlAnalysis query={baselineQuery.url} output={baselineOutput.url} /></Insight>
          <Insight title="Geographic Concentration of Outages"><Prose><p>Outages are not evenly distributed across the network. <B>Western Europe and Central Europe</B> account for the highest volume of incidents, with key ground stations in <B>Germany (Frankfurt Gateway, Berlin Teleport, Aviation Hub Frankfurt) and Luxembourg (Luxembourg Teleport, Betzdorf Gateway)</B> appearing consistently among the most affected locations. This geographic concentration indicates that reliability risk is clustered rather than systemic across all regions, creating a clear prioritisation opportunity for targeted investigation and improvement efforts.</p></Prose><div className="mt-8"><Figure src={geoChart.url} alt="Top 5 regions and ground stations by outages" /></div><SqlAnalysis query={geoQuery.url} output={geoOutput.url} /></Insight>
          <Insight title="High-Impact Customers Are Being Affected"><Prose><p>Several of the most frequently affected customers belong to high-value segments, particularly Enterprise and Government. Customers such as <B>Continental Industry Group, MedTech Global, Gulf Enterprise Network, Luxembourg Defence Network, and Saudi National Network</B> appear among those experiencing the highest number of outages. This is significant because these segments typically operate under stricter reliability expectations and higher service tiers. The data shows that the reliability problem is not limited to lower-tier customers, it is directly affecting organisations for whom service continuity is most critical.</p></Prose><div className="mx-auto mt-8 max-w-[760px]"><Figure src={customersChart.url} alt="Top 10 most affected customers and SLA breach rate by segment" /></div><SqlAnalysis query={customersQuery.url} output={customersOutput.url} /></Insight>
          <Insight title="Critical Services Are Missing Reliability Targets"><Prose><p>Several service types that carry high availability targets are among those with the highest SLA breach rates. <B>SCADA & Critical Infrastructure, Cellular Backhaul, Government Secure Link, Diplomatic Network, and Defence Communications</B> all show elevated breach percentages despite having SLA targets of <B>99.5% or higher</B>. This indicates a meaningful gap between the reliability levels the business commits to and the performance actually delivered on some of its most sensitive services. Closing this gap should be a priority, as these services typically support critical operations for government, enterprise, and infrastructure customers.</p></Prose><div className="mt-8"><Figure src={servicesChart.url} alt="Service type performance: outages and SLA breaches" /></div><SqlAnalysis query={servicesQuery.url} output={servicesOutput.url} /></Insight>
          <Insight title="Equipment Failure Is the Dominant Driver"><Prose><p><B>Equipment Failure</B> is by far the leading cause of outages, accounting for the majority of incidents and a substantial share of SLA breaches. <B>Weather, Planned Maintenance, Interference, and Unknown causes contribute far less in comparison</B>. This finding is important because it points to a predominantly technical and asset-related root cause rather than external or uncontrollable factors. Improving preventive maintenance, monitoring, and equipment resilience therefore offers the clearest lever for reducing both outage frequency and the resulting customer impact.</p></Prose><div className="mt-8"><Figure src={causeChart.url} alt="Outages by cause" /></div><SqlAnalysis query={causeQuery.url} output={causeOutput.url} /></Insight>
        </div></CaseSection>

        <CaseSection title="Strategic Recommendations"><div className="mx-auto mb-12 max-w-[850px]"><Prose><p>The analysis shows that ABC Communications faces a material reliability challenge. More than one in four outages result in an SLA breach, high-value customers are regularly affected, and several critical services are missing their availability targets. The recommendations below focus on addressing the clearest drivers of disruption and concentrating improvement effort where it will have the greatest impact.</p></Prose></div><div className="grid gap-6 lg:grid-cols-3">{recommendations.map((r) => <article key={r.n} className="card-surface card-hover flex flex-col"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Recommendation {r.n}</p><h3 className="mt-3 text-xl font-semibold leading-snug text-foreground">{r.title}</h3><div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground"><div><p className="font-semibold text-foreground">Action</p><p className="mt-1.5">{r.action}</p></div><div><p className="font-semibold text-foreground">Business Rationale</p><p className="mt-1.5">{r.rationale}</p></div><div><p className="font-semibold text-foreground">Expected Outcome</p><ul className="mt-1.5 space-y-1.5">{r.outcomes.map((o) => <li key={o} className="flex gap-2"><span className="text-primary">•</span><span>{o}</span></li>)}</ul></div></div></article>)}</div></CaseSection>

        <CaseSection title="Expected Business Impact" reading><p className="mb-6 text-base text-muted-foreground md:text-[17px]">If the recommended actions are successfully implemented, ABC Communications could reasonably expect to achieve the following outcomes:</p><BulletList items={[<><B>Reduce the overall volume of service outages</B> by focusing improvement effort on the highest-impact ground stations and the dominant root cause (Equipment Failure).</>, <>Lower the SLA breach rate from the current 27.7%, <B>reducing exposure to penalties and customer escalations</B>.</>, <><B>Improve reliability performance</B> on critical high-SLA services used by government, defence, and enterprise customers.</>, <><B>Decrease the frequency with which high-value customers experience</B> repeated disruptions, supporting stronger long-term commercial relationships.</>, <>Enable more targeted and efficient allocation of engineering and maintenance resources by <B>concentrating attention where the data shows the greatest reliability risk</B>.</>]} /></CaseSection>

        <CaseSection title="Technical Implementations"><div className="mx-auto max-w-[850px]"><Prose><p>This project was designed to simulate a realistic operational analytics workflow for a satellite communications provider, covering the full path from data modelling to executive reporting using SQL Server and Power BI.</p></Prose></div><div className="mt-12 space-y-6">
          <article className="card-surface card-hover"><h3 className="mb-5 text-lg font-semibold text-foreground">Data Architecture & Modelling</h3><BulletList items={[<>Designed a dimensional model with clear separation between dimension and fact tables to support flexible reliability analysis.</>, <>Built dimension tables for satellites, ground stations, regions, customers, service types, and calendar.</>, <>Created two fact tables: one at outage/incident level and one at daily service performance level.</>]} /></article>
          <article className="card-surface card-hover"><h3 className="mb-5 text-lg font-semibold text-foreground">SQL Data Preparation & Analysis</h3><BulletList items={[<>Generated a realistic 24-month synthetic dataset covering outages, causes, severity, SLA impact, and customer effects.</>, <>Performed structured exploratory analysis using T-SQL to measure outage volume, duration, geographic concentration, customer impact, and service-level reliability.</>, <>Developed reusable analytical queries to support progressive diagnosis from network-wide performance down to station, customer, and service-type insights.</>]} /></article>
          <article className="card-surface card-hover"><h3 className="text-lg font-semibold text-foreground">Business Intelligence & Reporting</h3><div className="mt-5 grid items-center gap-8 md:grid-cols-[1fr_auto]"><BulletList items={[<>Built a Power BI data model with defined relationships between fact and dimension tables.</>, <>Created DAX measures for key reliability KPIs, including total outages, SLA breach rate, average duration, customers affected, and availability.</>, <>Designed a three-page interactive dashboard covering executive overview, network & location performance, and customer & service impact.</>]} /><img src={daxMeasures.url} alt="Power BI measures used in the reliability dashboard" loading="lazy" className="mx-auto max-h-[460px] w-auto rounded-lg border border-border bg-surface" /></div></article>
          <article className="card-surface card-hover"><h3 className="mb-5 text-lg font-semibold text-foreground">Data Visualisation & Storytelling</h3><BulletList items={[<>Used trend, ranking, and comparative visuals to highlight outage concentration, high-impact customers, and underperforming critical services.</>, <>Structured the analysis as a clear narrative moving from baseline reliability to geographic risk, customer impact, service performance, and root-cause focus.</>, <>Translated analytical findings into practical recommendations for improving network reliability and reducing service disruption.</>]} /></article>
        </div></CaseSection>

        <CaseSection title="Dashboard"><Figure src={executiveDashboard.url} alt="ABC Communications satellite network executive overview dashboard" /><div className="mt-6 flex justify-end"><Button asChild variant="outline" className="h-auto rounded-xl border-border bg-card px-4 py-2 text-foreground"><a href="https://github.com/MonisAmir1/Satellite_Network_Performance_And_Service_Reliability" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" />View Full Dashboard</a></Button></div></CaseSection>

        <CaseSection title="Lessons Learned" reading><Prose>
          <p>This project reinforced that reliability problems are often hidden behind averages. A network can look acceptable at a high level while still containing concentrated risks specific to ground stations, high-value customers, and critical services that are repeatedly affected. The real value of the analysis came from moving beyond overall metrics and identifying where disruption was actually clustering.</p>
          <p>I also learned the importance of connecting technical performance to commercial impact. Counting outages alone is not enough. Understanding which customers and service types are most exposed turns operational data into something leadership can prioritise and act on.</p>
          <p>Finally, working with a clean dimensional model and a focused set of reliability questions strengthened my ability to design practical operational analytics. It confirmed that strong analysis in this domain is less about complexity for its own sake, and more about structured investigation that leads to clear, targeted recommendations.</p>
        </Prose><div className="mt-12 flex justify-center"><Button asChild size="lg" className="h-auto rounded-xl px-7 py-3.5 text-base"><Link to="/" hash="projects"><ArrowLeft className="h-4 w-4" />Back to Portfolio</Link></Button></div></CaseSection>
      </main>
      <Footer />
    </div>
  );
}
