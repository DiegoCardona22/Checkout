// @packages
import { shallow, mount } from 'enzyme';

// @scripts
import { Banner } from 'src/components/atoms/banner';

describe('Testing the component <Banner />', () => {
  const id = 'banner';
  const image = 'https://via.placeholder.com/1920x1080';
  let wrapper = shallow(<Banner id={id} image={image} />);

  beforeEach(() => {
    wrapper = shallow(<Banner id={id} image={image}/>);
  });

  it('Should render the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should show the image', () => {
    const localWrapper = mount(<Banner id={id} image={image} />);
    expect(localWrapper).toMatchSnapshot();
  });
});
