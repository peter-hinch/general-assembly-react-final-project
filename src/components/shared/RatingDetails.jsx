function RatingDetails({ ratings }) {
  console.log(ratings);

  return (
    <>
      <h5>Noise - {ratings.ratings.noise.overall}</h5>
      <h5>Social - {ratings.ratings.social.overall}</h5>
      <h5>Coworking - {ratings.ratings.coworking.overall}</h5>
      <h5>Internet - {ratings.ratings.internet.overall}</h5>
      <h5>Power - {ratings.ratings.power.overall}</h5>
      <h5>Accessibility - {ratings.ratings.a11y.overall}</h5>
    </>
  );
}

export default RatingDetails;
