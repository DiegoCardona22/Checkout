// @packages
import { shallow, mount } from 'enzyme';

// @scripts
import ActionButton from 'components/atoms/action-button';

describe('Testing the component <ActionButton />', () => {
  const id = 'action-button';
  const label = 'Action';
  const startIcon = 'local_airport';
  const onClick = jest.fn();
  let wrapper = shallow(<ActionButton id={id} label={label} />);

  beforeEach(() => {
    wrapper = shallow(<ActionButton id={id} label={label} />);
  });

  it('Should render the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should show the label', () => {
    const localWrapper = mount(<ActionButton id={id} label={label} />);
    expect(localWrapper).toMatchSnapshot();
  });

  it('Should show the icon', () => {
    const localWrapper = mount(<ActionButton id={id} label={label} startIcon={startIcon} />);
    expect(localWrapper).toMatchSnapshot();
  });

  it('Should the click', () => {
    const localWrapper = mount(<ActionButton id={id} label={label} onClick={onClick} />);
    localWrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
