var userProject = [
{
    "id": 1,
    "boss_name":"Leanne Graham",
    "project_name": "sansiri rama 9",
    "project_active": "1",
    "project_duedate": "5/24/2020"
},
{
    "id": 2,
    "boss_id":2,
    "boss_name":"Ervin Howell",
    "project_name": "sansiri bangyai",
    "project_active": "0",
    "project_duedate": "5/24/2017"
},
{
    "id": 3,
    "boss_id":3,
    "boss_name":"Clementine Bauch",
    "project_name": "sansiri Korat",
    "project_active": "1",
    "project_duedate": "1/2/2019"
}
];

exports.findAll = function() {
    return userProject;
};
exports.findById = function(id) {
    for(var i=0;i<userProject.length;i++){
        if(userProject[i].id === id)
        return userProject[i];
    }
};