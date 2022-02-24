import { FormGroup } from "@angular/forms";

export function passmatch (pass:any, cpass:any){
    return (FormGroup:FormGroup)=>{
        var ctrl1 = FormGroup.controls[pass];
        // console.log(ctrl1);

        var ctrl2 = FormGroup.controls[cpass];
        // console.log(ctrl1);

        if(ctrl2.errors){
            return;
        }

        if(ctrl1.value!=ctrl2.value){
            ctrl2.setErrors({xyz:true})
        }
        else{
            ctrl2.setErrors(null);
        }
    }
}