function skillsMembers() {
    var members = [
        {
            name: "John",
            skills: ["JavaScript", "CSS", "HTML", "React"]
        },
        {
            name: "Jane",
            skills: ["JavaScript", "CSS", "HTML", "Angular"]
        },
        {
            name: "Jack",
            skills: ["JavaScript", "CSS", "HTML", "Node"]
        }
    ];

    var skills = members.reduce(function (prev, curr) {
        curr.skills.forEach(function (skill) {
            if (prev.indexOf(skill) === -1) {
                prev.push(skill);
            }
        });
        return prev;
    }, []);

    console.log(skills);
}