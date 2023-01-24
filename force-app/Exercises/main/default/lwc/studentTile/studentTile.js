import { LightningElement, api} from 'lwc';

export default class StudentTile extends LightningElement {
    @api student= {
        Name: '[Harshal Patil]',
        PhotoUrl: '/services/images/photo/003B0FakePictId'
    }
    @api isSelected = false;
    get tileSelected() {
        return this.isSelected ? "tile selected" : "tile";
        }
        studentClick(event){
            //alert(this.student.Nam);
            debugger;
            console.log('Names**'+ this.student.Name);
            }
}