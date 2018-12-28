import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        //this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        //this.createDataSource(nextProps);
    }

    createDataSource({employees}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.DataSource = ds.cloneWithRows(employees);
    }

    renderItem(employee) {
        return <ListItem employee={employee.item} />;
    }

    render() {
        return (
            <FlatList
            data={this.props.employees}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={employee => employee.uid.toString()}
            >
            </FlatList>
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);