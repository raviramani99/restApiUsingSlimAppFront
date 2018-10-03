import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { PublicService } from '../public.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationService } from './../../services/validation.service';
import { Router } from '@angular/router';



@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

	public users: any;
	public addUserForm: any;
	public popupActive: boolean = false;

	constructor(private http: Http, private _publicService: PublicService, private formBuilder: FormBuilder, private router: Router) {
		// if( this.addUserForm.valid && this.addUserForm.dirty){
			this.addUserForm = this.formBuilder.group({
				'first_name': ['', Validators.required],
				'last_name': ['', Validators.required],
				'email': ['', [Validators.required, ValidationService.emailValidator]],
				'phone': ['', Validators.required],
				'address': ['', Validators.required],
				'city': '',
				'state': ''
			});
		// }
	}

	ngOnInit() {
		this.usersListing();
	}

	usersListing() {
		this._publicService.getAll().subscribe(
			response => {
				console.log(response)
				this.users = response;
			},
			err => {
				console.log(JSON.parse(err._body).message);
			},
		);
	}

	userInsert() {
		console.log(this.addUserForm.value);
		this._publicService.addUser(this.addUserForm.value).subscribe(
			response => {
				console.log('insert response', response)
				// this.router.navigate(['/public']);
				// this.router.navigate(['/users']);
				this.usersListing();
			},
			err => {
				this.usersListing();
				this.popupActive = false;
				// console.log(JSON.parse(err._body).message);
			},
		);
	}

	userRemove(id) {
		this._publicService.deleteUser(id).subscribe(
			response => {
				console.log(response)
			},
			err => {
				this.usersListing();
				// console.log(JSON.parse(err._body).message);
			},
		);
	}
	addUser(){
		this.popupActive = true;
	}
}
