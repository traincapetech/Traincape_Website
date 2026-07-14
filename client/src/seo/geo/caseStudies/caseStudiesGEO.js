/**
 * Semantic GEO Profile: Project Case Studies.
 */
export const caseStudiesGEO = {
  category: "Client Success Stories & Analytical Case Studies",
  studies: [
    {
      id: "nk-luxe",
      title: "NK Luxe: Redefining Luxury E-commerce",
      challenge: "High customer cart abandonment due to plain product photos and sluggish layout loading.",
      solution: "Implemented interactive 3D product previews and optimized image loading times.",
      metrics: {
        bounceRate: "-25%",
        conversionRate: "+18%",
        loadTime: "Under 1.2s"
      }
    },
    {
      id: "crm",
      title: "Consolidating Enterprise Sales Pipelines",
      challenge: "Lead logs getting lost in spreadsheets and high per-user software licensing costs.",
      solution: "Built a customized CRM/HRMS suite with unified dashboard boards and SAML SSO logins.",
      metrics: {
        operationalCosts: "-40%",
        salesTeamActivity: "+35%",
        leadResponseTime: "-50%"
      }
    },
    {
      id: "verda",
      title: "Verda Exports: Streamlining International B2B Logistics",
      challenge: "Coordination delays across multiple timezone coordinates and document validation limits.",
      solution: "Engineered web socket order trackers and automated export document compilations.",
      metrics: {
        shippingFulfillmentTime: "-15 days",
        documentGenerationErrors: "0%",
        contractClosingTime: "-65%"
      }
    },
    {
      id: "dating-app",
      title: "Modern Mobile App Matchmaking Optimization",
      challenge: "Ensuring low matching search latency and handling high concurrent chat sessions.",
      solution: "Implemented matching index pools and stateless socket servers.",
      metrics: {
        serverLatencies: "<50ms",
        activeUsersSupport: "100k+",
        matchTime: "<2s"
      }
    }
  ]
};
