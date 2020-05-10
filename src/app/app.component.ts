import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    dynamicForm: FormGroup;
    s

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        
    }
    isSuccessDiv = true;
    isFailureDiv = true;
    previousJob = false;
    cobraSuccessDiv = true;
    cobraFailDiv = true;
    hcCheckerDiv = true;
    endMessage = false;
    hcAutoSuccess = false;
    medicareDiv = true;


    //variables for the question answers
    loseCoverage = false;
    isMarried = false;
    isBaby = false;
    isDivorce = false;
    isMoved = false;
    isDenied = false;
    isDependent = false;
    isCitizened = false;
    isReleased = false;
    isPassed = false;

    loseCoverageComplete = false;
    isMarriedComplete = false;
    isBabyComplete = false;
    isDivorceComplete = false;
    isMovedComplete = false;
    isDeniedComplete = false;
    isDependentComplete = false;
    isCitizenedComplete = false;
    isReleasedComplete = false;
    isPassedComplete = false;

    isSSI = false;
    isSSIComplete = false;
    isSSIDiv = true;
    isnotSSIDiv=true;

    thanksDiv = true;

    toggleCobraSuccess(){
      this.cobraSuccessDiv = false;
      this.cobraFailDiv = true;
      this.hcCheckerDiv = true;
      this.isSuccessDiv = true;
      this.isFailureDiv = true;

      this.thanksDiv = true;
    }

    toggleCobraFail(){
      this.onReset()
      this.cobraFailDiv = false;
    }

    toggleDisplaySuccess(){
      this.isSuccessDiv = !this.isSuccessDiv
    }

    toggleResetThanks(){
      this.hcCheckerDiv = true;
      this.thanksDiv = false;
    }

    toggleHCChecker() {
      this.hcCheckerDiv = false;
      this.endMessage = true;
      this.isSuccessDiv = true;
      this.thanksDiv = true;
    }

    toggleNoHCChecker() {
      this.hcCheckerDiv = true;
      this.endMessage = false;
      this.isSuccessDiv = true;
    }

  //Toggling the various options
    toggleYesCoverage(btnPass, btnFail) {
      this.loseCoverage = true;
      this.showHCSuccess()
      this.loseCoverageComplete = true;
    }

    //buttonColorChanger

    toggleNoCoverage() {
      this.loseCoverage = false;
      this.loseCoverageComplete = true;
      this.showHCSuccess();
    }

    toggleYesMarried(){
      this.isMarried = true;
      this.isMarriedComplete = true;
      this.showHCSuccess();
    }

    toggleNoMarried(){
      this.isMarried = false;
      this.isMarriedComplete = true;
      this.showHCSuccess();
    }

    toggleYesBaby(){
      this.isBaby = true;
      this.isBabyComplete = true;
      this.showHCSuccess();
    }

    toggleNoBaby(){
      this.isBaby = false;
      this.isBabyComplete = true;
      this.showHCSuccess();
    }

    toggleYesDivorce(){
      this.isDivorce = true;
      this.isDivorceComplete = true;
      this.showHCSuccess();
    }

    toggleNoDivorce(){
      this.isDivorce = false;
      this.isDivorceComplete = true;
      this.showHCSuccess();
    }

    toggleYesMoved(){
      this.isMoved = true;
      this.showHCSuccess();
      this.isDivorceComplete = true;
    }

    toggleNoMoved(){
      this.isMoved = false;
      this.isMovedComplete = true;
      this.showHCSuccess();
    }

    toggleYesDenied(){
      this.isDenied = true;
      this.isDeniedComplete = true;
      this.showHCSuccess();
    }

    toggleNoDenied(){
      this.isDenied = false;
      this.isDeniedComplete = true;
      this.showHCSuccess();
    }

    toggleYesDependent(){
      this.isDependent = true;
      this.isDependentComplete = true;
      this.showHCSuccess();
    }

    toggleNoDependent(){
      this.isDependent = false;
      this.isDependentComplete = true;
      this.showHCSuccess();
    }

    toggleYesCitizen(){
      this.isCitizened = true;
      this.isCitizenedComplete = true;
      this.showHCSuccess();
    }

    toggleNoCitizen(){
      this.isCitizened = false;
      this.showHCSuccess();
      this.isCitizenedComplete = true;
    }

    toggleYesRelease(){
      this.isReleased = true;
      this.isReleasedComplete = true;
      this.showHCSuccess();
    }

    toggleNoRelease(){
      this.isReleased = false;
      this.isReleasedComplete = true;
      this.showHCSuccess();
    }

    toggleYesPassed(){
      this.isPassed = true;
      this.isPassedComplete =  true;
      this.showHCSuccess();
    }

    toggleNoPassed(){
      this.isPassed = false;
      this.isPassedComplete =  true;
      this.showHCSuccess();
    }

    showHCSuccess() {
      if(this.loseCoverage == true || this.isMarried == true || this.isBaby == true || this.isDivorce == true || this.isMoved == true || this.isDenied == true || this.isDependent == true || this.isCitizened == true || this.isReleased == true || this.isPassed == true){
        this.isSuccessDiv = false;
        this.isFailureDiv = true;
      }
      else if(this.loseCoverageComplete == true && this.isMarriedComplete == true && this.isBabyComplete == true && this.isDivorceComplete == true && this.isMovedComplete == true && this.isDeniedComplete == true && this.isDependentComplete == true && this.isCitizenedComplete == true && this.isReleasedComplete == true && this.isPassedComplete == true){
        this.isSuccessDiv = true;
        this.isFailureDiv = false;
      }
      else{
        this.isSuccessDiv = true;
        this.isFailureDiv = true;
      }
    }

    toggleYesMedicare(){
      this.medicareDiv = false;
    }

    toggleNoMedicare(){
      this.medicareDiv = true;
    }

    toggleYesSSI(){
      this.isSSI = true;
      this.isSSIComplete = true;
      this.toggleSSI()
    }

    toggleNoSSI(){
      this.isSSI = false;
      this.isSSIComplete = true;
      this.toggleSSI()
    }

    toggleSSI(){
      if(this.isSSIComplete == true)
      {
        if(this.isSSI==true)
        {
            this.isSSIDiv = false;
            this.isnotSSIDiv = true;
        }
        else{
            this.isSSIDiv = true;
            this.isnotSSIDiv = false;
        }
      }
    }

    toggleThanks(){
      this.thanksDiv = false;
    }

    onReset(){
      this.isSuccessDiv = true;
      this.isFailureDiv = true;
      this.previousJob = false;
      this.cobraSuccessDiv = true;
      this.cobraFailDiv = true;
      this.hcCheckerDiv = true;
      this.endMessage = false;
      this.hcAutoSuccess = false;
      this.medicareDiv = true;


      //variables for the question answers
      this.loseCoverage = false;
      this.isMarried = false;
      this.isBaby = false;
      this.isDivorce = false;
      this.isMoved = false;
      this.isDenied = false;
      this.isDependent = false;
      this.isCitizened = false;
      this.isReleased = false;
      this.isPassed = false;

      this.loseCoverageComplete = false;
      this.isMarriedComplete = false;
      this.isBabyComplete = false;
      this.isDivorceComplete = false;
      this.isMovedComplete = false;
      this.isDeniedComplete = false;
      this.isDependentComplete = false;
      this.isCitizenedComplete = false;
      this.isReleasedComplete = false;
      this.isPassedComplete = false;

      this.isSSI = false;
      this.isSSIComplete = false;
      this.isSSIDiv = true;
      this.isnotSSIDiv=true;

      this.thanksDiv = true;
    }
}
