function Employee(name,salary,id){
    this.name=name;
    this.salary=salary
    this.id=id;
 
}

Employee.prototype.getSalary=function(){
     console.log(`NAME=${this.name} SALARY=${this.salary} ID=${this.id}`)
}
function partTimeEmployee(name,salary,id)
{
    Employee.call(this,name,salary,id)

}
partTimeEmployee.prototype=Object.create(Employee.prototype)
let obj1=new partTimeEmployee("Ankit",1200000,1256)
let obj2=new partTimeEmployee("Aman",1405000,1656)
obj1.getSalary()
obj2.getSalary()
