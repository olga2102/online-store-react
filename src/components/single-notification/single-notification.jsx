import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { deleteNotification } from "../../store/notificationSlice";

import styles from "./single-notification.module.css";

function SingleNotification({notification}) {
    const dispatch = useDispatch();

    function removeNotification(id) {
        dispatch(deleteNotification(id))
    }

    useEffect(()=>{
        const timeOutId = setTimeout(() => {
            removeNotification(notification.id)
        }, 5000)

        return () => {
            clearTimeout(timeOutId)
        }
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 } }
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }} className={styles.item}>
            <button className={styles.delete} onClick={()=>removeNotification(notification.id)}>&times;</button>
            {notification.text}
        </motion.div>
    )
}

export default SingleNotification;