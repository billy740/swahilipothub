import CaseManagement from "@/components/casemngmt";
import FAQs from "@/components/faqs";
import HeroNew from "@/components/hero";
import BecomeMember from "@/components/member";
import Numbers from "@/components/numbers";
import SpacesCard from "@/components/spacescard";
import Swahilipotfm from "@/components/spfm";
import JoinYouth from "@/components/youth";

export default function DashboardPage() {
    return (
      <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
        <HeroNew />
        <Swahilipotfm />
        <JoinYouth />
        <CaseManagement />
        <SpacesCard />
        <Numbers />
        <FAQs />
        <BecomeMember />
      </div>
    );
};