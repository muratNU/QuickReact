

/* 

@param courses {object} -- courses will hold the course code as its key, and all 
the other information as object as its value 

@param days

*/

const matchTime = ([indexDayStart, indexDayEnd], [dayStart, dayEnd]) => (
    (indexDayStart <= dayEnd && indexDayEnd >= dayEnd) || 
    (indexDayEnd >= dayStart && indexDayStart <= dayStart)
); 

const matchDays = (indexDay, day) => {
    if (indexDay.indexOf("M") > -1 && day.indexOf("M") > -1)
        return true;
    if (indexDay.indexOf("Tu") > -1 && day.indexOf("Tu") > -1)
        return true;
    if (indexDay.indexOf("W") > -1 && day.indexOf("W") > -1)
        return true;
    if (indexDay.indexOf("Th") > -1 && day.indexOf("Th") > -1)
        return true;
    if (indexDay.indexOf("F") > -1 && day.indexOf("F") > -1)
        return true;
}

const getStartAndEndTime = (meets) => {
    const time = meets.split("-");
    return [Number(time[0].split(" ")[1].replace(":", "")), Number(time[1].replace(":", ""))];
}

/* 
@param courses {object} -- courses will hold the course code as its key, and all 
the other information as object as its value

@param selected {array} -- An array of course codes which are selected by the user

@returns a set with all the courses that can not be selected 
*/
export const getConflictingCourses = (courses, selected) => {
    const conflictingCourses = new Set();
    selected.map((courseCode) => {
        const indexCourse = courses[courseCode];
        Object.entries(courses).map(([courseCode, course]) => {
            if(!selected.includes(courseCode) &&
                !conflictingCourses.has(courseCode) &&
                matchDays(indexCourse.meets, course.meets) && 
                matchTime(getStartAndEndTime(indexCourse.meets), 
                            getStartAndEndTime(course.meets)))
                    conflictingCourses.add(courseCode);         
        })
    })
    return conflictingCourses;
}
