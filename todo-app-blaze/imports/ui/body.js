import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './body.html';

Template.body.helpers({
    tasks() {
        return Tasks.find({}, { sort: { createdAt: -1, done: 1 } });
    }
});

Template.body.events({
    'submit .new-task' (event) {
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;

        if (text) {
            Tasks.insert({
                text,
                createdAt: new Date(),
            });

            target.text.value = '';
        }
    }
});

Template.task.events({
    'click .remove-task' (event) {
        Tasks.remove(this._id);
    },
    'click .mark-as-done' (event) {
        Tasks.update(this._id, {
            $set: { done: ! this.done }
        });
    }
});
