import { motion } from 'framer-motion';

const transition = { duration: 0.3, type: 'easeInOut' };

const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 }
};

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
      <h1>H1 - Header 1 - 36px Medium Roboto</h1>
      <h2>H2 - Header 2 - 32px Medium Roboto</h2>
      <h3>H3 - Header 3 - 28px Medium Roboto</h3>
      <h4>H4 - Header 4 - 24px Medium Roboto</h4>
      <h5>H5 - Header 5 - 18px Medium Roboto</h5>
      <h6>H6 - Header 6 - 14px Medium Roboto</h6>
      <p>Paragraph - 16px Regular Roboto</p>
    </motion.div>
  );
}

export default Home;
