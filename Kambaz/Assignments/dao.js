import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    return model.create(newAssignment);
}

export function findAssignmentsForCourse(courseId) {
    return model.find({ course: courseId }); // TODO - neeed to populate anything?
}

export function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
}
