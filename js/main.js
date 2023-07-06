//use the set accssor only
const skills = {
    set current(skill) {
        this.log.push(skill);
    },
    log: []
};
skills.current = 'HTML'; 
skills.current = 'CSS';
skills.current = 'JS';

console.log(skills.log);