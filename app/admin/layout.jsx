import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "StoreBridge - Admin",
    description: "StoreBridge - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
