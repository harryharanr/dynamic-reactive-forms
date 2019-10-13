import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputComponent } from '../dynamic-components/input/input.component';
import { ButtonComponent } from '../dynamic-components/button/button.component';
import { FieldConfig } from '../interfaces/field.interface';

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent
};
@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  componentRef: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }

}
