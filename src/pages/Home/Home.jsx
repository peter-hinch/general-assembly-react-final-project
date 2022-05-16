import { motion } from 'framer-motion';
import * as s from './Home.styles';
import { transition, pageVariants } from '../../theme/GlobalVariants';
import { Link } from 'react-router-dom';

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
        <div>
          <h1>Welcome to RemoteSpot</h1>
          <h2>Find your new favourite remote work space.</h2>
        </div>
        <s.StyledImageAttribution href="https://unsplash.com/photos/LCcFI_26diA">
          Image: Brooke Cagle (Unsplash)
        </s.StyledImageAttribution>
      </s.StyledHeroImage>
      <s.StyledInstructionsSection>
        <h3>Find a venue</h3>
        <p>
          Use the search bar or take a look at the <Link to="/map">Map</Link>{' '}
          page to find venues near you.
        </p>
      </s.StyledInstructionsSection>
      <s.StyledInstructionsSection>
        <h3>Check out the venue ratings</h3>
        <p>
          View ratings for any venue that has been reviewed by other workers.
        </p>
      </s.StyledInstructionsSection>
      <s.StyledInstructionsSection>
        <h3>Share your own experience</h3>
        <p>
          Add your experience and help others find a location that they will
          love to work from.
        </p>
      </s.StyledInstructionsSection>
    </motion.div>
  );
};

export default Home;
