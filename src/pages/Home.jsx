import { motion } from 'framer-motion';
import { transition, pageVariants } from './../theme/GlobalVariants';

function Home() {
  return (
    <motion.div
      variants={pageVariants}
      key="home"
      initial="initial"
      animate="enter"
      exit="exit"
      transition={transition}
    >
      <h1>Welcome to RemoteSpot</h1>
    </motion.div>
  );
}

export default Home;
