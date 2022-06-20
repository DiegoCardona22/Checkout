// @packages
import { shallow } from "enzyme";

// @scripts
import Card from "src/components/atoms/card";

describe("Testing the component <Card />", () => {
  const id = "card";
  const image = "https://via.placeholder.com/1920x1080";
  const description = "Card Description";
  const title = "Card Title";
  let wrapper = shallow(
    <Card
      description={description}
      id={id}
      imageUrl={image}
      title={title}
    />
  );

  beforeEach(() => {
    wrapper = shallow(
      <Card
        description={description}
        id={id}
        imageUrl={image}
        title={title}
      />
    );
  });

  it("Should render the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
