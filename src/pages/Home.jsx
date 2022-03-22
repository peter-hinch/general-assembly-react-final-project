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
      <h2>Find your new favourite remote work space.</h2>
    </motion.div>
  );
}

export default Home;
