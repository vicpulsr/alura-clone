import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Task from '../components/Task';

export default function Routes(props) {
    return(
        <Switch>
            <Route exact path='/' component={Task} />
            <Route path='/lesson/:lessonId/task/:taskId' component={Task} />
            <Redirect from='*' to='/' />
        </Switch>
    );
}