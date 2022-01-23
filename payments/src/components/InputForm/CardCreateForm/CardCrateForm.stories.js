import { CardCreateForm } from '.';

export default {
  title: 'Component/CardCreateForm',
  component: CardCreateForm,
  argTypes: {},
};
const Template = (args) => <CardCreateForm {...args} />;

export const defaultForm = Template.bind({});
defaultForm.args = {
  numbers: {
    value: '0000000000000000',
    handleChange: () => {},
    isValid: false,
  },
  validDay: {
    value: {
      month: '10',
      year: '27',
    },
    handleChange: () => {},
    isValid: false,
  },
  owner: {
    value: 'SUN',
    handleChange: () => {},
    isValid: false,
  },
  cvc: {
    value: '111',
    handleChange: () => {},
    isValid: false,
  },
  password: {
    value: { firstDigit: 1, secondDigit: 2 },
    handleChange: () => {},
    isValid: false,
  },
};
