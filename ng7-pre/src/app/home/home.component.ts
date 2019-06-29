import { Component, OnInit } from '@angular/core';

// import new service
import { DataService } from '../data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	// By default, do not apply h1Style to the Home title in home.component.html
	h1Style: boolean = false;

	// Holds data from our call to the reqres.in public api
	users: Object;

	// create an instance of the data service
	constructor(private data: DataService) { }

	// On init, call getUsers() in our data service
	ngOnInit() {
		this.data.getUsers().subscribe(data => {
			this.users = data
			console.log(this.users);
		}
		);
	}

	// This event is bound to the button element in home.component.html
	firstClick() {
		// The alert is not included in the tutorial.  I added it for easier feedback.
		alert('clicked');

		console.log('clicked');
	}

	// This event is bound to the 'Change style' button in home.component.html
	changeTitleStyle() {
		this.h1Style = true;
	}

	serviceClick() {
		// Call the serviceClick() method in the data service
		this.data.serviceClick();
	}

}
