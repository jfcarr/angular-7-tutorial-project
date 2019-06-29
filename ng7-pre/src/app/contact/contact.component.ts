import { Component, OnInit } from '@angular/core';

// New: import FormBuilder, FormGroup, Validators from @angular/forms.
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

	messageForm: FormGroup;
	
	// Has the form been submitted?
	submitted = false;

	// Was validation successful?
	success = false;

	// Create a new instance of a FormBuilder
	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		// Create the messageForm object (from the FormBuilder object), with two properties: name and message
		this.messageForm = this.formBuilder.group({
			name: ['', Validators.required],
			message: ['', Validators.required]
		});
	}

	// This method submits the form
	onSubmit() {
		this.submitted = true;

		if (this.messageForm.invalid) {
			return;
		}

		this.success = true;
	}
}
