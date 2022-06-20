import React from 'react'
import { motion } from 'framer-motion'
import styles from "./Header.module.css"

const Header = () => {
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "1.5em",
    }

    return (
        <header style={headerStyle}>
            <motion.h1
                style={{
                    fontSize: "6rem",
                    fontWeight: "600",
                    marginBottom: "2rem",
                    lineHeight: "1em",
                    color: "#ececec",
                    textTransform: "lowercase",
                    textAlign: "center",
                }}
                initial={{opactiy:0, y:-100}}
                animate={{opactiy:1, y:0}}
                transition={{ duration: 1}}
                whileHover={{scale: 1.2}}
                whileTap={{scale:0.8}}
                drag
                dragConstraints={{
                    top:0,
                    left:0,
                    right:0,
                    bottom:0,
                }}
                dragTransition={{ bounceStiffness:600 ,bounceDamping:10}}
            >todos</motion.h1>

            <div className={styles.container}>
                <motion.div
                    animate={{
                        scale:[1,1.5,1.5,1,1],
                        rotate:[0,0,270,270,0],
                        borderRadius:["20%", "20%", "50%", "50%", "20%"]
                    }}
                    transition={{
                        duration: 2,
                        ease:"easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay:1
                    }}
                    />
            </div>
        </header>
    )
}

export default Header