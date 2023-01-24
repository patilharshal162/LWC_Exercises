import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue }from 'lightning/uiRecordApi';
import FIELD_Name from '@salesforce/schema/Contact.Name';
import FIELD_Description from'@salesforce/schema/Contact.Description';
import FIELD_Email from '@salesforce/schema/Contact.Email';
import FIELD_Phone from '@salesforce/schema/Contact.Phone';
const fields = [FIELD_Name, FIELD_Description, FIELD_Email,FIELD_Phone];
export default class StudentDetail extends LightningElement {

	studentId = '0038G00000Xp0NYQAA';

	@wire(getRecord, { recordId: '$studentId', fields })wiredStudent;
	
		
	get name() {
		return this._getDisplayValue(this.wiredStudent.data, FIELD_Name);
	}
    get description() {return this._getDisplayValue(this.wiredStudent.data,FIELD_Description);}
    get phone() {return this._getDisplayValue(this.wiredStudent.data,FIELD_Phone);}
    get email() {return this._getDisplayValue(this.wiredStudent.data,FIELD_Email);}

	get cardTitle() {
		let title = "Please select a student";
		if (this.wiredStudent.data) {
			title = this.name;
		} else if (this.wiredStudent.error) {
			title = "Something went wrong..."
		}
		return title;
	}
	
	_getDisplayValue(data, field) {
		return getFieldDisplayValue(data, field) ? getFieldDisplayValue(data, field) : getFieldValue(data, field);
	}
	
}