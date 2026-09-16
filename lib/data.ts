export const profile = {
  name: "Vaishnavi Kurmi",
  role: "Cloud & DevOps Engineer",
  brand: "Skycodes",
  tagline: "SlayTheStack",
  email: "Vaishnavipatal744067@gmail.com",
  location: "Indore, India — open to remote",
  greeting: "Hello",
  said: "— It's Vaishnavi. I build cloud infrastructure, then",
  saidAccent: "teach it",
  lede: "I ship pipelines and clusters half the week, and explain them the other half.",
  bio: [
    "I'm an AWS Certified Cloud Practitioner with 2+ years of hands-on Cloud and DevOps work — EKS clusters, Terraform modules, Jenkins pipelines, the usual weekly firefight.",
    "Everything I build goes up on GitHub, and everything I learn goes out as Skycodes. Real pipelines, real errors, real fixes. Not theory.",
  ],
};

export const socials = {
  instagram: "https://www.instagram.com/skycodes10",
  youtube: "https://youtube.com/@skycodes10",
  github: "https://github.com/vaishnavipatelj",
  linkedin: "https://www.linkedin.com/in/vaishnavikurmi",
};

/** The two figures shown at the top of the hero. */
export const heroFigures = [
  { value: "2.4K", label: "Followers on Instagram" },
  { value: "3.1M", label: "Monthly views" },
];

export const facts = [
  { key: "Certification", value: "AWS Certified Cloud Practitioner" },
  { key: "Experience", value: "2+ years in Cloud & DevOps" },
  { key: "Focus", value: "AWS, Kubernetes, Terraform, CI/CD" },
  { key: "Teaching", value: "300+ videos across YouTube and Instagram" },
];

export const stack = [
  "AWS", "Kubernetes", "Terraform", "Docker", "Jenkins",
  "GitHub Actions", "Linux", "Prometheus", "Grafana",
];

export const services = [
  { title: "Cloud solutions", description: "AWS setup, EC2, S3, VPC, IAM, networking and end-to-end deployment." },
  { title: "DevOps & CI/CD", description: "GitHub Actions, Jenkins, Docker and fully automated deployment pipelines." },
  { title: "Infrastructure as code", description: "Terraform provisioning and repeatable, reviewable automation." },
  { title: "Kubernetes", description: "Containerisation, deployments and cluster setup on EKS." },
  { title: "Cloud security & IAM", description: "IAM configuration, access policies and security hardening." },
  { title: "Monitoring", description: "Prometheus, Grafana, CloudWatch and logging setup." },
  { title: "Web development", description: "React and Next.js sites plus full-stack applications." },
  { title: "Website deployment", description: "Shipping apps to AWS, VPS and Docker environments." },
  { title: "Server setup & Linux", description: "Linux server configuration and application deployment." },
  { title: "DevOps automation", description: "Automating repetitive deployment and infrastructure work." },
];

/** `to` and `suffix` drive the count-up animation. */
export const numbers = [
  { to: 2.4, suffix: "K", decimals: 1, label: "Instagram followers", note: "@skycodes10" },
  { to: 1.2, suffix: "K", decimals: 1, label: "YouTube subscribers", note: "@skycodes10" },
  { to: 3.1, suffix: "M+", decimals: 0, label: "Monthly views", note: "across platforms" },
  { to: 300, suffix: "+", decimals: 0, label: "Videos and reels", note: "and counting" },
];

export const projects = [
  { title: "Production-ready CI/CD pipeline", stack: "Jenkins / Docker / AWS / SonarQube / Trivy", href: socials.github },
  { title: "AWS EKS microservices deployment", stack: "AWS EKS / Kubernetes / Docker / Jenkins", href: socials.github },
  { title: "Terraform AWS infrastructure", stack: "Terraform / AWS / IaC", href: socials.github },
  { title: "AWS VPC peering architecture", stack: "VPC / Subnets / Route tables / Security groups", href: socials.github },
  { title: "Flask app on AWS EKS", stack: "Flask / Docker / AWS EKS / Jenkins", href: socials.github },
  { title: "MERN full-stack application", stack: "React / Node.js / Express / MongoDB", href: socials.github },
  { title: "GameArena.gg", stack: "React / Node.js / MongoDB", href: socials.github },
  { title: "Python space shooter", stack: "Python / Pygame", href: socials.github },
];

export const courses = [
  {
    title: "DSA — full course",
    description: "A complete walkthrough of data structures and algorithms, start to finish.",
    tag: "YouTube playlist",
    href: "https://youtu.be/sri38AXpTJs",
  },
  {
    title: "JavaScript — full course",
    description: "From the basics through to building real projects.",
    tag: "YouTube playlist",
    href: "https://youtu.be/EA4lftpSyz4",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Content", href: "#numbers" },
  { label: "Work", href: "#work" },
  { label: "Courses", href: "#courses" },
];
