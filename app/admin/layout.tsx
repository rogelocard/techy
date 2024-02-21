import AdminNav from "../components/admin/AdminNav"

export const metadata ={
    title: 'Techy Admin',
    description: 'Techy admin dashboard'
}

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <AdminNav />
            {children}
        </div>
    )
}

export default AdminLayout