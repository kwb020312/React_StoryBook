import Test from "./Test";

export default {
    title:'Example/Test',
    component: Test
}

const Template = args => <Test {...args} />

export const SubTitle = Template.bind({})

SubTitle.args = {
    isTesting: true,
    Editable: false
}

