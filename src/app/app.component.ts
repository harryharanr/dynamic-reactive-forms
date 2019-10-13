import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, AfterContentInit, OnInit, ComponentRef, AfterViewInit } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { Validators } from "@angular/forms";
import { FieldConfig } from "./interfaces/field.interface";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(DynamicFormComponent, { static: true }) form: DynamicFormComponent;
  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Firstname",
      inputType: "text",
      name: "firstname",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    }
  ]
  /* component: ComponentRef<HomeComponent>;

  @ViewChild('entry', { static: true, read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }
 */
  ngOnInit() {
    /* const homeFactory = this.resolver.resolveComponentFactory(HomeComponent);
    this.component = this.entry.createComponent(homeFactory);
    this.component.instance.title = 'New Title from App Component';
    this.component.instance.getTitleText.subscribe((data: string) => console.log(data)); */
  }

  /* destroyComponent() {
    this.component.destroy();
  } */
}
