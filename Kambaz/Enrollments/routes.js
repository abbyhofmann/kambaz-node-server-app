import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
    app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
        const { userId, courseId } = req.params;
        const status = await enrollmentsDao.unenrollUserFromCourse(userId, courseId);
        res.send(status);
    });

    app.post("/api/enrollments/enroll", async (req, res) => {
        const { user, course } = req.body;
        const status = await enrollmentsDao.enrollUserInCourse(user, course);
        res.send(status);
    });

    app.get("/api/enrollments", async (req, res) => {
        const enrollments = await enrollmentsDao.findAllEnrollments();
        res.send(enrollments);
    });
}
