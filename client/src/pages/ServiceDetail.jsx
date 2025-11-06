import { useParams } from "react-router-dom";
import CloudServices from "./CloudServices";
// import DataAnalytics from "./DataAnalytics";
import WebDevelopment from "./WebDevelopment";
import DigitalMarketing from "./digital-marketing";
import SoftwareServices from "./software-services"; // correct file
import AIMLDevelopment from "./AIMLDevelopment";

const ServiceDetail = () => {
  const { slug } = useParams();

  if (slug === "cloud-services") return <CloudServices />;
  // if (slug === "data-analytics") return <DataAnalytics />;
  if (slug === "web-development") return <WebDevelopment />;
  if (slug === "digital-marketing") return <DigitalMarketing />;
  if (slug === "ai-and-ml-development") return <AIMLDevelopment />;
  // if (slug === "software-services") return <SoftwareServices />; // match slug
  if (slug === "software-services-and-development") return <SoftwareServices />;


  return <div className="text-center mt-20 text-2xl">Service Not Found</div>;
};

export default ServiceDetail;