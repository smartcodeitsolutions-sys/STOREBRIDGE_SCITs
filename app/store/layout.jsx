import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "StoreBridge - Store Dashboard",
    description: "StoreBridge - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
