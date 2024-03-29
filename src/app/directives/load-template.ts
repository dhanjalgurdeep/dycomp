import {
    Component,
    Directive,
    NgModule,
    Input,
    ViewContainerRef,
    Compiler, OnInit, AfterViewInit
  } from '@angular/core';
  
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
  
  @Directive({
    selector: 'load-template' 
  })
  export class LoadTemplate {
    @Input() templateName: string;
    @Input() serviceURL: string;
    
    constructor(private vcRef: ViewContainerRef, private compiler: Compiler) {}
    ngOnInit() {
        console.log('TemplateName: ', this.templateName);
        const templateName = this.templateName;
        if (!templateName) return;
        const serviceURL = this.serviceURL;
        if (!serviceURL) return;
        console.log(this.templateName);
    @Component({
        selector: 'app-dycomponent',
        templateUrl: '' + templateName
       // styleUrls: ['./dycomponent.component.sass']
      })
       class DycomponentComponent {
        //@Input() templateName: string;
       // @Input() serviceURL: string;
        constructor() {
          console.log(templateName);
          console.log(serviceURL);
         }
        }

        @NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [DycomponentComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]

          })
          class DynamicHtmlModule {}
      
          this.compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
            .then(factory => {
              const compFactory = factory.componentFactories.find(x => x.componentType === DycomponentComponent);
              const cmpRef = this.vcRef.createComponent(compFactory, 0);
            });

  }}