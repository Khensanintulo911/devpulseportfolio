import { useState } from "react";
import { 
  BarChart3, 
  FileSpreadsheet, 
  ExternalLink, 
  ChevronRight, 
  Database, 
  Layers, 
  TrendingUp, 
  SlidersHorizontal,
  CheckCircle2,
  Table,
  Zap,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface AnalyticsProject {
  id: string;
  title: string;
  category: "powerbi" | "spreadsheet" | "hybrid";
  categoryLabel: string;
  toolset: string[];
  description: string;
  businessProblem: string;
  solutionAndArchitecture: string;
  keyFormulasOrMeasures: string[];
  keyOutcomes: string[];
  imageUrl: string;
  kpiStats: { label: string; value: string }[];
  liveUrl?: string;
}

const analyticsProjects: AnalyticsProject[] = [
  {
    id: "pbi-ops",
    title: "Executive Operations & Repair Performance Dashboard",
    category: "powerbi",
    categoryLabel: "Power BI Report",
    toolset: ["Power BI", "DAX", "Power Query", "Star Schema", "SQL"],
    description: "Executive-level Business Intelligence report measuring multi-branch appliance repair throughput, technician productivity, SLA compliance rates, and warranty turnaround times.",
    businessProblem: "Branch managers and operations executives lacked centralized visibility into work orders, leading to delayed customer pickups, untracked technician idle hours, and SLA penalties.",
    solutionAndArchitecture: "Architected a Star Schema model connecting fact work-orders with dimension tables for technicians, customer tiers, and appliance categories. Developed custom DAX measures for dynamic time-intelligence comparing month-over-month turnaround velocity against contract SLAs.",
    keyFormulasOrMeasures: [
      "CALCULATE(DIVIDE([Repairs Completed Within SLA], [Total Closed Work Orders], 0), ALLSELECTED(DateTable))",
      "SLA Variance % = DIVIDE([Actual Repair Duration Hours] - [Target SLA Hours], [Target SLA Hours], 0)",
      "Technician Efficiency Score = AVERAGEX(KEEPFILTERS(Values(Technician[ID])), [Completed Repairs Per Day])"
    ],
    keyOutcomes: [
      "Reduced average repair cycle time visibility latency from 7 days to near real-time",
      "Identified technician bottlenecks across 4 regional service branches",
      "Automated weekly PDF scorecard exports for executive stakeholder syncs"
    ],
    imageUrl: "/project-images/powerbi_executive_dashboard_1791388236232.jpg",
    kpiStats: [
      { label: "SLA Adherence", value: "94.6%" },
      { label: "Avg Turnaround", value: "3.2 Days" },
      { label: "Tracked Orders", value: "12,400+" }
    ]
  },
  {
    id: "excel-forecast",
    title: "Dynamic Financial Scenario & What-If Forecast Model",
    category: "spreadsheet",
    categoryLabel: "Spreadsheet Model",
    toolset: ["Advanced Excel", "Dynamic Arrays", "XLOOKUP", "Scenario Manager", "Goal Seek"],
    description: "Comprehensive financial spreadsheet model evaluating operating cash flows, service contract profitability, and sensitivity scenarios under best-case, base-case, and conservative assumptions.",
    businessProblem: "Uncertain parts procurement costs and fluctuating labor overtime led to margin unpredictability on customer repair service quotes.",
    solutionAndArchitecture: "Engineered a modular multi-sheet financial model utilizing dynamic array formulas (XLOOKUP, FILTER, UNIQUE) to link operational cost drivers with projected net margins. Integrated Excel Scenario Manager and Goal Seek to calculate breakeven volume per technician.",
    keyFormulasOrMeasures: [
      "=XLOOKUP(TicketCategory & SubTier, PricingTable[CompositeKey], PricingTable[BaseRate], 0)",
      "=FILTER(CostSchedule, (CostSchedule[Quarter]=ActiveQtr) * (CostSchedule[Department]=SelectedDept))",
      "=IFERROR(INDEX(VarianceMatrix, MATCH(TargetGrossMargin, MarginBands, 0), MATCH(OverheadRate, OverheadBands, 0)), 0)"
    ],
    keyOutcomes: [
      "Automated 12-month rolling cash flow forecast eliminating 6+ hours of manual weekly calculations",
      "Implemented automated conditional formatting alert triggers for negative gross margin tickets",
      "Enabled instantaneous 3-scenario comparison for quarterly budgeting meetings"
    ],
    imageUrl: "/project-images/excel_financial_forecast_model_1791388470119.jpg",
    kpiStats: [
      { label: "Scenario Modes", value: "3 Dynamic" },
      { label: "Forecast Period", value: "12 Months" },
      { label: "Formula Audit", value: "100% Verified" }
    ]
  },
  {
    id: "pbi-inventory",
    title: "Inventory Turnover & Stock Aging Telemetry",
    category: "powerbi",
    categoryLabel: "Power BI Report",
    toolset: ["Power BI", "Power Query ETL", "Excel Source", "Stock Aging", "DAX"],
    description: "Interactive supply chain and spare parts telemetry tracking inventory turnover rates, critical parts stockouts, holding costs, and automated aging buckets (0-30, 31-60, 60+ days).",
    businessProblem: "Capital tied up in obsolete or slow-moving electronic components while fast-moving high-demand repair components experienced recurring stockouts.",
    solutionAndArchitecture: "Created an automated Power Query ingestion pipeline transforming messy warehouse CSV exports into structured relational tables. Built DAX time-bucket metrics to classify stock aging and calculate stock replenishment reorder alerts.",
    keyFormulasOrMeasures: [
      "Stock Aging Bracket = SWITCH(TRUE(), [Days In Stock] <= 30, '0-30 Days', [Days In Stock] <= 60, '31-60 Days', '60+ Days (At Risk)')",
      "Inventory Holding Cost = SUMX(Inventory, Inventory[UnitCost] * Inventory[QuantityOnHand] * [AnnualHoldingCostRate] / 365 * [Days In Stock])",
      "Reorder Alert Flag = IF([Current Stock] <= [Safety Stock Threshold], 'REORDER REQUIRED', 'HEALTHY')"
    ],
    keyOutcomes: [
      "Identified and flagged surplus slow-moving stock accounting for ~18% of tied-up working capital",
      "Created visual stockout indicators triggering supplier purchase order notifications",
      "Unified inventory tracking across multiple service locations into a single pane of glass"
    ],
    imageUrl: "/project-images/inventory_bi_telemetry_dashboard_1791388480722.jpg",
    kpiStats: [
      { label: "Aging Categories", value: "3 Buckets" },
      { label: "Reorder Trigger", value: "Automated" },
      { label: "SKU Coverage", value: "1,850+ Parts" }
    ]
  },
  {
    id: "ltp-analytics",
    title: "Long Time Pending (LTP) Appliance Analysis Model",
    category: "hybrid",
    categoryLabel: "Spreadsheet & Python",
    toolset: ["Spreadsheets", "Operational Data", "Plotly", "Threshold Logic", "Streamlit"],
    description: "Operational analysis tool built for appliance repair shops to upload CSV/Excel work logs and automatically flag Long Time Pending (LTP) units past SLA thresholds.",
    businessProblem: "Repair centers had high customer frustration from neglected appliances staying past 14 to 30 days without visibility into which appliance types were stuck.",
    solutionAndArchitecture: "Standardized data schemas for work-order logs. Modeled category-specific threshold rules (phones: 7 days, fridges: 14 days, washing machines: 21 days) with interactive visualization cards and exportable escalation tables.",
    keyFormulasOrMeasures: [
      "LTP Threshold Logic: Dynamic escalation based on appliance category and part availability status",
      "Percent Overdue = (Current Date - Intake Date - SLA Allowance) / SLA Allowance * 100",
      "Bottleneck Concentration Index: Weighted volume of pending units grouped by technician queue"
    ],
    keyOutcomes: [
      "Allowed repair managers to upload raw shop spreadsheets and see backlog distribution in seconds",
      "Reduced customer escalation inquiries by isolating units approaching the critical pending mark",
      "Deployed live web dashboard used for daily morning operational huddles"
    ],
    imageUrl: "/project-images/ltp_analytics_dashboard_1791387241412.jpg",
    kpiStats: [
      { label: "LTP Detection", value: "Automatic" },
      { label: "Threshold Types", value: "By Category" },
      { label: "Data Pipeline", value: "CSV / Sheets" }
    ],
    liveUrl: "https://ltp-analysis-dashboard.onrender.com/"
  }
];

export default function AnalyticsSection() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "powerbi" | "spreadsheet">("all");
  const [selectedModalProject, setSelectedModalProject] = useState<AnalyticsProject | null>(null);

  const filteredProjects = analyticsProjects.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "powerbi") return project.category === "powerbi" || project.category === "hybrid";
    if (selectedFilter === "spreadsheet") return project.category === "spreadsheet" || project.category === "hybrid";
    return true;
  });

  return (
    <section id="analytics" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              <BarChart3 className="w-4 h-4" />
              <span>Data Analytics & Business Intelligence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Power BI Reports & Spreadsheet Models
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Real-world analytics assets engineered for executive reporting, operational variance tracking, and decision modeling using Microsoft Power BI, DAX, and Advanced Spreadsheets.
            </p>
          </div>

          {/* Interactive Filter Pills/Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm self-start md:self-auto">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedFilter === "all"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All Analytics ({analyticsProjects.length})
            </button>
            <button
              onClick={() => setSelectedFilter("powerbi")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedFilter === "powerbi"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Power BI Dashboards
            </button>
            <button
              onClick={() => setSelectedFilter("spreadsheet")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedFilter === "spreadsheet"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Spreadsheet Models
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-slate-50/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-md overflow-hidden"
            >
              {/* Card Image Banner */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                
                {/* Category Indicator Badge & Title on Image */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/70 text-blue-300 backdrop-blur-md border border-white/10">
                    {project.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-5">
                <div className="space-y-4">
                  {/* Clean Toolset Metadata (Zero-Pill Discipline) */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {project.toolset.map((tool, idx) => (
                      <span key={tool} className="flex items-center gap-1.5">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{tool}</span>
                        {idx < project.toolset.length - 1 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>}
                      </span>
                    ))}
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Micro KPI Stat Strip */}
                  <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800 text-center">
                    {project.kpiStats.map((kpi, kIdx) => (
                      <div key={kIdx} className="space-y-0.5">
                        <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono block">
                          {kpi.value}
                        </span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-tight block">
                          {kpi.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call To Action Buttons */}
                <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between gap-3">
                  <Button
                    onClick={() => setSelectedModalProject(project)}
                    size="sm"
                    className="flex-1 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white gap-1.5 cursor-pointer"
                  >
                    <span>Inspect Model & Metrics</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Button>

                  {project.liveUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-xl text-xs font-semibold border-slate-300 dark:border-slate-700 hover:border-slate-400"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                        <span>Live MVP</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Analytics Modal */}
      {selectedModalProject && (
        <Dialog open={!!selectedModalProject} onOpenChange={(open) => !open && setSelectedModalProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <ScrollArea className="h-full max-h-[90vh]">
              <div className="p-6 md:p-10 space-y-8">
                {/* Header */}
                <DialogHeader className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    <Database className="w-3.5 h-3.5" />
                    <span>{selectedModalProject.categoryLabel} Architecture & Analysis</span>
                  </div>
                  <DialogTitle className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    {selectedModalProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
                    {selectedModalProject.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Main Preview Image */}
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={selectedModalProject.imageUrl}
                    alt={selectedModalProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Operational Problem
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedModalProject.businessProblem}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Technical Solution & Data Modeling
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedModalProject.solutionAndArchitecture}
                    </p>
                  </div>
                </div>

                {/* Formulas or Measures Section */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-blue-600" />
                    Key DAX Measures & Spreadsheet Formulas
                  </h4>
                  <div className="space-y-2">
                    {selectedModalProject.keyFormulasOrMeasures.map((formula, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3 rounded-xl bg-slate-900 text-blue-300 font-mono text-xs overflow-x-auto border border-slate-800"
                      >
                        <code>{formula}</code>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Measurable Business Outcomes */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Measurable Outcomes & Deliverables
                  </h4>
                  <div className="space-y-2">
                    {selectedModalProject.keyOutcomes.map((outcome, oIdx) => (
                      <div
                        key={oIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    {selectedModalProject.liveUrl && (
                      <Button asChild size="sm" className="rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white gap-1.5">
                        <a href={selectedModalProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <span>Visit Live Tool</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="rounded-xl text-xs font-semibold border-slate-300 dark:border-slate-700"
                    >
                      <a href="#contact" onClick={() => setSelectedModalProject(null)}>
                        <span>Inquire About BI Model</span>
                      </a>
                    </Button>
                  </div>

                  <span className="text-xs text-slate-400 font-mono">
                    Learnership & Operational Asset
                  </span>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
