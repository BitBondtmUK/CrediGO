import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-con-chosen',
  templateUrl: './con-chosen.page.html',
  styleUrls: ['./con-chosen.page.scss'],
})
export class ConChosenPage implements OnInit {

  qrData = "0"; //Para integrar al createdCode
  createdCode = null;

  constructor() { }

  ngOnInit() {
  }

  createCode() {
    this.createdCode = this.qrData;
  }


  //Control de Págo
  oneButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "1"
        this.createdCode = this.qrData;

      }
      else{
        this.qrData = this.qrData + "1"
        this.createdCode = this.qrData;

      }
    }
    }
  
    twoButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
      
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "2"
        this.createdCode = this.qrData;
        
      }
      else{
        this.qrData = this.qrData + "2"
        this.createdCode = this.qrData;
       
      }
    }
    }
  
    threeButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
       //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "3"
        this.createdCode = this.qrData;
         //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "3"
        this.createdCode = this.qrData;
         //Crea un QR Completo
      }
    }
    }
  
    fourButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
       //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "4"
        this.createdCode = this.qrData;
         //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "4"
        this.createdCode = this.qrData;
         //Crea un QR Completo
      }
    }
    }
  
    fiveButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
       //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "5"
        this.createdCode = this.qrData;
         //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "5"
        this.createdCode = this.qrData;
         //Crea un QR Completo
      }
    }
    }
  
    sixButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
       //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "6"
        this.createdCode = this.qrData;
         //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "6"
        this.createdCode = this.qrData;
         //Crea un QR Completo
      }
    }
    }
  
    sevenButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
       //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "7"
        this.createdCode = this.qrData;
         //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "7"
        this.createdCode = this.qrData;
        //Crea un QR Completo
      }
    }
    }
  
    eightButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
       //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "8"
        this.createdCode = this.qrData;
         //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "8"
        this.createdCode = this.qrData;
         //Crea un QR Completo
      }
    }
    }
  
    nineButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
      
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "9"
        this.createdCode = this.qrData;
         //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "9"
        this.createdCode = this.qrData;
        
      }
    }
    }
  
    zeroButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
     
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "0"
        this.createdCode = this.qrData;
         //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "0"
        this.createdCode = this.qrData;
         //Crea un QR Completo
      }
    }
    }
  
    cleanButton(){
      this.qrData = "0"
      this.createdCode = this.qrData;
       //Crea un QR Completo
    }

}
