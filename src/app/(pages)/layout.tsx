import Footer from "@/components/footer";
import { Header } from "@/components/header";
import Partners from "@/components/partners";

type Props = {
    children: React.ReactNode;
};

const DashboardLayout = ({ children } :Props) => {
    return (
        <>
        <Header />
        <main className="px-3 lg:px-14">
            {children}
        </main>
        <Partners />
        <Footer />
        </>
    );
};

export default DashboardLayout;