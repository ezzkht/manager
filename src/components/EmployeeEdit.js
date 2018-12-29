import React, {Component} from 'react';
import {Card, CardSection, Button} from './common';
import {connect} from 'react-redux';
//import {employeeEdit} from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button
                    onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};

export default connect(mapStateToProps)(EmployeeEdit);