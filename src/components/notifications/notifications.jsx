import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";


import SingleNotification from "../single-notification/single-notification";

import styles from "./notifications.module.css";


function Notification() {
    const notifications = useSelector(state=>state.notifications.notifications);

    return (
        <div className={styles.list}>
            <AnimatePresence initial={false}>
            {notifications.map(notification=>{
               return <SingleNotification notification={notification} key={notification.id}/>
            })}
            </AnimatePresence>
        </div>
    )
}

export default Notification;