import { CardRegister } from '.';

export default {
  title: 'Component/CardRegister',
  component: CardRegister,
  argTypes: {},
};

const Template = (args) => <CardRegister {...args} />;

export const CardRegisterForm = Template.bind({});
CardRegisterForm.args = {};
