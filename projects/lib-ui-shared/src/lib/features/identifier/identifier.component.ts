import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-identifier',
  templateUrl: './identifier.component.html',
  styleUrls: ['./identifier.component.css']
})
export class IdentifierComponent implements OnInit {

  _componentName:string | undefined;
  _path:string | undefined;
  _module:string | undefined;
  _project:string | undefined;

  @Input()
  set componentName(name:string){
    this._componentName=name;
  }


  @Input()
  set path(path:string){
    this._path=path;
  }

  @Input()
  set module(module:string){
    this._module=module;
  }

  @Input()
  set project(name:string){
    this._project=name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
