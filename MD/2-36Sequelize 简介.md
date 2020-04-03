# 问答题

1. 什么是ORM？和直接使用driver驱动数据库有什么区别？
ORM即Object Relational Mapping（对象关系映射）的简称，是通过使用描述对象和数据库之间映射的元数据，将面向对象语言程序中的对象自动持久化到关系数据库中。本质上就是将数据从一种形式转换到另一种形式。
ORM可以作为driver驱动数据库的中间转换层，实现允许程序员读写数据对象而不必要使用底层的数据库驱动。
2. 如何使用squelize的async/await 写法？
const Sequelize = require("sequelize");

async function main(){
    var sequelize = new Sequelize(/* … */);
    await /* … */
}
3. 如何使用squelize定义数据库模型？
const User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
  });
4. 什么是数据库事务？如何使用在sequelize中使用事务？
    数据库事务是数据库进行操作的一个最小逻辑单位，如果事务中的任何一个步骤发生错误，则整个事务将回滚。
    调用sequeliaze的transaction函数，参数为以事务名为参数的回调函数。还要在该回调函数中出现的想要加入事务的操作添加OPTIONS参数，参数中声明transaction的归属。
# 代码题

## 请使用sequelize创建以上的表结构，并插入数据，而后完成如下代码题，请提交js代码、生成的SQL语句和运行结果截图
const Sequelize = require('sequelize');

async function main(){
const sequelize = new Sequelize('STCS', 'root', '66666666', {
    host: 'localhost',
    dialect:'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
await sequelize.authenticate()

const Student = sequelize.define('student', {
    sno: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    sname: {
        type: Sequelize.CHAR(8),
        allowNull:false
    },
    ssex: {
        type: Sequelize.CHAR(2),
        allowNull:false
    },
    sbirthday: {
        type: Sequelize.DATE
    },
    class: {
        type: Sequelize.CHAR(5)
    }
});
await Student.sync()

  const Teacher = sequelize.define('teacher', {
    tno: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey:true
    },
    tname: {
      type: Sequelize.CHAR(4),
      allowNull:false
    },
    tsex: {
      type: Sequelize.CHAR(2),
      allowNull:false
    },
    tbirthday: {
      type: Sequelize.DATE
    },
    prof: {
      type: Sequelize.CHAR(6)
    },
    depart:{
        type:Sequelize.STRING(10),
        allowNull:false
    }
});
await Teacher.sync()

const Course = sequelize.define('course', {
    cno: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    cname: {
        type: Sequelize.STRING(10),
        allowNull:false
    },
    tno: {
        type: Sequelize.INTEGER,
        allowNull:false,
    }
});
await Course.sync()

const Score = sequelize.define('score', {
    sno:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cno: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    degree: {
        type: Sequelize.DECIMAL(4,1)
    }
});
await Score.sync()

Course.hasOne(Teacher,{foreignKey: 'tno',sourceKey: 'tno'});
Teacher.belongsTo(Course, {foreignKey: 'tno',targetKey: 'tno'});
Student.hasMany(Score,{foreignKey:'sno',sourceKey:'sno'})
Score.belongsTo(Student, {foreignKey:'sno',targetKey:'sno'})
Course.hasMany(Score,{foreignKey:'cno',sourceKey:'cno'})
Score.belongsTo(Course, {foreignKey:'cno',targetKey:'cno'})


## 请查询所有男学生
let boys=await Student.findAll({
    where:{
        ssex:'男'
    }
})
console.log(boys)
## 请查询所有课程和对应课程的老师（使用join）
let courseTeacher=await Course.findAll({
    include:[Teacher],
    where:{tno:Sequelize.col('Teacher.tno')}
})
console.log(courseTeacher)
## 请查询95033班中学习成绩最好的学生（课程平均分最高的学生）
let bestStudent= await Score.findall({
    attributes:['Student.sname',[Sequelize.fn('AVG',sequelize.col('degree')),'avgdegress']],
    include:[
        {model:Student,where:{Class:95033}}
    ],
    order:[[Sequelize.fn('AVG',sequelize.col('degree')),'desc']],
    limit:1,
    group:['score.sno']
})
console.log(bestStudent);