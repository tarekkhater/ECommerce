import styles from "../../styles/Dashboard/NavDashboard.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { showUsers } from "../../redux/slice";
import { useState } from "react";

const Nav =( ) => {
  const dispatch =useDispatch();
  const dark = useSelector(state => state.items.users)
  const [language, setLanguage] =useState("English")
  const [ar, setAr] =useState("العربية")
  return (
    <div className={dark? styles.darks:styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." className={styles.input}/>
          <SearchOutlinedIcon />
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <LanguageOutlinedIcon className={styles.icon} />
                       
                               <select style={{color:"green"}} onChange={(e)=>{setLanguage(e.target.value) }}>
                                <option >English</option>
                                <option >العربية</option>
                               </select>
                            
                        
                    
          
          </div>
          <div className={styles.item}>
            <DarkModeOutlinedIcon
              className={styles.icon}
                onClick={()=>{ dispatch(showUsers())}}
            />
          </div>
          <div className={styles.item}>
            <NotificationsNoneOutlinedIcon className={styles.icon} />
            <div className={styles.counter}>1</div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Nav;