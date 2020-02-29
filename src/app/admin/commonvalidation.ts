import { AbstractControl } from '@angular/forms';

export function CategoryValidate(control: AbstractControl) {
   
    if(control.value==-1)
    {
        return{ catVal:true };
    }
  return null;
}

export function RequiredFileType( type: string ) {
  return function (control: AbstractControl) {
debugger;
    const file = control.value;
    if (file) {
      const extension = file.split('.')[1].toLowerCase();
      if ( type.toLowerCase() !== extension.toLowerCase() ) {
        return {
          requiredFileType: true
        };
      }
      return null;
    }
    return null;
  };
}

export function ValidationUplodFile(type:any) {
  return function (control: AbstractControl) {
debugger;
    const file = control.value;
    if (file) {
      const extension = file.name.split('.')[1].toLowerCase();
      if ( type.toLowerCase() !== extension.toLowerCase() ) {
        return {
          requiredFileType: true
        };
      }
      const imagesize = file.size;
      if ( imagesize>124010 ) {
        return {
          limitUplodFileSize: true
        };
      }
      return null;
    }
    return null;
  };
}