import { motion } from 'framer-motion';
import * as s from './Home.styles';
import { transition, pageVariants } from '../../theme/GlobalVariants';

const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      key="home"
      initial="initial"
      animate="enter"
      exit="exit"
      transition={transition}
    >
      <s.StyledHeroImage>
        <s.StyledHeroHeaders>
          <h1>Welcome to RemoteSpot</h1>
          <h2>Find your new favourite remote work space.</h2>
        </s.StyledHeroHeaders>
      </s.StyledHeroImage>
      <s.StyledImageAttribution href="https://unsplash.com/photos/LCcFI_26diA">
        Image: Brooke Cagle (Unsplash)
      </s.StyledImageAttribution>
    </motion.div>
  );
};

export default Home;
