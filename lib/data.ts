// All content here is sourced directly from Jeet's resume and verified project history.
// No fabricated tools, metrics, or credentials — every line should be defensible in an interview.

export const profile = {
  name: "Jeet Dave",
  location: "Jersey City, NJ",
  email: "jeetd6220@gmail.com",
  github: "https://github.com/jd878-gif",
  linkedin: "https://www.linkedin.com/in/jeetdave11",
  headline: "Data Engineer · Data Scientist · ML Engineer",
  tagline:
    "I turn messy, real-world data into reliable pipelines and decision-ready systems — built on Spark, AWS, and production-grade ETL.",
  summary:
    "MS Data Science student at NJIT (expected May 2027) with a BS in Computer Science & Engineering. I build the kind of systems that don't just run in a notebook — medallion-architecture pipelines, serverless fraud-detection platforms, and dashboards that real teams use to make decisions. Strong in Python, SQL, and distributed data processing, with hands-on AWS experience across compute, storage, orchestration, and ML inference.",
  status: "Open to Data Engineering, Data Science & ML Engineering roles",
};

export const education = [
  {
    school: "New Jersey Institute of Technology",
    location: "Newark, NJ",
    degree: "MS in Data Science",
    detail: "GPA: 3.5",
    period: "Expected May 2027",
  },
  {
    school: "Indus University",
    location: "Ahmedabad, India",
    degree: "BS in Computer Science & Engineering",
    detail: "GPA: 3.8",
    period: "May 2025",
  },
];

export const certifications = [
  {
    name: "AWS Machine Learning",
    issuer: "Amazon Web Services",
    period: "Jul 2024 – Nov 2024",
  },
];

// "Milestones" replaces the requested Kaggle/Hackerrank/publications section —
// these are the real, verifiable equivalents from Jeet's actual prep work.
export const milestones = [
  {
    label: "PySpark depth",
    detail:
      "Worked through all 16 core PySpark topics — Driver/Executor architecture, DAGs, lazy evaluation, Catalyst Optimizer, shuffles, window functions, Structured Streaming — applied directly in two production pipelines.",
  },
  {
    label: "SQL curriculum",
    detail:
      "Completed a full SQL curriculum from foundations through window functions, CTEs, and complex subqueries — applied across every data project on this page.",
  },
  {
    label: "LeetCode",
    detail:
      "Intermediate level, with particular strength in hash map / frequency-counting and array manipulation problems.",
  },
  {
    label: "AWS breadth",
    detail:
      "Hands-on with 10+ AWS services in a single production-style platform: SQS, Lambda, DynamoDB, S3, Glue, Athena, Step Functions, EventBridge, SNS, SageMaker Serverless Inference, CloudWatch.",
  },
];

export const experience = [
  {
    org: "NexGits Private Limited",
    role: "Data Analyst Intern",
    location: "Ahmedabad, India",
    period: "Jun 2024 – Jul 2025",
    bullets: [
      "Designed ETL pipelines in Python and SQL to extract, transform, and load structured data across multiple relational tables, identifying and resolving data inconsistencies and reducing prep time by 30%.",
      "Partnered with senior stakeholders to gather business requirements and maintain reporting deliverables (Power BI, Tableau, Excel), directly informing 3 strategic decisions within the first month.",
      "Automated recurring data processing workflows using Python on AWS, improving data availability and reducing manual effort by 40%.",
    ],
  },
  {
    org: "NJIT Campus Wellness Services",
    role: "Event Coordination & Communications",
    location: "Newark, NJ",
    period: "Oct 2025 – Present",
    bullets: [
      "Design and produce print-ready campaign materials (multi-format posters, strategic department proposals) for university-wide health initiatives.",
      "Built a functional wellness chatbot prototype (NJIT Wellness Navigator) with distress-detection handoff logic to connect students with the right support.",
    ],
  },
];

export type SkillCategory = {
  category: string;
  level: "Advanced" | "Proficient" | "Familiar";
  items: string[];
};

// Advanced = used in production pipelines shipped on this portfolio.
// Proficient = applied in real projects with real data.
// Familiar = coursework, self-study, or supporting role in a project.
export const skills: SkillCategory[] = [
  {
    category: "Languages",
    level: "Advanced",
    items: ["Python", "SQL"],
  },
  {
    category: "Languages",
    level: "Familiar",
    items: ["R", "Scala", "PL/SQL", "DDL", "KornShell", "C", "C++"],
  },
  {
    category: "Data Engineering",
    level: "Advanced",
    items: ["Apache Spark", "PySpark", "Apache Airflow"],
  },
  {
    category: "Data Engineering",
    level: "Proficient",
    items: ["dbt", "Snowflake / Snowpark", "ETL/ELT Pipelines", "Medallion Architecture"],
  },
  {
    category: "Data Engineering",
    level: "Familiar",
    items: ["Apache Kafka", "Hadoop", "Hive", "Informatica", "IBM DataStage", "SSIS"],
  },
  {
    category: "Cloud & Infrastructure",
    level: "Proficient",
    items: [
      "AWS S3",
      "AWS Lambda",
      "AWS SQS",
      "AWS DynamoDB",
      "AWS Glue",
      "AWS Athena",
      "AWS Step Functions",
      "AWS SageMaker",
      "AWS CloudWatch",
      "AWS EMR",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    level: "Familiar",
    items: ["Kubernetes", "Terraform", "Docker", "AWS Redshift", "Azure SQL"],
  },
  {
    category: "Data Science & Analytics",
    level: "Advanced",
    items: ["Pandas", "NumPy", "Scikit-learn"],
  },
  {
    category: "Data Science & Analytics",
    level: "Proficient",
    items: ["A/B Testing", "Causal Inference (DiD)", "Statistical Analysis", "Tableau", "Power BI", "Streamlit", "Plotly", "Matplotlib"],
  },
];

export type Project = {
  slug: string;
  title: string;
  period: string;
  category: "Data Engineering" | "Machine Learning" | "Analytics" | "Cloud";
  oneLiner: string;
  problem: string;
  architecture: string[];
  stack: string[];
  results: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "causal-inference-ab-testing",
    title: "Causal Inference & A/B Testing",
    period: "May 2026",
    category: "Analytics",
    oneLiner:
      "Built and verified hypotheses on a 90,189-user A/B test and a real-world business disruption using Difference-in-Differences — quantifying causal business impact, not just correlation.",
    problem:
      "Go beyond standard A/B testing to demonstrate causal reasoning — isolating treatment effects from confounding trends using real-world data.",
    architecture: [
      "Module 1: A/B test on 90,189-user Cookie Cats dataset with sample-ratio-mismatch checks and significance testing",
      "Module 2: Difference-in-Differences design on real-world business disruption data",
      "Placebo test to validate the DiD model assumptions",
      "Random Forest feature importance to sanity-check conclusions",
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "Statsmodels", "Matplotlib"],
    results: [
      "Quantified treatment effect: +12.44pp (95% CI [7.44, 17.44], p<0.0001)",
      "Validated business opportunity via statistically significant A/B test",
      "Placebo test confirmed DiD model assumptions held",
      "Full analysis and code published: github.com/jd878-gif/causal-inference-ab-testing",
    ],
    github: "https://github.com/jd878-gif/causal-inference-ab-testing",
  },
  {
    slug: "fraud-sentinel",
    title: "FraudSentinel",
    period: "Mar 2026 – Apr 2026",
    category: "Cloud",
    oneLiner:
      "A serverless, event-driven fraud detection platform built on 10 AWS services — processing 507K+ transactions with zero dead-letter-queue failures and automated data quality monitoring.",
    problem:
      "Design a fraud-detection system the way it would actually be built in production — event-driven, serverless, and observable — rather than a single offline notebook model.",
    architecture: [
      "Ingestion via SQS → Lambda for event-driven processing (P99 latency: 761ms)",
      "DynamoDB TTL-based feature store for velocity tracking",
      "S3 + Glue medallion architecture (Bronze / Silver / Gold) for the analytical lakehouse",
      "Athena for ad-hoc SQL over the lakehouse",
      "Step Functions + EventBridge + SNS for orchestration and alerting",
      "SageMaker Serverless Inference for real-time XGBoost scoring",
      "CloudWatch for end-to-end observability",
    ],
    stack: [
      "AWS SQS", "Lambda", "DynamoDB", "S3", "Glue", "Athena",
      "Step Functions", "EventBridge", "SNS", "SageMaker", "CloudWatch",
      "PySpark", "XGBoost",
    ],
    results: [
      "507K+ PaySim transactions processed with zero dead-letter-queue failures across all runs",
      "XGBoost fraud classifier: AUC 1.00, F1 1.00 — deployed to SageMaker Serverless Inference",
      "SNS alerts delivering structured fraud notifications in under 30 seconds",
      "7.7% flagging rate, $0.13 total compute cost",
    ],
    github: "https://github.com/jd878-gif/fraud-sentinel",
  },
  {
    slug: "k8s-data-platform",
    title: "Kubernetes Data Platform",
    period: "May 2026 – Aug 2026",
    category: "Data Engineering",
    oneLiner:
      "A production-grade distributed ETL platform on AWS EKS — Spark and Airflow on Kubernetes, Bronze/Silver/Gold architecture, infrastructure fully provisioned as code via Terraform.",
    problem:
      "Design and operate a real Kubernetes-native data platform end-to-end: infrastructure as code, distributed orchestration, and a full medallion pipeline — the kind of setup most engineers only read about.",
    architecture: [
      "AWS EKS cluster provisioned via Terraform (managed node groups, IRSA, Karpenter autoscaling)",
      "Apache Airflow deployed on Kubernetes via Helm for DAG orchestration",
      "Apache Spark on Kubernetes for distributed BTS flight-delay processing",
      "Bronze / Silver / Gold medallion architecture for raw → cleaned → analytics-ready data",
      "IRSA for fine-grained pod-level AWS IAM permissions without credential sprawl",
    ],
    stack: [
      "Kubernetes", "AWS EKS", "Terraform", "Apache Airflow",
      "Apache Spark", "PySpark", "Helm", "Docker", "AWS S3", "Python",
    ],
    results: [
      "EKS cluster fully provisioned via Terraform with managed node groups",
      "Airflow and Spark deployed via Helm on Kubernetes",
      "Medallion architecture processing BTS flight-delay data end-to-end",
      "Resolved cluster autoscaling, IRSA permissioning, and Helm chart migration issues",
    ],
    github: "https://github.com/jd878-gif/k8s-data-platform",
  },
  {
    slug: "retail-analytics-pipeline",
    title: "Retail Analytics Pipeline",
    period: "Oct 2025 – Nov 2025",
    category: "Data Engineering",
    oneLiner:
      "A Snowflake + dbt cloud data warehouse with 6 dimensional models and 52 passing data-quality and reconciliation tests — surfaced through a live Streamlit dashboard.",
    problem:
      "Build a modern analytics-engineering stack end-to-end: warehouse, transformation layer, data governance, testing, and a consumable dashboard.",
    architecture: [
      "Snowflake warehouse with Snowpark Python for data loading",
      "dbt Core: 6 fact/dimension models built with DDL and physical/logical modeling best practices",
      "52 automated data-quality and reconciliation tests",
      "Streamlit dashboard for stakeholder-facing reporting",
    ],
    stack: ["Snowflake", "Snowpark Python", "dbt Core", "Streamlit", "SQL"],
    results: [
      "6 dimensional data models with 52 passing data-quality and reconciliation tests",
      "Optimized SQL transformations improving query performance and downstream reliability",
      "Published, runnable dashboard on GitHub",
    ],
    github: "https://github.com/jd878-gif/retail-analytics-pipeline",
  },
  {
    slug: "ecommerce-data-pipeline",
    title: "E-Commerce Data Pipeline",
    period: "Feb 2026 – Apr 2026",
    category: "Analytics",
    oneLiner:
      "End-to-end analysis of 100K+ records — Sales Forecasting (regression), Customer Churn Prediction (classification), and K-Means segmentation across 4 customer segments, with a live Tableau dashboard.",
    problem:
      "Translate raw transactional data into decision-ready customer segments and business forecasts, delivered through an automated pipeline and executive-ready dashboard.",
    architecture: [
      "Python + Pandas ETL across 4 relational MySQL tables",
      "Sales Forecasting: Linear Regression (R²: 0.65)",
      "Customer Churn Prediction: classification model (63% accuracy)",
      "Customer Segmentation: K-Means across 4 segments (VIP, Regular, At-Risk, Dormant)",
      "Tableau + Plotly interactive dashboard with live KPI filters",
    ],
    stack: ["Python", "Pandas", "MySQL", "Scikit-learn", "Tableau", "Plotly", "Streamlit"],
    results: [
      "Sales forecasting: Linear Regression (R²: 0.65)",
      "Churn prediction: 63% accuracy",
      "K-Means segmentation: 4 actionable customer segments",
      "Interactive Tableau dashboard translating analysis into clear stakeholder recommendations",
    ],
    github: "https://github.com/jd878-gif/Ecommerce-data-pipeline",
  },
];

// Real technical write-ups, swapped in for the requested "blog" section.
export const deepDives = [
  {
    title: "Difference-in-Differences on Real Business Data",
    description:
      "Why naive before/after comparisons fail for causal claims, and how a DiD design isolates the actual treatment effect — validated with a placebo test.",
    href: "https://github.com/jd878-gif/causal-inference-ab-testing",
    tag: "Causal Inference",
  },
  {
    title: "Designing a Medallion Lakehouse for Fraud Detection",
    description:
      "How Bronze/Silver/Gold layering plus Step Functions orchestration keeps a serverless fraud pipeline observable and debuggable in production.",
    href: "https://github.com/jd878-gif/fraud-sentinel",
    tag: "Data Engineering",
  },
];
