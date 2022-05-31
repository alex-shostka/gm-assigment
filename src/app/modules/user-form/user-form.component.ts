import { Component, OnInit } from "@angular/core";
import { FormControl, FormBuilder, Validators } from "@angular/forms";
import { UserFormService } from "src/app/services/user-form.service";
import { IUserFormBuilderInterface } from "src/app/interfaces/user-form.interfase";

@Component({
  selector: "user-form",
  templateUrl: "./user-form.component.html",
})
export class UserFormComponent implements OnInit {

  fromStructure: IUserFormBuilderInterface[] = [];
  submitted = false;
  
  constructor(
    private userFormService: UserFormService,
    private fb: FormBuilder
  ) {}

  form = this.fb.group({
    name: new FormControl("", Validators.required),
	email: new FormControl("", Validators.required),
	confirm: new FormControl(true)
  });

  ngOnInit(): void {
    this.getFormBuilderConfig();
  }

  getFormBuilderConfig() {
    this.userFormService.getFormBuilderData().subscribe((data: any) => {
      this.fromStructure = [...data];
    });
  }

  get formControls() { return this.form.controls; }

  onSubmit() {
	this.submitted = true;
	if (this.form.invalid) {
		return;
	}
    console.log("Submit:", this.form.value);
  }
}
