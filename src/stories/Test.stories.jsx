import Test from "./Test";

export default {
    title:'Example/Test',
    component: Test,
    argTypes: {
        backgroundColor: { control: 'color'}
    },
    args: {
        primary: true
    },
    decorators: [
        Story => (
            <div style={{margin:'3em'}}>
                <Story />
            </div>
        )
    ]
}

const Template = args => <Test {...args} />

export const SubTitle = Template.bind({})

SubTitle.args = {
    isTesting: true,
    Editable: false
}