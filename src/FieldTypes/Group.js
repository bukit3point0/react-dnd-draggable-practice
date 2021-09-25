import styled from 'styled-components'
import Checkbox from './Checkbox'
import Input from './Input'
import Number from './Number'
import Select from './Select'

const Group = props => {
    const {field} = props
    return (
        <Box>
            {field.map(f => {
                if (f.input_type === "text") {
                    return <Input field={f}/>
                } else if (f.input_type === "checkbox") {
                    return <Checkbox field={f}/>
                } else if (f.input_type === "select") {
                    return <Select field={f}/>
                } else if (f.input_type === "number") {
                    return <Number field={f}/>
                }
            })}
        </Box>
    )
}

export default Group

const Box = styled.div`
    border: 1px solid black;
`