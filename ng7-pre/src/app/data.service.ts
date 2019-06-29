import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Added

@Injectable({
	providedIn: 'root'
})

export class DataService {
	constructor(private http: HttpClient) { }  // Create an instance of HttpClient

	// The tutorial replaces firstClick() here, but I'm using a new method name serviceClick() instead.
	serviceClick() {
		alert('hello from the data service!');

		return console.log('clicked');
	}

	// Use the HttpClient instance to grab some data from a reqres.in, a free public api
	getUsers() {
		return this.http.get('https://reqres.in/api/users')
	}
}
