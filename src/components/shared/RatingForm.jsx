import FormElementsSingleCategory from './FormElementsSingleCategory';

const RatingForm = () => {
  return (
    <form>
      <FormElementsSingleCategory category="Noise" />
      <FormElementsSingleCategory category="Social" />
      <FormElementsSingleCategory category="Coworking" />
      <FormElementsSingleCategory category="Internet" />
      <FormElementsSingleCategory category="Power" />
      <FormElementsSingleCategory category="Accessibility" />
    </form>
  );
};

export default RatingForm;
