class Student{
    constructor(ten, mssv){
        this.ten = ten;
        this.mssv = mssv;
    }
    getInfor = function (){
        return '${this.ten} - ${this.mssv} - ${this.getDiemTB}';
    }
    getDiemTB = function (){
        //xu ly lay du lieu tu mongodiem
        let diemtb = 5 + Math.floor(Math.random()*6);
        return diemtb;
    };
}