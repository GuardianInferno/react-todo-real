import React from 'react'
import { motion } from 'framer-motion'


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
                animate={{opactiy:1, y:0, rotate:360}}
                transition={{ duration: 1}}
                whileHover={{scale: 1.2}}
                whileTap={{scale:0.8}}
                drag
                dragConstraints={{
                    top:-50,
                    left:-50,
                    right:50,
                    bottom:50,
                }}
            >todos</motion.h1>
        </header>
    )
}

export default Header