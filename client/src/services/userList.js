import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    NumberField,
    Datefield,
} from 'react-admin';

const userList = props => {
    console.log(props)
    return <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="location" />
            <TextField source="education" />
            <NumberField source="overallRank" />
            <NumberField source="followers" />
            <NumberField source="following" />
        </Datagrid>
    </List>
};

export default userList;