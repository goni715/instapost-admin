import DashboardLayout from '@/components/layout/DashboardLayout'
import { TChildren } from '@/types/global.type';

const Layout = ({ children } : TChildren) => {
  return (
    <>
     <DashboardLayout>
        {children}
     </DashboardLayout>
    </>
  )
}

export default Layout