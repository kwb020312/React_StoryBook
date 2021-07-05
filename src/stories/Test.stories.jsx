import Test from "./Test";

export default {
    title:'Test System/Section/Test',
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

const Template = (args, { loaded: {data} }) => <Test {...args} {...data} />

export const SubTitle = Template.bind({})

SubTitle.args = {
    isTesting: true,
    Editable: false
}

SubTitle.loaders = [
    async () => ({
        data: await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json()
    })
]

SubTitle.parameters = {
    options: {
        storySort: (a,b) => a.localeCompare(b)
    }
}