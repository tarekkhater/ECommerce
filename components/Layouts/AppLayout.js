import Navigation from './Navigation'
import { useAuthAdmin } from '../../Hooks/authAdmin'
import { useSelector } from 'react-redux'
import styles from "../../styles/Dashboard/Users.module.css";
const AppLayout = ({ children }) => {
    const { admin } = useAuthAdmin({ middleware: 'auth:admin' })
    const dark = useSelector(state => state.items.users)
  return (
    <div id={dark? styles.darks: styles.light}>
    <Navigation user={admin}  />

   

    {/* Page Content */}
    <main>{children}</main>
</div>
  )
}
export default AppLayout;